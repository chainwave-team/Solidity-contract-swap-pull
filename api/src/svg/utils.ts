import { Accessory } from "./types";
import { defs as defList } from "./defs"
import { backgrounds } from "./layers/backgrounds";
import { skins } from "./layers/skins";
import { hats } from "./layers/hats";
import { eyes } from "./layers/eyes";
import { buildSize, displaySize } from "../config";
import { mouses } from "./layers/mouses";
import { clothes } from "./layers/clothes";
import { specials } from "./layers/specials";
import { arms } from "./layers/arms";

function getAccessory(index: number, list: Accessory[], name: string): Accessory {
    if (index >= list.length) {
		throw new Error(`${name} not found. Index too high`);
	}

    return list[index];
}

export function getBackground(index: number): Accessory {
	return getAccessory(index, backgrounds, "background")
}

export function getSkin(index: number): Accessory {
	return getAccessory(index, skins, "skin")
}

export function getHat(index: number): Accessory {
	return getAccessory(index, hats, "hat")
}

export function getEye(index: number): Accessory {
	return getAccessory(index, eyes, "eye")
}

export function getMouse(index: number): Accessory {
	return getAccessory(index, mouses, "mouse")
}

export function getClothe(index: number): Accessory {
	return getAccessory(index, clothes, "clothe")
}

export function getArm(index: number): Accessory {
	return getAccessory(index, arms, "arm")
}

export function getSpecial(index: number): Accessory {
	return getAccessory(index, specials, "special")
}

export function deduplicateByName(accessories: Accessory[]): Accessory[] {
    return accessories.reduce<Accessory[]>((acc, curr) => {
        const found = acc.find(a => a.name === curr.name)
        if (!found) {
            acc.push(curr)
        }
        return acc
    }, [])
}

export function revolveValue({ value }: Accessory, props?: any): string {
	return typeof value === "function" ? value(props) : value
}

export function printAccessoryList(accessories: Accessory[]): string {
	return accessories
		.map(accessory => revolveValue(accessory))
		.join("")
}

export function extractChildren(accessory: Accessory): Accessory[] {
	return accessory?.children?.length ? accessory.children : []
}

export function isBelow(accessory: Accessory): boolean {
	return !!accessory.attr?.includes("below-dick")
}

// From accessories, fill the deps (filters, linear-gradients...)
export function extractDefs(props: { fromRegex: Accessory[], fromDefs: Accessory[] }): string {
		const defsRegex = new RegExp(/^url\(#[\S]*\)$/)
		let defs = new Map<string, string>()
	
		// For "dick" and "background" colors, we use a regex on the "value".
		for (const accessory of props.fromRegex) {
			let value = revolveValue(accessory)
			if (defsRegex.test(value)) {
				defs.set(value, defList[value])
			}
		}
	
		// For others, we look the "accessory.defs[]" property
		for (const accessory of props.fromDefs) {
			if (accessory?.defs?.length) {
				for (const key of accessory.defs) {
					const id = `url(#${key})`
					defs.set(id, defList[id])
				}
			}
		}

		return Array.from(defs.values()).join("")
}

export function getTitle(tokenId: number): string {
	const stringId = tokenId.toString()
	const digitCount = stringId.split("").length
	const idPrefix = "00000".split("").slice(0, 5 - digitCount).join("")
	const titlePrefix = "CryptoDick #"
	
	return titlePrefix + idPrefix + stringId
}

interface SVGProps {
	title?: string
	defs: string
	body: string
}

export function SVG({ title = "", defs, body }: SVGProps): string {
	return (
		`<svg width="${displaySize}" height="${displaySize}" viewBox="0 0 ${buildSize} ${buildSize}" xmlns="http://www.w3.org/2000/svg">
			<title>${title}</title>	
			<defs>${defs}</defs>
			${body}
		</svg>`
	)
}