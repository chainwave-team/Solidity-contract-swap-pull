import { Accessory } from '../types'

export const rainbowBlanket: Accessory = {
	name: 'Rainbow blanket',
	value: `<path id="rainbow-blanket" d="M10.291,24.311c10.656-4.044,15.528-2.187,15.528-2.187s12.481-2.431,14.852-5.1S46.5,21.819,46.5,21.819h0l1.042,11.014s5.537,6.139,3.488,7.39c-.825.506-8.452-3.925-10.163-3.428-3,.872-8.931.443-11.067,1.487a13.037,13.037,0,0,1-10.41.068l-.667-6.343s-4.912-5.041-1.269-7.519-.917.481-.917.481Z" transform="matrix(-0.105, 0.995, -0.995, -0.105, 80.859, 24.679)" fill="url(#rainbow-vertical)"/>`,
	defs: ["rainbow-vertical"]
}

export const rainbowCape: Accessory = {
	name: "Rainbow cape",
	value: `<path id="rainbow-cape" d="M206.511,148.726l-19.329,29.2,10.6,2.564h31.268l9.353-2.564-16.91-29.2Z" transform="translate(-166 -114)" fill="url(#rainbow-vertical)"/>`,
	defs: ["rainbow-vertical"],
	attr: ['below-dick']
}

export const clothes: Accessory[] = [
	{
		name: "Empty",
		value: ""
	},
	rainbowBlanket,
	rainbowCape,
]