import { deduplicateByName, extractChildren, extractDefs, getBackground, getEye, getHat, getSkin, getTitle, isBelow, printAccessoryList, revolveValue, SVG } from "./utils"
import { specialTraits } from "./layers/singleLayers"
import { createBackground } from "./layers/backgrounds"
import { createDick } from "./layers/skins"
import { Accessory } from "./types"

export type TraitName = "background" | "skin" | "hat" | "eye"
export type AttributesObject = { 
	[key in TraitName | "id"]: number 
}
export type Accessories = { 
	[key in TraitName | "special"]: Accessory 
}

function createSVGBody({background, skin, hat, eye, special}: Accessories): [string, string[]] {
	// Get extraAccessories
	const extraAccessories = deduplicateByName(
		[background, skin, hat, eye, special].flatMap(extractChildren)
	)

	// From accessories, fill the deps (filters, linear-gradients...)
	// TODO: Regex the value help us to remove redundant defs[] property
	const defsSVG = extractDefs({
		fromRegex: [background, skin],
		fromDefs: [hat, eye, special, ...extraAccessories]
	})

	// Create hat with optional params
	let hatSVG = revolveValue(hat, skin.value)
	let specialSVG = revolveValue(special, skin.value)

	// Filter extraAccessories by position
	const belowDick = extraAccessories.filter(isBelow)
	const aboveDick = extraAccessories.filter(a => !isBelow(a))

	// Order matters
	return [defsSVG ,[
		createBackground(background),
		printAccessoryList(belowDick),
		isBelow(hat) ? hatSVG : "",
		isBelow(special) ? specialSVG : "",
		createDick(skin),
		revolveValue(eye),
		printAccessoryList(aboveDick),
		!isBelow(hat) ? hatSVG : "",
		!isBelow(special) ? specialSVG : "",
	]]
}

export default function generateSVG (options: AttributesObject): string {
	// Get primary accessories from their indexes
	const background = getBackground(options.background)
	const skin = getSkin(options.skin)
	const hat = getHat(options.hat)
	const eye = getEye(options.eye)

	const [defs, body] = createSVGBody({ background, skin, hat, eye, special: {name: "Empty", value: ""} })

	// Build final SVG
	return SVG({
		title: getTitle(options.id),
		defs,
		body: body.join("")
	})
}

export function generateTraitSVG(
	trait: TraitName | "special",
	value: number
): string {
	const emptyElement: Accessory = {
		name: "Empty",
		value: ""
	}
	
	// Default values
	let background = getBackground(0)
	let skin = getSkin(0)
	let hat = emptyElement
	let eye = emptyElement
	let special = emptyElement

	switch (trait) {
		case "background":
			background = getBackground(value)
			skin = emptyElement
			break;
		case "skin":
			skin = getSkin(value)
			break;
		case "hat":
			hat = getHat(value)
			break;
		case "eye":
			eye = getEye(value)
			break;
		case "special":
			special = Object.entries(specialTraits)[value][1]
			break;
	}

	const [defs, body] = createSVGBody({ background, skin, hat, eye, special })

	return SVG({
		title: trait + " " + value,
		defs,
		body: body.join("")
	})
}
