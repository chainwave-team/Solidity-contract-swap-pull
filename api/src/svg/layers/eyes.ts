import { Accessory } from '../types'

const femaleCycloid: Accessory = {
  name: "Female Cycloid",
  value: (
    `<g id="female-cycloid" transform="translate(0 4)">
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

const maleCycloid: Accessory = {
  name: "Male Cycloid",
  value: (
    `<g id="male-cycloid" transform="translate(24.989 10.417)">
		  	<g transform="matrix(1, 0, 0, 1, -24.99, -7.42)" filter="url(#male-cycloid-filter)">
				<path d="M-138.23-1097.084s3.793-6.939,8.052,0C-134.151-1090.462-138.23-1097.084-138.23-1097.084Z" transform="translate(181.99 1126.87)" fill="rgba(255,255,255,0.9)" stroke="#000" stroke-width="0.2"/>
		  	</g>
		  	<circle cx="1.176" cy="1.176" r="1.176" transform="translate(21.663 20.965)"/>
		</g>`
  ),
  defs: ["male-cycloid-filter"]
}

const maleCycloidTop: Accessory = {
  name: "Male Cycloid top",
  value: (
    `<g id="male-cycloid-top" transform="translate(18.989 41.405)">
			<g transform="matrix(1, 0, 0, 1, -18.99, -37.41)" filter="url(#male-cycloid-top-filter)">
				<path d="M-138.23-1097.589s3.171-5.8,6.731,0C-134.82-1092.053-138.23-1097.589-138.23-1097.589Z" transform="translate(182.99 1125.86)" fill="rgba(255,255,255,0.90)" stroke="#000" stroke-width="0.2"/>
			</g>
			<circle cx="0.983" cy="0.983" r="0.983" transform="translate(28.189 -11.311)"/>
		</g>`
  ),
  defs: ["male-cycloid-top-filter"]
}

const cryingEyes: Accessory = {
  name: "Crying eyes",
  value: (
    `<g id="crying-eyes" transform="translate(0 1)">
			<g transform="translate(24.808 13.364)">
				<g transform="matrix(1, 0, 0, 1, -24.81, -13.36)" filter="url(#picasso-small-eye-filter)">
					<path d="M-138.23-1098.856s1.613-2.95,3.424,0C-136.5-1096.041-138.23-1098.856-138.23-1098.856Z" transform="translate(181.81 1132.82)" fill="rgba(255,255,255,0.9)" stroke="#000" stroke-width="0.2"/>
				</g>
				<circle cx="0.5" cy="0.5" r="0.5" transform="translate(20 20)"/>
			</g>
			<g transform="translate(30.808 13.364)">
				<g transform="matrix(1, 0, 0, 1, -30.81, -13.36)" filter="url(#picasso-small-eye-filter)">
					<path d="M-138.23-1098.856s1.613-2.95,3.424,0C-136.5-1096.041-138.23-1098.856-138.23-1098.856Z" transform="translate(187.81 1132.82)" fill="rgba(255,255,255,0.9)" stroke="#000" stroke-width="0.2"/>
				</g>
				<circle cx="0.5" cy="0.5" r="0.5" transform="translate(20 20)"/>
			</g>
			<path d="M1014.946,626.706c.043-.147.018-.037-.135.341s.135.493.135.493.089.108.3,0,.152-.4.152-.4l-.267-1.183-.057.35S1014.9,626.853,1014.946,626.706Z" transform="translate(-970 -590.604)" fill="#fff"/>
			<path d="M1014.946,626.706c.043-.147.018-.037-.135.341s.135.493.135.493.089.108.3,0,.152-.4.152-.4l-.267-1.183-.057.35S1014.9,626.853,1014.946,626.706Z" transform="translate(-964 -590.604)" fill="#fff"/>
		</g>`
  ),
  defs: ["picasso-small-eye-filter"],
}

export const smallEyes: Accessory = {
  name: "Small eyes",
  value: (
    `<g id="small-eyes" transform="translate(0 0)">
            <g transform="matrix(1, 0, 0, 1, 0, -1)" filter="url(#small-eyes-filter)">
                <path d="M-138.23-1099.208a2.048,2.048,0,0,1,3.426,0C-136.495-1097.148-138.23-1099.208-138.23-1099.208Z" transform="translate(181 1133.8)" fill="rgba(255,255,255,0.90)" stroke="#000" stroke-width="0.2"/>
            </g>
            <g transform="matrix(1, 0, 0, 1, 0, -1)" filter="url(#small-eyes-filter)">
                <path d="M-138.23-1099.208a2.048,2.048,0,0,1,3.426,0C-136.495-1097.148-138.23-1099.208-138.23-1099.208Z" transform="translate(188 1133.8)" fill="rgba(255,255,255,0.90)" stroke="#000" stroke-width="0.2"/>
            </g>
            <circle cx="0.5" cy="0.5" r="0.5" transform="translate(44 33)"/>
            <circle cx="0.5" cy="0.5" r="0.5" transform="translate(51 33)"/>
        </g>`
  ),
  defs: ["small-eyes-filter"]
}

const smallEyesMakeup: Accessory = {
  name: "Small eyes makeup",
  value: (
    `<g id="small-eyes-makeup" transform="translate(-1 -4)">
            <path d="M423.938,35.839a2.323,2.323,0,0,1,.038-1.046c-.008-.149.271-.7,1.134-1.017a1.693,1.693,0,0,1,1.635.339,3.48,3.48,0,0,1,.987,1.347Z" transform="translate(-378 2)" fill="#12e5ed"/>
            <path d="M423.938,35.839a2.323,2.323,0,0,1,.038-1.046c-.008-.149.271-.7,1.134-1.017a1.693,1.693,0,0,1,1.635.339,3.48,3.48,0,0,1,.987,1.347Z" transform="translate(-373 2)" fill="#12e5ed"/>
            <g transform="translate(27.169 17.272)">
                <g transform="matrix(1, 0, 0, 1, -27.17, -17.27)" filter="url(#small-eyes-makeup-filter)">
                    <path d="M-138.23-1098.856s1.613-2.95,3.424,0C-136.5-1096.041-138.23-1098.856-138.23-1098.856Z" transform="translate(184.17 1136.73)" fill="rgba(255,255,255,0.90)" stroke="#000" stroke-width="0.2"/>
                </g>
                <circle cx="0.5" cy="0.5" r="0.5" transform="translate(20 20)"/>
            </g>
            <g transform="translate(32.169 17.272)">
                <g transform="matrix(1, 0, 0, 1, -32.17, -17.27)" filter="url(#small-eyes-makeup-filter)">
                    <path d="M-138.23-1098.856s1.613-2.95,3.424,0C-136.5-1096.041-138.23-1098.856-138.23-1098.856Z" transform="translate(189.17 1136.73)" fill="rgba(255,255,255,0.90)" stroke="#000" stroke-width="0.2"/>
                </g>
                <circle cx="0.5" cy="0.5" r="0.5" transform="translate(20 20)"/>
            </g>
        </g>`
  ),
  defs: ["small-eyes-makeup-filter"]
}

export const eyes: Accessory[] = [
  {
    name: "Empty",
    value: ""
  },
  maleCycloid,
  maleCycloidTop,
  smallEyes,
  cryingEyes,
  femaleCycloid,
  smallEyesMakeup
]