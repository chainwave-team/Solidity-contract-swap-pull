
import { Accessory } from '../types'

export const femaleCycloid: Accessory = {
	name: "Female Cycloid",
	value: (
		`<g id="female-cycloid">
			<path d="M109.748,579.965s1.469-.881,1.277-1.969" transform="translate(-60 -552.56)" fill="none" stroke="#000" stroke-width="0.2"/>
			<path d="M109.748,579.981s1.717-.888,1.493-1.984" transform="translate(-59 -551.576)" fill="none" stroke="#000" stroke-width="0.2"/>
			<path d="M109.748,579.817s1.493-.814,1.3-1.82" transform="translate(-58 -550.412)" fill="none" stroke="#000" stroke-width="0.2"/>
			<g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#female-cycloid-filter)">
				<path d="M-138.23-1097.862s3.877-5.186,8.23,0C-134.06-1092.913-138.23-1097.862-138.23-1097.862Z" transform="translate(182 1127.17)" fill="rgba(255,255,255,0.9)" stroke="#000" stroke-width="0.2"/>
			</g>
			<circle cx="1" cy="1" r="1" transform="translate(47 28)"/>
		</g>`
 	),
	 defs: ["female-cycloid-filter"]
}

export const maleCycloid: Accessory = {
	name: "Male Cycloid",
	value: (
		`<g id="male-cycloid" transform="translate(24.989 7.417)">
		  	<g transform="matrix(1, 0, 0, 1, -24.99, -7.42)" filter="url(#male-cycloid-filter)">
				<path d="M-138.23-1097.084s3.793-6.939,8.052,0C-134.151-1090.462-138.23-1097.084-138.23-1097.084Z" transform="translate(181.99 1126.87)" fill="rgba(255,255,255,0.9)" stroke="#000" stroke-width="0.2"/>
		  	</g>
		  	<circle cx="1.176" cy="1.176" r="1.176" transform="translate(21.663 20.965)"/>
		</g>`
 	),
	 defs: ["male-cycloid-filter"]
}

export const smallMaleCycloid: Accessory = {
	name: "Small Male Cycloid",
	value: (
		`<g id="small-male-cycloid" transform="translate(25.921 7.697)">
			<g transform="matrix(1, 0, 0, 1, -25.92, -7.7)" filter="url(#small-male-cycloid-filter)">
				<path d="M-138.23-1098.856a4.734,4.734,0,0,1,6.484,0C-134.945-1096.041-138.23-1098.856-138.23-1098.856Z" transform="translate(182.92 1127.15)" fill="rgba(255,255,255,0.9)" stroke="#000" stroke-width="0.2"/>
			</g>
			<circle cx="0.5" cy="0.5" r="0.5" transform="translate(21.554 20)"/>
		</g>`
 	),
	 defs: ["small-male-cycloid-filter"]
}

export const smallEyes: Accessory = {
	name: "Small eyes",
	value: (
		`<g id="small-eyes" transform="translate(0 1)">
            <g transform="matrix(1, 0, 0, 1, 0, -1)" filter="url(#small-eyes-filter)">
                <path d="M-138.23-1099.208a2.048,2.048,0,0,1,3.426,0C-136.495-1097.148-138.23-1099.208-138.23-1099.208Z" transform="translate(181 1133.8)" fill="rgba(255,255,255,0.75)" stroke="#000" stroke-width="0.2"/>
            </g>
            <g transform="matrix(1, 0, 0, 1, 0, -1)" filter="url(#small-eyes-filter)">
                <path d="M-138.23-1099.208a2.048,2.048,0,0,1,3.426,0C-136.495-1097.148-138.23-1099.208-138.23-1099.208Z" transform="translate(188 1133.8)" fill="rgba(255,255,255,0.75)" stroke="#000" stroke-width="0.2"/>
            </g>
            <circle cx="0.5" cy="0.5" r="0.5" transform="translate(44 33)"/>
            <circle cx="0.5" cy="0.5" r="0.5" transform="translate(51 33)"/>
        </g>`
 	),
	 defs: ["small-eyes-filter"]
}

export const smallEyesMakeup: Accessory = {
	name: "Small eyes makeup",
	value: (
		`<g id="small-eyes-makeup" transform="translate(-1 -3)">
            <path d="M423.938,35.839a2.323,2.323,0,0,1,.038-1.046c-.008-.149.271-.7,1.134-1.017a1.693,1.693,0,0,1,1.635.339,3.48,3.48,0,0,1,.987,1.347Z" transform="translate(-378 2)" fill="#12e5ed"/>
            <path d="M423.938,35.839a2.323,2.323,0,0,1,.038-1.046c-.008-.149.271-.7,1.134-1.017a1.693,1.693,0,0,1,1.635.339,3.48,3.48,0,0,1,.987,1.347Z" transform="translate(-373 2)" fill="#12e5ed"/>
            <g transform="translate(27.169 17.272)">
                <g transform="matrix(1, 0, 0, 1, -27.17, -17.27)" filter="url(#small-eyes-makeup-filter)">
                    <path d="M-138.23-1098.856s1.613-2.95,3.424,0C-136.5-1096.041-138.23-1098.856-138.23-1098.856Z" transform="translate(184.17 1136.73)" fill="rgba(255,255,255,0.75)" stroke="#000" stroke-width="0.2"/>
                </g>
                <circle cx="0.5" cy="0.5" r="0.5" transform="translate(20 20)"/>
            </g>
            <g transform="translate(32.169 17.272)">
                <g transform="matrix(1, 0, 0, 1, -32.17, -17.27)" filter="url(#small-eyes-makeup-filter)">
                    <path d="M-138.23-1098.856s1.613-2.95,3.424,0C-136.5-1096.041-138.23-1098.856-138.23-1098.856Z" transform="translate(189.17 1136.73)" fill="rgba(255,255,255,0.75)" stroke="#000" stroke-width="0.2"/>
                </g>
                <circle cx="0.5" cy="0.5" r="0.5" transform="translate(20 20)"/>
            </g>
        </g>`
 	),
	 defs: ["small-eyes-makeup-filter"]
}