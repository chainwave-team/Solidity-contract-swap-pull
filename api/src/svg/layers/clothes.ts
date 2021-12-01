import { Accessory } from '../types'

export const rainbowBlanket: Accessory = {
	name: 'Rainbow blanket',
	value: `<path id="rainbow-blanket" d="M10.291,24.311c10.656-4.044,15.528-2.187,15.528-2.187s12.481-2.431,14.852-5.1S46.5,21.819,46.5,21.819h0l1.042,11.014s5.537,6.139,3.488,7.39c-.825.506-8.452-3.925-10.163-3.428-3,.872-8.931.443-11.067,1.487a13.037,13.037,0,0,1-10.41.068l-.667-6.343s-4.912-5.041-1.269-7.519-.917.481-.917.481Z" transform="matrix(-0.105, 0.995, -0.995, -0.105, 80.859, 24.679)" fill="url(#rainbow-vertical)"/>`,
	defs: ["rainbow-vertical"]
}

// export const rainbowDress: Accessory = {
// 	name: 'Rainbow dress',
// 	value: `<path id="rainbow-dress" d="M13.585,39.351c6.959-5.029,15.782.708,15.782.708s-15.427-1.027-1.921-4.292c.822-2.165,7.814-8.86,9.928-9.331h0l3.157,2.26,1.534,14.6S45.682,55.386,43.642,58.3c-.822,1.181.342,3.817-1.361,4.976-2.991,2.035-3.712-1.455-6.209-3.687-3.337-1.7-5.188-2.164-6.471-3.325-1.8-1.586-6.737-2.5-6.737-2.5l-9.316.979s.557.437,4.185-5.343-.844-8.027-.844-8.027Z" transform="matrix(-0.105, 0.995, -0.995, -0.105, 96.129, 36.141)" fill="url(#rainbow-vertical)"/>`,
// 	defs: ["rainbow-vertical"]
// }

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
	// rainbowDress,
	rainbowCape,
]