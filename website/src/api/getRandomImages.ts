/*
 * This following algo is a copy the Solidity one
 * 
 * It's only to show random dicks on the website
 */

import { API_URL } from "../config"

// Rarity intervals
const backgroundItems = [90000, 80000, 70000, 60000, 50000, 40000, 30000, 23000, 16000, 11000, 7000, 4000, 3000, 2000, 1000, 0]
const skinItems = [90000, 80000, 70000, 60000, 50000, 40000, 30000, 20000, 15000, 10000, 5000, 1000, 0]
const hatItems = [70000, 64000, 58000, 52000, 46000, 40000, 34000, 28000, 22000, 16000, 10000, 5000, 3000, 1500, 500, 0]
const eyeItems = [35000, 22000, 10000, 6000, 3000, 1000, 0]
const mouseItems = [10000, 6000, 3500, 2000, 1000, 1000, 0]
const clotheItems = [12000, 5000, 0]
const armItems = [8000, 0]
const specialItems = [2000, 1000, 0]

const intervals = [backgroundItems, skinItems, hatItems, eyeItems, mouseItems, clotheItems, armItems, specialItems]

// Pick an item from the interval list
function randomSelect(interval: number[]) {
    const random = Math.random() * 1e7 % 1e5
    for (let i = 0; i < interval.length; i++) {
        if (random >= interval[i]) {
            return i
        }
    }
}

// Apply business logic rules and return an image path
function getRandomSelection() {
    // If we have a special element, we have to remove some properties.
    const special = randomSelect(specialItems)
    if (special !== 0) {
        return intervals.slice(0, 2).map(randomSelect).join("/") + "/0/0/0/0/0/" + special
    }

    // If we have the blanket clothe, don't append mouse
    const clothe = randomSelect(clotheItems)
    if (clothe === 1) {
        return intervals.slice(0, 4).map(randomSelect).join("/") + "/0/" + clothe + "/" + randomSelect(armItems) + "/" + special
    }

    // If we have the cosmonaut helmet clothe, don't append mouse
    const hat = randomSelect(hatItems)
    if (hat === 14) {
        return intervals.slice(0, 2).map(randomSelect).join("/") + "/" + hat + "/" + randomSelect(eyeItems) + "/0/" + clothe + "/" + randomSelect(armItems) + "/" + special
    }

    // Else fully random except the special who must not change
    return intervals.slice(0, 2).map(randomSelect).join("/") + "/" + hat + "/" + randomSelect(eyeItems) + "/" + randomSelect(mouseItems) + "/" + clothe + "/" + randomSelect(armItems) + "/" + special
}

export function getRandomImages(count: number): string[] {
    const paths = new Set<string>()

    while (paths.size < count) {
        const path = getRandomSelection()
        if (!paths.has(path)) {
            paths.add(path)
        }
    }

    return Array.from(paths).map((path, i) => `${API_URL}/svg/${i}/${path}`)
}