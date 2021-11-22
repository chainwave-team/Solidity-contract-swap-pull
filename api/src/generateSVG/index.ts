import { linearGradients } from "./colors"
import { getBackground } from "./background"
import { buildSize, displaySize } from "../config"
import { getAccessory } from "./utils"
import { cycloid, hats } from "./layers"
import { getDick } from "./dick"

type AttributesName =  "bgColor" | "dickColor" | "hat"
export type AttributesObject = { [key in AttributesName]: number }

function Layout (children: string): string {
	let defs = ""
	
	// TODO: Don't append all linearGradients, think about image weight
	for (const key in linearGradients) {
		if (Object.prototype.hasOwnProperty.call(linearGradients, key)) {
			const svg = linearGradients[key];
			defs += svg
		}
	}
	
	return (
		`<svg width="${displaySize}" height="${displaySize}" viewBox="0 0 ${buildSize} ${buildSize}" xmlns="http://www.w3.org/2000/svg">
			<defs>${defs}</defs>
			${children}
		</svg>`
	)
}



export default function generateSVG (options: AttributesObject): string {
	const hat = getAccessory(options.hat, hats, "Hat")

	// Build final SVG
	return Layout(`
		${getBackground(options.bgColor)}

		${hat?.attr?.includes("below-dick") ? hat.value : ""}
		
		${getDick({ mainColor: options.dickColor })}

		${hat.name === 'Red hat' ? cycloid.value : ''}
		${!hat?.attr?.includes("below-dick") ? hat.value : ""}
	`)
}
