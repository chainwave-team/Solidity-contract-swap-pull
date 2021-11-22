import { Accessory } from './types'

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
		name: "Red hat",
		value: `<path id="red-hat" d="M0,0C23.894,2.091,28.557,6.126,20.5,12.406s-9.1,11.968-14.353,2.487S0,0,0,0Z" transform="matrix(0.53, -0.848, 0.848, 0.53, 36.862, 30.661)" fill="#f83d61"/>`,
		attr: ["below-dick"]
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
	}
]

export const dickSkin: Accessory = {
	name: "Black waves",
	value: (
		`<g>
			<path d="M-117.437,46.383l1.818.424,1.619-.424" transform="translate(161 1.257)" fill="none" stroke="#070707" stroke-width="0.2"/>
			<path d="M-117.437,46.383l1.818.424,1.619-.424" transform="translate(160 -0.743)" fill="none" stroke="#070707" stroke-width="0.2"/>
			<path d="M-117.437,46.383l1.818.424,1.619-.424" transform="translate(160 -3.743)" fill="none" stroke="#070707" stroke-width="0.2"/>
			<path d="M-117.437,46.383l1.818.424,1.619-.424" transform="translate(160 -5.743)" fill="none" stroke="#070707" stroke-width="0.2"/>
			<path d="M-117.437,46.383l1.818.424,1.619-.424" transform="translate(160 -8.743)" fill="none" stroke="#070707" stroke-width="0.2"/>
			<path d="M-117.437,46.383l1.818.424,1.619-.424" transform="translate(166 -4.743)" fill="none" stroke="#070707" stroke-width="0.2"/>
			<path d="M-117.437,46.383l1.818.424,1.619-.424" transform="translate(166 -0.743)" fill="none" stroke="#070707" stroke-width="0.2"/>
			<path d="M-117.437,46.383l1.818.424,1.619-.424" transform="translate(163 5.257)" fill="none" stroke="#070707" stroke-width="0.2"/>
			<path d="M-117.437,46.383l1.818.424,1.619-.424" transform="translate(161 9.257)" fill="none" stroke="#070707" stroke-width="0.2"/>
			<path d="M-117.437,46.383l1.818.424,1.619-.424" transform="translate(159 15.257)" fill="none" stroke="#070707" stroke-width="0.2"/>
			<path d="M-117.437,46.383l1.818.424,1.619-.424" transform="translate(157 17.257)" fill="none" stroke="#070707" stroke-width="0.2"/>
			<path d="M-117.437,46.383l1.818.424,1.619-.424" transform="translate(154 20.257)" fill="none" stroke="#070707" stroke-width="0.2"/>
			<path d="M-117.437,46.383l1.818.424,1.619-.424" transform="translate(153 21.257)" fill="none" stroke="#070707" stroke-width="0.2"/>
			<path d="M-117.437,46.383l1.818.424,1.619-.424" transform="translate(165 16.257)" fill="none" stroke="#070707" stroke-width="0.2"/>
			<path d="M-117.437,46.383l1.818.424,1.619-.424" transform="translate(170 17.257)" fill="none" stroke="#070707" stroke-width="0.2"/>
			<path d="M-117.437,46.383l1.818.424,1.619-.424" transform="translate(169 19.257)" fill="none" stroke="#070707" stroke-width="0.2"/>
			<path d="M-117.437,46.383l1.818.424,1.619-.424" transform="translate(164 21.257)" fill="none" stroke="#070707" stroke-width="0.2"/>
			<path d="M-117.437,46.383l1.818.424,1.619-.424" transform="translate(158 21.257)" fill="none" stroke="#070707" stroke-width="0.2"/>
			<path d="M-117.437,46.383l1.818.424,1.619-.424" transform="translate(158 23.257)" fill="none" stroke="#070707" stroke-width="0.2"/>
			<path d="M-117.437,46.383l1.337.212,1.191-.212" transform="translate(165 -8.531)" fill="none" stroke="#070707" stroke-width="0.2"/>
			<path d="M-117.437,46.383l1.337.212,1.191-.212" transform="translate(164 -11.531)" fill="none" stroke="#070707" stroke-width="0.2"/>
			<path d="M-117.437,46.383l1.337.212,1.191-.212" transform="translate(161 -14.531)" fill="none" stroke="#070707" stroke-width="0.2"/>
			<path d="M-117.437,46.383l1.337.212,1.191-.212" transform="translate(160 -12.531)" fill="none" stroke="#070707" stroke-width="0.2"/>
			<path d="M-117.437,46.383l1.337.212,1.191-.212" transform="translate(168 -13.531)" fill="none" stroke="#070707" stroke-width="0.2"/>
			<path d="M-117.437,46.383l1.337.212,1.191-.212" transform="translate(168 -17.531)" fill="none" stroke="#070707" stroke-width="0.2"/>
			<path d="M-117.437,46.383l1.337.212,1.191-.212" transform="translate(160 -18.531)" fill="none" stroke="#070707" stroke-width="0.2"/>
			<path d="M-117.437,46.383l1.337.212,1.191-.212" transform="translate(169 -9.531)" fill="none" stroke="#070707" stroke-width="0.2"/>
			<path d="M-117.437,46.383l1.337.212,1.191-.212" transform="translate(169 -6.531)" fill="none" stroke="#070707" stroke-width="0.2"/>
			<path d="M-117.437,46.383l1.337.212,1.191-.212" transform="translate(169 -1.531)" fill="none" stroke="#070707" stroke-width="0.2"/>
			<path d="M-117.437,46.383l1.337.212,1.191-.212" transform="translate(169 2.469)" fill="none" stroke="#070707" stroke-width="0.2"/>
			<path d="M-117.437,46.383l1.337.212,1.191-.212" transform="translate(169 4.469)" fill="none" stroke="#070707" stroke-width="0.2"/>
			<path d="M-117.437,46.383l1.337.212,1.191-.212" transform="translate(168 7.469)" fill="none" stroke="#070707" stroke-width="0.2"/>
			<path d="M-117.437,46.383l1.337.212,1.191-.212" transform="translate(159 3.469)" fill="none" stroke="#070707" stroke-width="0.2"/>
			<path d="M-117.437,46.383l1.337.212,1.191-.212" transform="translate(167 11.469)" fill="none" stroke="#070707" stroke-width="0.2"/>
			<path d="M-117.437,46.383l1.337.212,1.191-.212" transform="translate(165 14.469)" fill="none" stroke="#070707" stroke-width="0.2"/>
			<path d="M-117.437,46.383l1.337.212,1.191-.212" transform="translate(171 25.469)" fill="none" stroke="#070707" stroke-width="0.2"/>
			<path d="M-117.437,46.383l1.337.212,1.191-.212" transform="translate(170 23.469)" fill="none" stroke="#070707" stroke-width="0.2"/>
			<path d="M-117.437,46.383l1.337.212,1.191-.212" transform="translate(175 20.469)" fill="none" stroke="#070707" stroke-width="0.2"/>
			<path d="M-117.437,46.383l1.337.212,1.191-.212" transform="translate(175 24.469)" fill="none" stroke="#070707" stroke-width="0.2"/>
			<path d="M-117.437,46.383l1.337.212,1.191-.212" transform="translate(174 30.469)" fill="none" stroke="#070707" stroke-width="0.2"/>
			<path d="M-117.437,46.383l1.337.212,1.191-.212" transform="translate(165 25.469)" fill="none" stroke="#070707" stroke-width="0.2"/>
			<path d="M-117.437,46.383l1.337.212,1.191-.212" transform="translate(157 26.469)" fill="none" stroke="#070707" stroke-width="0.2"/>
			<path d="M-117.437,46.383l1.337.212,1.191-.212" transform="translate(152 25.469)" fill="none" stroke="#070707" stroke-width="0.2"/>
			<path d="M-117.437,46.383l1.337.212,1.191-.212" transform="translate(155 29.469)" fill="none" stroke="#070707" stroke-width="0.2"/>
			<path d="M-117.437,46.383l1.337.212,1.191-.212" transform="translate(160 29.469)" fill="none" stroke="#070707" stroke-width="0.2"/>
			<path d="M-117.437,46.383l1.337.212,1.191-.212" transform="translate(162 27.469)" fill="none" stroke="#070707" stroke-width="0.2"/>
			<path d="M-117.437,46.383l1.337.212,1.191-.212" transform="translate(165 27.469)" fill="none" stroke="#070707" stroke-width="0.2"/>
			<path d="M-117.437,46.383l1.337.212,1.191-.212" transform="translate(169 30.469)" fill="none" stroke="#070707" stroke-width="0.2"/>
			<path d="M-117.437,46.383l1.337.212,1.191-.212" transform="translate(172 28.469)" fill="none" stroke="#070707" stroke-width="0.2"/>
			<path d="M-117.437,46.383l1.337.212,1.191-.212" transform="translate(177 27.469)" fill="none" stroke="#070707" stroke-width="0.2"/>
			<path d="M-117.437,46.383l1.337.212,1.191-.212" transform="translate(163 17.469)" fill="none" stroke="#070707" stroke-width="0.2"/>
		</g>`
	)
}

