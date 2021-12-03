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

// Return an sorted array of svg ready to print
function createSVGBody({background, skin, hat, eye, mouse, clothe, arm, special}: Accessories): [string, string[]] {
	// Get extraAccessories
	const extraAccessories = deduplicateByName(
		[background, skin, hat, eye, mouse, clothe, arm, special].flatMap(extractChildren)
	)

	// From accessories, fill the deps (filters, linear-gradients...)
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
	const title = getTitle(options.id)
	const [defs, body] = createSVGBody({ 
		background: getBackground(options.background),
		skin: getSkin(options.skin),
		hat: getHat(options.hat),
		eye: getEye(options.eye),
		mouse: getMouse(options.mouse),
		clothe: getClothe(options.clothe),
		arm: getArm(options.arm),
		special: getSpecial(options.special),
	 })

	// Build final SVG
	return SVG({ title, defs, body: body.join("") })
}

export function generateTraitSVG(trait: TraitName, value: number): string {
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
