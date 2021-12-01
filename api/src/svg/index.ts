import { deduplicateByName, extractChildren, extractDefs, getArm, getBackground, getClothe, getEye, getHat, getMouse, getSkin, getSpecial, getTitle, isBelow, printAccessoryList, revolveValue, SVG } from "./utils"
import { createBackground } from "./layers/backgrounds"
import { createDick } from "./layers/skins"
import { Accessory } from "./types"

export type TraitName = "background" | "skin" | "hat" | "eye" | "mouse" | "clothe" | "arm" | "special"
export type AttributesObject = { 
	[key in TraitName | "id"]: number 
}
export type Accessories = { 
	[key in TraitName]: Accessory 
}

function createSVGBody({background, skin, hat, eye, mouse, clothe, arm, special}: Accessories): [string, string[]] {
	// Get extraAccessories
	const extraAccessories = deduplicateByName(
		[background, skin, hat, eye, mouse, clothe, arm, special].flatMap(extractChildren)
	)

	// From accessories, fill the deps (filters, linear-gradients...)
	// TODO: Regex the value help us to remove redundant defs[] property
	const defsSVG = extractDefs({
		fromRegex: [background, skin],
		fromDefs: [hat, eye, mouse, clothe, arm, special, ...extraAccessories]
	})

	// Create hat with optional params
	let hatSVG = revolveValue(hat, skin.value)
	let eyeSVG = revolveValue(eye)
	let mouseSVG = revolveValue(mouse)
	let clotheSVG = revolveValue(clothe)
	let armSVG = revolveValue(arm, skin.value)
	let specialSVG = revolveValue(special)

	// Filter extraAccessories by position
	const belowDick = extraAccessories.filter(isBelow)
	const aboveDick = extraAccessories.filter(a => !isBelow(a))
	

	// Order matters
	return [defsSVG ,[
		createBackground(background),
		printAccessoryList(belowDick),
		isBelow(hat) ? hatSVG : "",
		isBelow(clothe) ? clotheSVG : "",
		armSVG,
		createDick(skin),
		specialSVG,
		printAccessoryList(aboveDick),
		eyeSVG,
		mouseSVG,
		!isBelow(clothe) ? clotheSVG : "",
		!isBelow(hat) ? hatSVG : "",
	]]
}

export default function generateSVG (options: AttributesObject): string {
	// Get primary accessories from their indexes
	const background = getBackground(options.background)
	const skin = getSkin(options.skin)
	const hat = getHat(options.hat)
	const eye = getEye(options.eye)
	const mouse = getMouse(options.mouse)
	const clothe = getClothe(options.clothe)
	const arm = getArm(options.arm)
	const special = getSpecial(options.special)

	const [defs, body] = createSVGBody({ background, skin, hat, eye, mouse, clothe, arm, special })

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
	let mouse = emptyElement
	let clothe = emptyElement
	let arm = emptyElement
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
		case "mouse":
			mouse = getMouse(value)
			break;
		case "clothe":
			clothe = getClothe(value)
			break;
		case "arm":
			arm = getArm(value)
			break;
		case "special":
			special = getSpecial(value)
			break;
	}

	const [defs, body] = createSVGBody({ background, skin, hat, eye, mouse, clothe, arm, special })

	return SVG({
		title: trait + " " + value,
		defs,
		body: body.join("")
	})
}