export const prepuce: Accessory = {
	name: "Prepuce",
	value: `<ellipse id="prepuce" cx="1" cy="3" rx="1" ry="3" transform="translate(47 26)" fill="#8259d1"/>`
}

export const ballsHairs: Accessory = {
	name: "Green balls hairs",
	value: (
		`<g>
			<path d="M4.116,4.082A3.8,3.8,0,0,0,2.6.68,3.206,3.206,0,0,0,0,.054" transform="matrix(-0.995, -0.105, 0.105, -0.995, 60.221, 83.894)" fill="none" stroke="#5fdd9d" stroke-linecap="round" stroke-width="0.5"/>
			<path d="M4.116,4.082A3.8,3.8,0,0,0,2.6.68,3.206,3.206,0,0,0,0,.054" transform="matrix(-0.995, -0.105, 0.105, -0.995, 58.221, 80.894)" fill="none" stroke="#5fdd9d" stroke-linecap="round" stroke-width="0.5"/>
			<path d="M.005,3.5A3.275,3.275,0,0,1,1.292.583,2.7,2.7,0,0,1,3.5.047" transform="matrix(-0.995, -0.105, 0.105, -0.995, 44.58, 82.196)" fill="none" stroke="#5fdd9d" stroke-linecap="round" stroke-width="0.5"/>
			<path d="M.005,3.5A3.275,3.275,0,0,1,1.292.583,2.7,2.7,0,0,1,3.5.047" transform="matrix(-0.995, -0.105, 0.105, -0.995, 42.58, 79.196)" fill="none" stroke="#5fdd9d" stroke-linecap="round" stroke-width="0.5"/>
			<path d="M.005,3.5A3.275,3.275,0,0,1,1.292.583,2.7,2.7,0,0,1,3.5.047" transform="matrix(-0.995, -0.105, 0.105, -0.995, 40.098, 82.513)" fill="none" stroke="#5fdd9d" stroke-linecap="round" stroke-width="0.5"/>
			<path d="M.005,3.5A3.275,3.275,0,0,1,1.292.583,2.7,2.7,0,0,1,3.5.047" transform="matrix(-0.995, -0.105, 0.105, -0.995, 38.098, 79.513)" fill="none" stroke="#5fdd9d" stroke-linecap="round" stroke-width="0.5"/>
			<path d="M-.207,1.48C-.181.825.476.5,1.249.168A6.165,6.165,0,0,1,3.474-.193" transform="matrix(-0.995, -0.105, 0.105, -0.995, 36.541, 81.069)" fill="none" stroke="#5fdd9d" stroke-linecap="round" stroke-width="0.5"/>
			<path d="M-.207,1.48C-.181.825.476.5,1.249.168A6.165,6.165,0,0,1,3.474-.193" transform="matrix(-0.995, -0.105, 0.105, -0.995, 34.541, 78.069)" fill="none" stroke="#5fdd9d" stroke-linecap="round" stroke-width="0.5"/>
			<path d="M.005,3.5A3.275,3.275,0,0,1,1.292.583,2.7,2.7,0,0,1,3.5.047" transform="matrix(-0.995, -0.105, 0.105, -0.995, 33.662, 82.006)" fill="none" stroke="#5fdd9d" stroke-linecap="round" stroke-width="0.5"/>
			<path d="M.005,3.5A3.275,3.275,0,0,1,1.292.583,2.7,2.7,0,0,1,3.5.047" transform="matrix(-0.995, -0.105, 0.105, -0.995, 31.662, 79.006)" fill="none" stroke="#5fdd9d" stroke-linecap="round" stroke-width="0.5"/>
			<path d="M0,.054A3.206,3.206,0,0,1,2.6.68a3.8,3.8,0,0,1,1.516,3.4" transform="matrix(-0.995, -0.105, 0.105, -0.995, 63.957, 83.213)" fill="none" stroke="#5fdd9d" stroke-linecap="round" stroke-width="0.5"/>
			<path d="M0,.054A3.206,3.206,0,0,1,2.6.68a3.8,3.8,0,0,1,1.516,3.4" transform="matrix(-0.995, -0.105, 0.105, -0.995, 61.957, 80.213)" fill="none" stroke="#5fdd9d" stroke-linecap="round" stroke-width="0.5"/>
			<path d="M3.881,1.849C4.057.927,3.372.563,2.55.208A5.6,5.6,0,0,0,0,.028" transform="matrix(-0.995, -0.105, 0.105, -0.995, 66.155, 81.433)" fill="none" stroke="#5fdd9d" stroke-linecap="round" stroke-width="0.5"/>
			<path d="M3.881,1.849C4.057.927,3.372.563,2.55.208A5.6,5.6,0,0,0,0,.028" transform="matrix(-0.995, -0.105, 0.105, -0.995, 64.155, 78.433)" fill="none" stroke="#5fdd9d" stroke-linecap="round" stroke-width="0.5"/>
			<path d="M4.116,4.082A3.8,3.8,0,0,0,2.6.68,3.206,3.206,0,0,0,0,.054" transform="matrix(-0.995, -0.105, 0.105, -0.995, 67.359, 81.794)" fill="none" stroke="#5fdd9d" stroke-linecap="round" stroke-width="0.5"/>
			<path d="M4.116,4.082A3.8,3.8,0,0,0,2.6.68,3.206,3.206,0,0,0,0,.054" transform="matrix(-0.995, -0.105, 0.105, -0.995, 65.359, 78.794)" fill="none" stroke="#5fdd9d" stroke-linecap="round" stroke-width="0.5"/>
		</g>`
	)
}

