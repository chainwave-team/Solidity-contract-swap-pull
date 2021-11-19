import { AttributesObject } from "../types";
import { dick, getBackground } from "./layers";

export default function generateSVG (options: AttributesObject): string {
	// Build SVG
	return layout(`
		${getBackground(options.bgColor)}
		${dick}
	`)
}

const layout = (children: string): string => `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">${children}</svg>`

// const secureFind = <T>(index: number, arr: T[]): T => arr[index % arr.length]
//
// 	// Create attributes
// 	const possibleAttrs = attributesOptions[currentDick]
// 	let attributes = new Set<string>()
// 	if (options?.attributes) {
// 		options.attributes.forEach(attrIndex => {
// 			attributes.add(secureFind(attrIndex, possibleAttrs))
// 		})
// 	}
// 	const attributesSVG = [...attributes].reduce((svg, attr) => svg += attr, "")
