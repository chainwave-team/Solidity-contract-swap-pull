const colors = [
	"#ffc6ff",
	"#bdb2ff",
	"#a0c4ff",
	"#9bf6ff",
	"#caffbf",
	"#fdffb6",
	"#ffd6a5",
	"#ffadad",
]

const attributesOptions = [
	[
		// alienEyes
		`<line x1="220.791" y1="94.1293" x2="170.791" y2="71.1293" stroke="#8E94F2"/>
		<ellipse cx="169" cy="65.175" rx="8" ry="10.5" fill="#9FA0FF"/>
		<ellipse cx="168.5" cy="65.175" rx="5.5" ry="8.5" fill="#8E94F2"/>
		<ellipse cx="168.5" cy="65.175" rx="4.5" ry="7.5" fill="#9FA0FF"/>
		<ellipse cx="168.5" cy="62.675" rx="2.5" ry="3" fill="white"/>
		<line x1="302.354" y1="54.0286" x2="268.354" y2="88.0286" stroke="#9FA0FF"/>
		<ellipse cx="309.217" cy="49.3394" rx="8" ry="10.5" transform="rotate(1.19342 309.217 49.3394)" fill="#9FA0FF"/>
		<ellipse cx="309.321" cy="49.3012" rx="6.14554" ry="8.5" transform="rotate(1.19342 309.321 49.3012)" fill="#8E94F2"/>
		<ellipse cx="309.352" cy="49.2816" rx="5.19706" ry="7.5" transform="rotate(1.19342 309.352 49.2816)" fill="#9FA0FF"/>
		<ellipse cx="309.562" cy="52.7264" rx="2.5" ry="3" transform="rotate(1.19342 309.562 52.7264)" fill="white"/>`,
		// rainbowBlanket
		``,
	],
	[
		// futureGlasses
		`<rect x="196" y="137" width="89" height="27" fill="black"/>
		<rect x="200" y="144" width="79" height="12" fill="#C4C4C4"/>
		<rect x="283" y="143.132" width="24" height="4.96473" transform="rotate(-14.8032 283 143.132)" fill="black"/>
		<rect x="188.126" y="141.887" width="9.34044" height="4.96473" transform="rotate(12.4691 188.126 141.887)" fill="black"/>`
	]
]
const dicks = [
	`<circle cx="246.031" cy="124.216" r="48.2158" fill="#55D6BE"/>
	<rect x="197.815" y="122.979" width="96.4315" height="268.277" fill="#55D6BE"/>
	<ellipse cx="246.031" cy="108.144" rx="6.18151" ry="19.7808" fill="#ADA7FF"/>
	<ellipse cx="197.197" cy="378.894" rx="61.1969" ry="58.1062" fill="#FC6471"/>
	<ellipse cx="294.865" cy="378.894" rx="61.1969" ry="58.1062" fill="#FC6471"/>`,
	`<ellipse cx="246.441" cy="146.414" rx="54.6834" ry="67.0262" transform="rotate(41.8035 246.441 146.414)" fill="#FC6471"/>
	<ellipse cx="179.938" cy="358.299" rx="64" ry="74" transform="rotate(102.303 179.938 358.299)" fill="#FC6471"/>
	<ellipse cx="307.671" cy="378.494" rx="64" ry="74" transform="rotate(75.4955 307.671 378.494)" fill="#FC6471"/>
	<ellipse cx="239.5" cy="233.5" rx="59.5" ry="124.5" fill="#FC6471"/>`
]

const secureFind = (index, arr) => arr[index % arr.length]
const layout = (children) => `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">${children}</svg>`

module.exports = (options = { bg: 0, dick: 0, attributes: [] }) => {
	// Set background
	const backgroundSVG = getBackground(
		secureFind(options?.bg || 0, colors)
	)

	// Choose dick model
	const currentDick = (options?.dick ?? 0) % dicks.length
	const dickSVG = dicks[currentDick];

	// Create attributes
	const possibleAttrs = attributesOptions[currentDick]
	let attributes = new Set()
	if (options?.attributes) {
		options.attributes.forEach(attrIndex => {
			attributes.add(secureFind(attrIndex, possibleAttrs))
		})
	}
	const attributesSVG = [...attributes].reduce((svg, attr) => svg += attr, "")

	// Build SVG
	return layout(`
		${backgroundSVG}
		${dickSVG}
		${attributesSVG}
	`)
}

const gradient = `<linearGradient id="linear-gradient" x1="1" y1="0.008" x2="0.014" y2="0.979" gradientUnits="objectBoundingBox">
<stop offset="0" stop-color="#ffc6ff"/>
<stop offset="0.148" stop-color="#bdb2ff"/>
<stop offset="0.276" stop-color="#a0c4ff"/>
<stop offset="0.435" stop-color="#9bf6ff"/>
<stop offset="0.567" stop-color="#caffbf"/>
<stop offset="0.685" stop-color="#fdffb6"/>
<stop offset="0.857" stop-color="#ffd6a5"/>
<stop offset="1" stop-color="#ffadad"/>
</linearGradient>`

const getBackground = (color) => `<rect width="500" height="500" fill="${color}"/>`

