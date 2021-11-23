import { createBackground, getBackground } from "./background"
import { buildSize, displaySize } from "../config"
import { getAccessory } from "./utils"
import { femaleCycloid, hats, maleCycloid, rainbowCape } from "./layers"
import { createDick, getDickSkin } from "./dick"
import { defs as defList } from "./defs"
import { Accessory } from "./types"

type AttributesName =  "bgColor" | "dickColor" | "hat"
export type AttributesObject = { [key in AttributesName]: number }

function extractDefs(accessory: Accessory): string {
	if (!accessory.defs?.length) {
		return ""
	}

	return accessory.defs.reduce((acc, key) => {
		acc += defList[`url(#${key})`]
		return acc
	}, "")
}

export default function generateSVG (options: AttributesObject): string {
	// Get primary accessories from their indexes
	const bgAccessory = getBackground(options.bgColor)
	const dickAccessory = getDickSkin(options.dickColor)
	const hatAccessory = getAccessory(options.hat, hats, "Hat")

	// Get extraAccessories
	const extraAccessories: Accessory[] = []
	switch (hatAccessory.name) {
		case 'Red hat':
			extraAccessories.push(femaleCycloid)
			break;
		case 'Monster ears':
			extraAccessories.push(maleCycloid)
			break;
	
		default:
			break;
	}

	// From accessories, fill the deps (filters, linear-gradients...)
	const defsRegex = new RegExp(/^url\(#[\S]*\)$/)
	let defs = ""

	// For "dick" and "background" colors, we use a regex on the "value".
	for (const accessory of [bgAccessory, dickAccessory]) {
		let value: string = typeof accessory.value === "function"
			? accessory.value()
			: accessory.value

		if (defsRegex.test(value)) {
			defs += defList[value]
		}
	}

	// For others, we look the "accessory.defs[]" property
	for (const accessory of [rainbowCape, hatAccessory, ...extraAccessories]) {
		defs += extractDefs(accessory)
	}

	// Create hat with optional params
	let hat: string = typeof hatAccessory.value === "function"
		? hatAccessory.value(dickAccessory.value)
		: hatAccessory.value

	// Build final SVG
	return (
		`<svg width="${displaySize}" height="${displaySize}" viewBox="0 0 ${buildSize} ${buildSize}" xmlns="http://www.w3.org/2000/svg">
			<defs>
				${defs}
			</defs>

			<g id="main">
				${createBackground(bgAccessory)}

				${hatAccessory?.attr?.includes("below-dick") ? hat : ""}
				
				${createDick(dickAccessory)}

				${extraAccessories.map(({ value }) => value).join("")}

				${!hatAccessory?.attr?.includes("below-dick") ? hat : ""}

				${rainbowCape.value}
			</g>
		</svg>`
	)
}
