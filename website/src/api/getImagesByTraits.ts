/*
 * This following algo is a copy the Solidity one
 * 
 * It's only to show random dicks on the website
 */

import { API_URL } from "../config"
import { intervals } from "./rarityIntervals"

interface Trait {
  name: string
  options: string[]
}

export interface TraitOption {
  name: string
  rarity: number
  url: string
}

export interface ImagesByTrait {
  name: string
  options: TraitOption[]
}

export function getImagesByTraits(traits: Record<string, string[]>): ImagesByTrait[] {
  const results: ImagesByTrait[] = []

  const traitsArray: Trait[] = Object
    .entries(traits)
    .map(([name, options]) => ({ name, options }))

  // For each trait variant list
  for (let i = 0; i < traitsArray.length; i++) {
    const { name, options } = traitsArray[i];
    const singularName = name.slice(0, name.length - 1)
    const interval = intervals[i]

    // For each options
    const extendedOptions: TraitOption[] = []
    for (let j = 0; j < options.length; j++) {
      const size = j === 0
        ? 1e5 - interval[j]
        : interval[j - 1] - interval[j]

      extendedOptions.push({
        name: options[j],
        rarity: 100 * size / 1e5,
        url: `${API_URL}/svg-trait/${singularName}/${j}`,
      })
    }

    results.push({ name, options: extendedOptions })
  }

  return results
}