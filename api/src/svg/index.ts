import { createBackground, getBackground } from "./background"
import { buildSize, displaySize } from "../config"
import { deduplicateByName, getAccessory } from "./utils"
import { hats } from "./layers/hats"
import { rainbowCape } from "./layers/singleLayers"
import { createDick, getDickSkin } from "./dick"
import { defs as defList } from "./defs"
import { Accessory } from "./types"
import { stringify } from "querystring"

type AttributesName =  "bgColor" | "dickColor" | "hat"
export type AttributesObject = { [key in AttributesName]: number }

function extractChildren(accessory: Accessory): Accessory[] {
	return accessory?.children?.length ? accessory.children : []
}

export default function generateSVG (options: AttributesObject): string {
	// Get primary accessories from their indexes
	const bgAccessory = getBackground(options.bgColor)
	const dickAccessory = getDickSkin(options.dickColor)
	const hatAccessory = getAccessory(options.hat, hats, "Hat")

	// Get extraAccessories
	const extraAccessoriesSet: Accessory[] = []
	extraAccessoriesSet.push(...extractChildren(hatAccessory))
	const extraAccessories = deduplicateByName(extraAccessoriesSet)

	// From accessories, fill the deps (filters, linear-gradients...)
	const defsRegex = new RegExp(/^url\(#[\S]*\)$/)
	let defs = new Map<string, string>()

	// For "dick" and "background" colors, we use a regex on the "value".
	for (const accessory of [bgAccessory, dickAccessory]) {
		let value: string = typeof accessory.value === "function"
			? accessory.value()
			: accessory.value

		if (defsRegex.test(value)) {
			defs.set(value, defList[value])
		}
	}

	// For others, we look the "accessory.defs[]" property
	for (const accessory of [rainbowCape, hatAccessory, ...extraAccessories]) {
		if (accessory?.defs?.length) {
			for (const key of accessory.defs) {
				const id = `url(#${key})`
				defs.set(id, defList[id])
			}
		}
	}

	// Create hat with optional params
	let hat: string = typeof hatAccessory.value === "function"
		? hatAccessory.value(dickAccessory.value)
		: hatAccessory.value

	// Build final SVG
	return (
		`<svg width="${displaySize}" height="${displaySize}" viewBox="0 0 ${buildSize} ${buildSize}" xmlns="http://www.w3.org/2000/svg">
			<defs>
				${Array.from(defs.values()).join("")}
			</defs>

			<g id="main">
				${createBackground(bgAccessory)}

				${hatAccessory?.attr?.includes("below-dick") ? hat : ""}
				
				${createDick(dickAccessory)}

				${!hatAccessory?.attr?.includes("below-dick") ? hat : ""}
				
				${extraAccessories.map(({ value }) => value).join("")}
			</g>
		</svg>`
	)
}

// ${rainbowCape.value}
// ${vampireTeeth.value}
// ${catMustache.value}