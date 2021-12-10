/*
 * This following algo is a copy the Solidity one
 * 
 * It's only to show random dicks on the website
 */

import { API_URL } from "../config"
import { armItems, clotheItems, eyeItems, hatItems, intervals, mouseItems, specialItems } from "./rarityIntervals"

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