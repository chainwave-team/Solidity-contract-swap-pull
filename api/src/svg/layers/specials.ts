import { Accessory } from '../types'
import { smallEyes } from './eyes'

export const ghostCape: Accessory = {
	name: "Ghost cape",
	value: (
		`<g id="ghost-cape" transform="translate(0 -1)">
			<path fill="#fff" d="M321,244.085a28.971,28.971,0,0,0-2.952,0s-3.162,2.024-3.686,3.331-2.106,4.559-2.106,4.559l-9.3,29.677s35.257-1.314,36.375,0-11.79-34.236-11.79-34.236l-2.629-2.147S321.048,244.186,321,244.085Z" transform="translate(-273 -220)"/>
			<ellipse fill="#101515" cx="2.5" cy="1" rx="2.5" ry="1" transform="translate(40 34)"/>
    		<ellipse fill="#101515" cx="2.5" cy="1" rx="2.5" ry="1" transform="translate(49 34)"/>
		</g>`
	)
}

export const darkCape: Accessory = {
	name: "Dark cape",
	value: (
		`<g id="dark-cape">
			<path d="M1319.99,621.085s-3.4-.375-4.823,1.647-3.251,11.841-3.7,13.372-3.71,12.071-3.71,12.071l-3.5,13.829-1.928,9.443h37.476s-10.453-45.929-11.932-47.205-2.041-2.579-3.324-3.158S1319.99,621.085,1319.99,621.085Z" transform="translate(-1273 -597)" fill="#0a0909"/>
			<g transform="translate(22.808 13.364)">
				<g transform="matrix(1, 0, 0, 1, -22.81, -13.36)" filter="url(#cape-small-eyes-filter-1)">
					<path d="M-138.23-1098.856s1.613-2.95,3.424,0C-136.5-1096.041-138.23-1098.856-138.23-1098.856Z" transform="translate(179.81 1132.82)" fill="rgba(255,255,255,0.75)" stroke="#000" stroke-width="0.2"/>
				</g>
				<circle cx="0.5" cy="0.5" r="0.5" transform="translate(20 20)"/>
			</g>
			<g transform="translate(30.808 13.364)">
				<g transform="matrix(1, 0, 0, 1, -30.81, -13.36)" filter="url(#cape-small-eyes-filter-2)">
					<path d="M-138.23-1098.856s1.613-2.95,3.424,0C-136.5-1096.041-138.23-1098.856-138.23-1098.856Z" transform="translate(187.81 1132.82)" fill="rgba(255,255,255,0.75)" stroke="#000" stroke-width="0.2"/>
				</g>
				<circle cx="0.5" cy="0.5" r="0.5" transform="translate(20 20)"/>
			</g>
		</g>`
	),
	defs: ["cape-small-eyes-filter-1", "cape-small-eyes-filter-2"]
}

export const specials: Accessory[] = [
	{
		name: "Empty",
		value: ""
	},
	darkCape,
	ghostCape
]