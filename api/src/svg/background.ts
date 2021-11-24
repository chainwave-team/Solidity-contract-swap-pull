import { backgrounds } from './colors'
import { buildSize } from '../config'
import { getAccessory } from './utils'
import { Accessory } from './types'

export const getBackground = (index: number): Accessory => {
    return getAccessory(index, backgrounds, "Background")
}

export const createBackground = (background: Accessory) => {
	const color = background.value
    
	return `<rect width="${buildSize}" height="${buildSize}" fill="${color}"/>`
}