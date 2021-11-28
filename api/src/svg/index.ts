import { buildSize, displaySize } from "../config"
import { deduplicateByName, extractChildren, extractDefs, getAccessory, getTitle, isBelow, printAccessoryList, revolveValue } from "./utils"
import { hats } from "./layers/hats"
import { catMustache, egyptianArms, ghostCape, indianGodArms, prepuce, rainbowBlanket, rainbowCape, rainbowDress, unHappyMouse, vampireTeeth } from "./layers/singleLayers"
import { eyes } from "./layers/eyes"
import { backgrounds, createBackground } from "./layers/backgrounds"
import { createDick, skins } from "./layers/skins"

export type AttributesObject = { 
	[key in "background" | "skin" | "hat" | "eye" | "id"]: number 
}

export default function generateSVG (options: AttributesObject): string {
	// Get primary accessories from their indexes
	const background = getAccessory(options.background, backgrounds, "background")
	const skin = getAccessory(options.skin, skins, "skin")
	const hat = getAccessory(options.hat, hats, "hat")
	const eye = getAccessory(options.eye, eyes, "eye")

	// Get extraAccessories
	const extraAccessories = deduplicateByName(
		[background, skin, hat, eye].flatMap(extractChildren)
	)

	// From accessories, fill the deps (filters, linear-gradients...)
	// TODO: Regex the value help us to remove redundant defs[] property
	const defsSVG = extractDefs({
		fromRegex: [background, skin],
		fromDefs: [rainbowBlanket, hat, eye, ...extraAccessories]
	})

	// Create hat with optional params
	let hatSVG = revolveValue(hat, skin.value)

	// Filter extraAccessories by position
	const belowDick = extraAccessories.filter(isBelow)
	const aboveDick = extraAccessories.filter(a => !isBelow(a))

	// Order matters
	const body = [
		createBackground(background),
		printAccessoryList(belowDick),
		isBelow(hat) ? hatSVG : "",
		// rainbowCape.value,
		revolveValue(egyptianArms, skin.value),
		createDick(skin),
		revolveValue(eye),
		printAccessoryList(aboveDick),
		!isBelow(hat) ? hatSVG : "",
		// unHappyMouse.value,
		// ghostCape.value,
		// rainbowBlanket.value,
		// rainbowDress.value,
		// vampireTeeth.value,
		// catMustache.value,
		// prepuce.value,
	]

	// Build final SVG
	return (
		`<svg width="${displaySize}" height="${displaySize}" viewBox="0 0 ${buildSize} ${buildSize}" xmlns="http://www.w3.org/2000/svg">
			<title>${getTitle(options.id)}</title>	
			<defs>${defsSVG}</defs>
			${body.join("")}
		</svg>`
	)
}