export const cycloid: Accessory = {
	name: "Cycloid",
	value: (
		`<defs>
			<filter id="cycloid-eye" x="34.642" y="20.887" width="26.488" height="22.729" filterUnits="userSpaceOnUse">
				<feOffset dy="3" input="SourceAlpha"/>
				<feGaussianBlur stdDeviation="3" result="blur"/>
				<feFlood flood-opacity="0.161"/>
				<feComposite operator="in" in2="blur"/>
				<feComposite in="SourceGraphic"/>
			</filter>
	  	</defs>
		<g>
			<path d="M109.748,579.965s1.469-.881,1.277-1.969" transform="translate(-60 -552.56)" fill="none" stroke="#000" stroke-width="0.2"/>
			<path d="M109.748,579.981s1.717-.888,1.493-1.984" transform="translate(-59 -551.576)" fill="none" stroke="#000" stroke-width="0.2"/>
			<path d="M109.748,579.817s1.493-.814,1.3-1.82" transform="translate(-58 -550.412)" fill="none" stroke="#000" stroke-width="0.2"/>
			<g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#cycloid-eye)">
				<path d="M-138.23-1097.862s3.877-5.186,8.23,0C-134.06-1092.913-138.23-1097.862-138.23-1097.862Z" transform="translate(182 1127.17)" fill="rgba(255,255,255,0.9)" stroke="#000" stroke-width="0.2"/>
			</g>
			<circle cx="1" cy="1" r="1" transform="translate(47 28)"/>
		</g>`
 	),
}