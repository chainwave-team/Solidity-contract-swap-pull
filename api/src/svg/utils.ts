import { Accessory } from "./types";
import { defs as defList } from "./defs"

export function getAccessory(index: number, list: Accessory[], name: string): Accessory {
    if (index >= list.length) {
		throw new Error(`${name} not found. Index too high`);
	}

    return list[index];
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