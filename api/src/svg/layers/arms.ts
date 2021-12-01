import { Accessory } from '../types'

export const egyptianArms: Accessory = {
	name: "Egyptian arms",
	value: (color: string) => (
		`<g id="egyptian-arms">
			<path d="M100.365,593.922H91.414V585l-6.239.506-1.084,3.578.968-1.96.47-.289.729-.289-.475,2.538,1.655-2.249-.248,2.249,1.42-2.749v11.179h11.754Z" transform="translate(-59 -553)" fill="${color}"/>
			<path d="M84.091,588.591h8.951v8.923l6.239-.506,1.084-3.578-.968,1.96-.47.289-.729.289.475-2.538-1.655,2.249.248-2.249-1.42,2.749V585H84.091Z" transform="translate(-29 -544)" fill="${color}"/>
		</g>`
	)
}

// export const indianGodArms: Accessory = {
// 	name: "Indian god arms",
// 	value: (color: string) => (
// 		`<g id="indian-god-arms">
// 			<path d="M-99.594,592.971l-8.606-9.362s1.4-7.682,3.368-10.753,9.025-8.258,9.025-8.258l4.164-5.444-.543,6.88-3.621,1.8-6.473,7.125-1.59,5.97,4.276,6.139Z" transform="translate(140 -549.326)" fill="${color}"/>
// 			<path d="M-100.249,592.971l8.606-9.362s-1.4-7.682-3.368-10.753-9.025-8.258-9.025-8.258l-4.164-5.444.543,6.88,3.621,1.8,6.473,7.125,1.59,5.97-4.276,6.139Z" transform="translate(156 -549.326)" fill="${color}"/>
// 		</g>`
// 	)
// }

export const arms: Accessory[] = [
	{
		name: "Empty",
		value: ""
	},
	egyptianArms,
	// indianGodArms,
]