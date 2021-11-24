import { femaleCycloid, maleCycloid, smallMaleCycloid, starsAroundTheHead } from './singleLayers'
import { Accessory } from '../types'

export const hats: Accessory[] = [
	{
		name: "Empty",
		value: ""
	},
	{
		name: "Angel ring",
		value: (
			`<g id="angel-circle" transform="translate(38 18)" fill="none" stroke="#f4ffa0" stroke-width="1">
				<ellipse cx="9.5" cy="2" rx="9.5" ry="2" stroke="none"/>
				<ellipse cx="9.5" cy="2" rx="9" ry="1.5" fill="none"/>
			</g>`
		)
	},
	{
		name: "Angel halo",
		value: (
			`<circle id="angle-halo" cx="13" cy="13" r="13" transform="translate(35 17)" fill="#f4ffa0"/>`
		),
		attr: ["below-dick"],
		children: [smallMaleCycloid],
	},
	{
		name: "Red hat",
		value: `<path id="red-hat" d="M0,0C23.894,2.091,28.557,6.126,20.5,12.406s-9.1,11.968-14.353,2.487S0,0,0,0Z" transform="matrix(0.53, -0.848, 0.848, 0.53, 36.862, 30.661)" fill="#f83d61"/>`,
		attr: ["below-dick"],
		children: [femaleCycloid],
	},
	{
		name: "Alien eyes",
		value: (
			`<g id="alien-eyes">
				<line id="right-antenna" y1="7" x2="7" transform="translate(52.5 19.5)" fill="none" stroke="#8e94f2" stroke-width="1"/>
				<line id="left-antenna" x1="11" y1="5" transform="translate(32.5 22.5)" fill="none" stroke="#8e94f2" stroke-width="1"/>
				<g id="left-eyes" transform="translate(32 20)" fill="#9fa0ff" stroke="#8e94f2" stroke-width="1">
					<ellipse cx="1.5" cy="2" rx="1.5" ry="2" stroke="none"/>
					<ellipse cx="1.5" cy="2" rx="1" ry="1.5" fill="none"/>
				</g>
				<g id="right-eyes" transform="translate(59 17)" fill="#9fa0ff" stroke="#8e94f2" stroke-width="1">
					<ellipse cx="1.5" cy="2" rx="1.5" ry="2" stroke="none"/>
					<ellipse cx="1.5" cy="2" rx="1" ry="1.5" fill="none"/>
				</g>
				<g id="left-pupil" transform="translate(33 21)" fill="#fff" stroke="#000" stroke-width="1">
					<circle cx="0.5" cy="0.5" r="0.5" stroke="none"/>
					<circle cx="0.5" cy="0.5" fill="none"/>
				</g>
				<g id="right-pupil" transform="translate(60 19)" fill="#fff" stroke="#000" stroke-width="1">
					<circle cx="0.5" cy="0.5" r="0.5" stroke="none"/>
					<circle cx="0.5" cy="0.5" fill="none"/>
				</g>
			</g>`
		)
	},
	{
		name: "Monster ears",
		value: (color: string) => (
			`<g id="monster-ears">
				<path d="M765.923,385.147l-1.453-4.612,4.448,2.243Z" transform="translate(-724 -358)" fill="${color}"/>
				<path d="M765.923,385.147l-1.453-4.612,4.448,2.243Z" transform="matrix(0.259, 0.966, -0.966, 0.259, 224.634, -814.815)" fill="${color}"/>
				<path d="M765.446,383.847l-.976-3.312,2.988,1.611Z" transform="translate(-723 -356.961)" fill="#5ebabe"/>
				<path d="M765.474,383.812l-1-3.277,3.073,1.594Z" transform="matrix(0.259, 0.966, -0.966, 0.259, 223.89, -813.58)" fill="#5ebabe"/>
			</g>`
		),
		children: [maleCycloid],
	},
	{
		name: "Illuminati triangle",
		value: (color: string) => (
			`<path id="illuminati-triangle" d="M9.352,2.4a2,2,0,0,1,3.3,0l7.2,10.47A2,2,0,0,1,18.2,16H3.8a2,2,0,0,1-1.648-3.133Z" transform="translate(37 18)" fill="${color}"/>`
		),
		children: [smallMaleCycloid, starsAroundTheHead],
	}
]
