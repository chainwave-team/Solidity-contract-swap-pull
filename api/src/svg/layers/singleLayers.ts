import { Accessory } from '../types'

export const rainbowBlanket: Accessory = {
	name: 'Rainbow blanket',
	value: `<path id="rainbow-blanket" d="M10.291,24.311c10.656-4.044,15.528-2.187,15.528-2.187s12.481-2.431,14.852-5.1S46.5,21.819,46.5,21.819h0l1.042,11.014s5.537,6.139,3.488,7.39c-.825.506-8.452-3.925-10.163-3.428-3,.872-8.931.443-11.067,1.487a13.037,13.037,0,0,1-10.41.068l-.667-6.343s-4.912-5.041-1.269-7.519-.917.481-.917.481Z" transform="matrix(-0.105, 0.995, -0.995, -0.105, 80.859, 24.679)" fill="url(#rainbow-vertical)"/>`,
	defs: ["rainbow-vertical"]
}

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
		`<g id="vampire-teeth">
			<path d="M.5,0,1,2H0Z" transform="translate(47 37) rotate(180)" fill="#fff"/>
			<path d="M.5,0,1,2H0Z" transform="translate(50 37) rotate(180)" fill="#fff"/>
		</g>`
	),
}

export const catMustache: Accessory = {
	name: "Vampire teeth",
	value: (
		`<g id="cat-mustache">
			<path d="M.006,5.488A5.778,5.778,0,0,1,1.587.914,2.759,2.759,0,0,1,4.3.073" transform="translate(36.745 33.207) rotate(-88)" fill="none" stroke="#5fdd9d" stroke-linecap="round" stroke-width="0.5"/>
			<path d="M.006,5.488A5.778,5.778,0,0,1,1.587.914,2.759,2.759,0,0,1,4.3.073" transform="translate(37.745 31.207) rotate(-88)" fill="none" stroke="#5fdd9d" stroke-linecap="round" stroke-width="0.5"/>
			<path d="M.006,0a5.778,5.778,0,0,0,1.58,4.574,2.759,2.759,0,0,0,2.71.841" transform="translate(53.818 33.304) rotate(-90)" fill="none" stroke="#5fdd9d" stroke-linecap="round" stroke-width="0.5"/>
			<path d="M.006,0a5.778,5.778,0,0,0,1.58,4.574,2.759,2.759,0,0,0,2.71.841" transform="translate(51.085 32.916) rotate(-48)" fill="none" stroke="#5fdd9d" stroke-linecap="round" stroke-width="0.5"/>
			<path d="M.006,5.488A5.778,5.778,0,0,1,1.587.914,2.759,2.759,0,0,1,4.3.073" transform="matrix(-0.695, -0.719, 0.719, -0.695, 41.08, 36.607)" fill="none" stroke="#5fdd9d" stroke-linecap="round" stroke-width="0.5"/>
			<path d="M.006,0a5.778,5.778,0,0,0,1.58,4.574,2.759,2.759,0,0,0,2.71.841" transform="translate(52.818 31.304) rotate(-90)" fill="none" stroke="#5fdd9d" stroke-linecap="round" stroke-width="0.5"/>
		</g>`
	),
}

export const rainbowCape: Accessory = {
	name: "Rainbow cape",
	value: `<path id="rainbow-cape" d="M206.511,148.726l-19.329,29.2,10.6,2.564h31.268l9.353-2.564-16.91-29.2Z" transform="translate(-166 -114)" fill="url(#rainbow-vertical)"/>`,
	defs: ["rainbow-vertical"]
}

export const egyptianArms: Accessory = {
	name: "Egyptian arms",
	value: (color: string) => (
		`<g id="egyptian-arms">
			<path d="M100.365,593.922H91.414V585l-6.239.506-1.084,3.578.968-1.96.47-.289.729-.289-.475,2.538,1.655-2.249-.248,2.249,1.42-2.749v11.179h11.754Z" transform="translate(-59 -553)" fill="${color}"/>
			<path d="M84.091,588.591h8.951v8.923l6.239-.506,1.084-3.578-.968,1.96-.47.289-.729.289.475-2.538-1.655,2.249.248-2.249-1.42,2.749V585H84.091Z" transform="translate(-29 -544)" fill="${color}"/>
		</g>`
	)
}

export const indianGodArms: Accessory = {
	name: "Indian god arms",
	value: (color: string) => (
		`<g id="indian-god-arms">
			<path d="M-99.594,592.971l-8.606-9.362s1.4-7.682,3.368-10.753,9.025-8.258,9.025-8.258l4.164-5.444-.543,6.88-3.621,1.8-6.473,7.125-1.59,5.97,4.276,6.139Z" transform="translate(140 -549.326)" fill="${color}"/>
			<path d="M-100.249,592.971l8.606-9.362s-1.4-7.682-3.368-10.753-9.025-8.258-9.025-8.258l-4.164-5.444.543,6.88,3.621,1.8,6.473,7.125,1.59,5.97-4.276,6.139Z" transform="translate(156 -549.326)" fill="${color}"/>
		</g>`
	)
}

export const unHappyMouse: Accessory = {
	name: "unhappy mouse",
	value: (
		`<path id="unhappy-mouse" d="M.005,3.5A3.275,3.275,0,0,1,1.292.583,2.7,2.7,0,0,1,3.5.047" transform="matrix(0.719, 0.695, -0.695, 0.719, 48.98, 36.798)" fill="none" stroke="#000000" stroke-linecap="round" stroke-width="0.5"/>`
	)
}