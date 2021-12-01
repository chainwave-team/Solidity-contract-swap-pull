import { Accessory } from '../types'

export const smallRedMouse: Accessory = {
	name: "Small red mouse",
	value: (
		`<g id="small-red-mouse" transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#small-mouse-filter)">
			<path d="M-138.23-1099.759a.68.68,0,0,1,1.23,0A.7.7,0,0,1-138.23-1099.759Z" transform="translate(186 1139.87)" fill="none" stroke="#de2b2b" stroke-width="2"/>
		</g>`
	),
	defs: ["small-mouse-filter"]
}

export const redMouse: Accessory = {
	name: "Red mouse",
	value: (
		`<g id="red-mouse" transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#mouse-filter)">
			<path d="M-138.23-1098.9s1.8-2.852,3.82,0C-136.295-1096.178-138.23-1098.9-138.23-1098.9Z" transform="translate(185 1139.2)" fill="none" stroke="#de2b2b" stroke-width="2"/>
		</g>`
	),
	defs: ["mouse-filter"]
}

export const vampireTeeth: Accessory = {
	name: "Vampire teeth",
	value: (
		`<g id="vampire-teeth" transform="translate(1 3)">
			<path d="M.5,0,1,2H0Z" transform="translate(47 37) rotate(180)" fill="#fff"/>
			<path d="M.5,0,1,2H0Z" transform="translate(50 37) rotate(180)" fill="#fff"/>
		</g>`
	),
}

export const catMustache: Accessory = {
	name: "Cat mustache",
	value: (
		`<g id="cat-mustache" transform="translate(1 5)">
			<path d="M.006,5.488A5.778,5.778,0,0,1,1.587.914,2.759,2.759,0,0,1,4.3.073" transform="translate(36.745 33.207) rotate(-88)" fill="none" stroke="#5fdd9d" stroke-linecap="round" stroke-width="0.5"/>
			<path d="M.006,5.488A5.778,5.778,0,0,1,1.587.914,2.759,2.759,0,0,1,4.3.073" transform="translate(37.745 31.207) rotate(-88)" fill="none" stroke="#5fdd9d" stroke-linecap="round" stroke-width="0.5"/>
			<path d="M.006,0a5.778,5.778,0,0,0,1.58,4.574,2.759,2.759,0,0,0,2.71.841" transform="translate(53.818 33.304) rotate(-90)" fill="none" stroke="#5fdd9d" stroke-linecap="round" stroke-width="0.5"/>
			<path d="M.006,0a5.778,5.778,0,0,0,1.58,4.574,2.759,2.759,0,0,0,2.71.841" transform="translate(51.085 32.916) rotate(-48)" fill="none" stroke="#5fdd9d" stroke-linecap="round" stroke-width="0.5"/>
			<path d="M.006,5.488A5.778,5.778,0,0,1,1.587.914,2.759,2.759,0,0,1,4.3.073" transform="matrix(-0.695, -0.719, 0.719, -0.695, 41.08, 36.607)" fill="none" stroke="#5fdd9d" stroke-linecap="round" stroke-width="0.5"/>
			<path d="M.006,0a5.778,5.778,0,0,0,1.58,4.574,2.759,2.759,0,0,0,2.71.841" transform="translate(52.818 31.304) rotate(-90)" fill="none" stroke="#5fdd9d" stroke-linecap="round" stroke-width="0.5"/>
		</g>`
	),
}

export const unHappyMouse: Accessory = {
	name: "Unhappy mouse",
	value: (
		`<path id="unhappy-mouse" d="M.005,3.5A3.275,3.275,0,0,1,1.292.583,2.7,2.7,0,0,1,3.5.047" transform="matrix(0.719, 0.695, -0.695, 0.719, 48.98, 36.798)" fill="none" stroke="#000000" stroke-linecap="round" stroke-width="0.5"/>`
	)
}

export const greenUnHappyMouse: Accessory = {
	name: "Green unhappy mouse",
	value: (
		`<path id="unhappy-mouse" d="M.005,3.5A3.275,3.275,0,0,1,1.292.583,2.7,2.7,0,0,1,3.5.047" transform="matrix(0.719, 0.695, -0.695, 0.719, 48.98, 36.798)" fill="none" stroke="#5fdd9d" stroke-linecap="round" stroke-width="0.5"/>`
	)
}

export const catMustacheAndTeeth: Accessory = {
	name: "Cat mustache and teeth",
	value: "",
	children: [catMustache, vampireTeeth]
}

export const catMustacheAndUnhappyMouse: Accessory = {
	name: "Cat mustache and unhappy mouse",
	value: "",
	children: [catMustache, unHappyMouse]
}

export const catMustacheAndGreenUnhappyMouse: Accessory = {
	name: "Cat mustache and green unhappy mouse",
	value: "",
	children: [catMustache, greenUnHappyMouse]
}


export const mouses: Accessory[] = [
	{
		name: "Empty",
		value: ""
	},
	// smallRedMouse,
	catMustache,
	redMouse,
	catMustacheAndTeeth,
	catMustacheAndUnhappyMouse,
	// vampireTeeth,
	catMustacheAndGreenUnhappyMouse,
	unHappyMouse,
	greenUnHappyMouse
]