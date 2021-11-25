import { Accessory } from '../types'

const cuteHairBelow: Accessory = {
	name: "Cute hair below",
	value: `<path id="cute-hair-below" transform="translate(-708 -139)" d="M755.155,162.085s-2.682-1.109-5.383,2.327-3.174,16.9-3.174,16.9l20.83,2.384,7.779,1.718,3.227-1.718-11.006-2.384-4.12-8.508-2.481-5.541Z" fill="url(#green-pink-purple-45)"/>`,
	defs: ["green-pink-purple-45"],
	attr: ["below-dick"]
}
const cuteHairCornBelow: Accessory = {
	name: "Cute hair corn below",
	value: `<path id="cute-hair-corn-below" d="M755.155,162.085s-2.682-1.109-5.383,2.327-4.242,18.56-4.242,18.56l20.941,1.746,8.661,1.19,3.677-2.213-11.381-2.384-4.12-8.508-2.481-5.541-2.6-15.3" transform="translate(-708 -139)" fill="url(#blue-pink-purple-45)"/>`,
	defs: ["blue-pink-purple-45"],
	attr: ["below-dick"]
}

// TODO: Stars are not well aligned
const starsAroundTheHead: Accessory = {
	name: "starsAroundTheHead",
	value: (
		`<g id="starsAroundTheHead">
			<path d="M4.477,5.539l.42.253-.111-.478.371-.321-.489-.042L4.477,4.5l-.191.451L3.8,4.993l.371.321-.111.478Z" transform="translate(48.172 11.708)" fill="#ff0"/>
			<path d="M4.477,5.539l.42.253-.111-.478.371-.321-.489-.042L4.477,4.5l-.191.451L3.8,4.993l.371.321-.111.478Z" transform="translate(44.172 10.708)" fill="#ff0"/>
			<path d="M4.477,5.539l.42.253-.111-.478.371-.321-.489-.042L4.477,4.5l-.191.451L3.8,4.993l.371.321-.111.478Z" transform="translate(40.172 10.708)" fill="#ff0"/>
			<path d="M4.477,5.539l.42.253-.111-.478.371-.321-.489-.042L4.477,4.5l-.191.451L3.8,4.993l.371.321-.111.478Z" transform="translate(36.172 12.708)" fill="#ff0"/>
			<path d="M4.477,5.539l.42.253-.111-.478.371-.321-.489-.042L4.477,4.5l-.191.451L3.8,4.993l.371.321-.111.478Z" transform="translate(33.172 15.708)" fill="#ff0"/>
			<path d="M4.477,5.539l.42.253-.111-.478.371-.321-.489-.042L4.477,4.5l-.191.451L3.8,4.993l.371.321-.111.478Z" transform="translate(32.172 18.708)" fill="#ff0"/>
			<path d="M4.477,5.539l.42.253-.111-.478.371-.321-.489-.042L4.477,4.5l-.191.451L3.8,4.993l.371.321-.111.478Z" transform="translate(31.172 22.708)" fill="#ff0"/>
			<path d="M4.477,5.539l.42.253-.111-.478.371-.321-.489-.042L4.477,4.5l-.191.451L3.8,4.993l.371.321-.111.478Z" transform="translate(32.172 28.708)" fill="#ff0"/>
			<path d="M4.477,5.539l.42.253-.111-.478.371-.321-.489-.042L4.477,4.5l-.191.451L3.8,4.993l.371.321-.111.478Z" transform="translate(36.172 31.708)" fill="#ff0"/>
			<path d="M4.477,5.539l.42.253-.111-.478.371-.321-.489-.042L4.477,4.5l-.191.451L3.8,4.993l.371.321-.111.478Z" transform="translate(39.172 33.708)" fill="#ff0"/>
			<path d="M4.477,5.539l.42.253-.111-.478.371-.321-.489-.042L4.477,4.5l-.191.451L3.8,4.993l.371.321-.111.478Z" transform="translate(43.172 34.708)" fill="#ff0"/>
			<path d="M4.477,5.539l.42.253-.111-.478.371-.321-.489-.042L4.477,4.5l-.191.451L3.8,4.993l.371.321-.111.478Z" transform="translate(48.172 33.708)" fill="#ff0"/>
			<path d="M4.477,5.539l.42.253-.111-.478.371-.321-.489-.042L4.477,4.5l-.191.451L3.8,4.993l.371.321-.111.478Z" transform="translate(52.172 31.708)" fill="#ff0"/>
			<path d="M4.477,5.539l.42.253-.111-.478.371-.321-.489-.042L4.477,4.5l-.191.451L3.8,4.993l.371.321-.111.478Z" transform="translate(54.172 27.708)" fill="#ff0"/>
			<path d="M4.477,5.539l.42.253-.111-.478.371-.321-.489-.042L4.477,4.5l-.191.451L3.8,4.993l.371.321-.111.478Z" transform="translate(55.172 23.708)" fill="#ff0"/>
			<path d="M4.477,5.539l.42.253-.111-.478.371-.321-.489-.042L4.477,4.5l-.191.451L3.8,4.993l.371.321-.111.478Z" transform="translate(55.172 19.708)" fill="#ff0"/>
			<path d="M4.477,5.539l.42.253-.111-.478.371-.321-.489-.042L4.477,4.5l-.191.451L3.8,4.993l.371.321-.111.478Z" transform="translate(54.172 16.708)" fill="#ff0"/>
			<path d="M4.477,5.539l.42.253-.111-.478.371-.321-.489-.042L4.477,4.5l-.191.451L3.8,4.993l.371.321-.111.478Z" transform="translate(52.172 13.708)" fill="#ff0"/>
		</g>`
	),
}

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
	},
	{
		name: "Red hat",
		value: `<path id="red-hat" d="M0,0C23.894,2.091,28.557,6.126,20.5,12.406s-9.1,11.968-14.353,2.487S0,0,0,0Z" transform="matrix(0.53, -0.848, 0.848, 0.53, 36.862, 30.661)" fill="#f83d61"/>`,
		attr: ["below-dick"],
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
	},
	// {
	// 	name: "Illuminati triangle",
	// 	value: (color: string) => (
	// 		`<path id="illuminati-triangle" d="M9.352,2.4a2,2,0,0,1,3.3,0l7.2,10.47A2,2,0,0,1,18.2,16H3.8a2,2,0,0,1-1.648-3.133Z" transform="translate(37 18)" fill="${color}"/>`
	// 	),
	// 	children: [starsAroundTheHead],
	// },
	{
		name: "Cute hair",
		value: `<path id="cute-hair" transform="translate(-708 -138)" d="M756,162.085c-.159,1.351,1.1,4.9,4.149,5.081s4.534,15.231,8.744,14.522,7.99,2.723,9.936,1.289-9.936-17.357-9.936-17.357l-6.613-4.246S756.159,160.734,756,162.085Z" fill="url(#green-pink-purple-45)"/>`,
		children: [cuteHairBelow],
		defs: ["green-pink-purple-45"]
	},
	{
		name: "Cute hair corn",
		value: `<path id="cute-hair" transform="translate(-708 -138)" d="M756,162.085c-.159,1.351,1.1,4.9,4.149,5.081s4.534,15.231,8.744,14.522,7.99,2.723,9.936,1.289-9.936-17.357-9.936-17.357l-6.613-4.246S756.159,160.734,756,162.085Z" fill="url(#blue-pink-purple-45)"/>`,
		children: [cuteHairCornBelow],
		defs: ["blue-pink-purple-45"]
	},
	{
		name: "Fire hair",
		value: (
			`<g id="fire-hair" transform="translate(0 -1)">
				<path d="M849.438,66.63s-5.191-1.7-1.925-5.976,4.107-4.122,4.107-4.122l4.089-2.042s3.38-2.6,3.468,0,5.2-1.065,2.689-1.546c-.593-.888,4.15-2.04,3.568,3.588s5.3,4.576,3.055,5.049-3.487,6.042-4.168,5.734-.77-6.113-1.951-6.3-1.083-1.524-3.193-.361-1.468,4.774-4.157.927-4.322,2.307-4.322,2.307Z" transform="translate(-809 -33)" fill="url(#green-yellow-orange-vertical)"/>
			</g>`
		),
		defs: ["green-yellow-orange-vertical"]
	},
	{
		name: "Witch hat",
		value: `<path id="witch-hat" d="M418.768,28.619s-19.514-1.23-11.779-6.731a55.2,55.2,0,0,1,13.473-7.347L426.6-.23l4.023,14.771s13.1.165,11.742,4.032-9.009,7.6-9.009,7.6-.623-4.634-2.733-6.013a13.585,13.585,0,0,0-5.537-1.59s-3.6.157-4.627,1.59-1.694,6.921-1.694,6.921Z" transform="translate(-378 7)" fill="#151313"/>`,
	},
	{
		name: "Cosmonaut helmet",
		value: (
			`<g id="cosmonaut-helmet">
				<path id="left-helmet-ear" d="M496.727,526.544l-1.892-.629v5.608l1.892-.553Z" transform="translate(-460 -498)" fill="#fff"/>
				<path id="right-helmet-ear" d="M496.727,526.544l-1.892-.629v5.608l1.892-.553Z" transform="translate(555.561 559.439) rotate(180)" fill="#fff"/>
				<g id="helmet-window" transform="translate(38 23)">
					<ellipse cx="10" cy="8.5" rx="10" ry="8.5" fill="url(#pink-to-purple-rounded)"/>
				</g>
				<g transform="translate(36 19)" fill="none" stroke="#fff" stroke-width="2">
					<circle cx="12" cy="12" r="12" stroke="none"/>
					<circle cx="12" cy="12" r="11" fill="none"/>
				</g>
				<g transform="translate(36 21)" fill="none" stroke="#fff" stroke-width="2">
					<ellipse cx="12" cy="10.5" rx="12" ry="10.5" stroke="none"/>
					<ellipse cx="12" cy="10.5" rx="11" ry="9.5" fill="none"/>
				</g>
				<g transform="translate(36 20)" fill="none" stroke="#fff" stroke-width="2">
					<ellipse cx="12" cy="11" rx="12" ry="11" stroke="none"/>
					<ellipse cx="12" cy="11" rx="11" ry="10" fill="none"/>
				</g>
				<path id="helmet-bottom" d="M497.966,542.957l-3.131,1.865V525.916l3.131,2.119.42.271" transform="translate(-487.606 538.5) rotate(-90)" fill="#fff"/>
			</g>`
		),
		defs: ["pink-to-purple-rounded"],
	}
]
