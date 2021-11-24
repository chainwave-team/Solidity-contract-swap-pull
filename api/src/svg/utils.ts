import { Accessory } from "./types";

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