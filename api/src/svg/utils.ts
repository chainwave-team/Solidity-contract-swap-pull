import { Accessory } from "./types";

export function getAccessory(index: number, list: Accessory[], name: string): Accessory {
    if (index >= list.length) {
		throw new Error(`${name} not found. Index too high`);
	}

    return list[index];
}
