/*
- Background color
- Special effect
- Hat
- Clothes
- Dick color
- Balls color
 */

export const backgroundColors = [
    "#ffc6ff",
    "#bdb2ff",
    "#a0c4ff",
    "#9bf6ff",
    "#caffbf",
    "#fdffb6",
    "#ffd6a5",
    "#ffadad",
    "#000000",
    "#136F63",
    "linear"
]
// export const backgroundWeigths

export const dickColors = [
    "#C78AD9",
    "#40B5C1",
    "#55D6BE",
	"#FC6471",
	"#ADA7FF"
]

export const dick = `<circle cx="246.031" cy="124.216" r="48.2158" fill="#55D6BE"/>
<rect x="197.815" y="122.979" width="96.4315" height="268.277" fill="#55D6BE"/>
<ellipse cx="246.031" cy="108.144" rx="6.18151" ry="19.7808" fill="#ADA7FF"/>
<ellipse cx="197.197" cy="378.894" rx="61.1969" ry="58.1062" fill="#FC6471"/>
<ellipse cx="294.865" cy="378.894" rx="61.1969" ry="58.1062" fill="#FC6471"/>`

export const attributesOptions = [
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
]

// const gradient = `<linearGradient id="linear-gradient" x1="1" y1="0.008" x2="0.014" y2="0.979" gradientUnits="objectBoundingBox">
// <stop offset="0" stop-color="#ffc6ff"/>
// <stop offset="0.148" stop-color="#bdb2ff"/>
// <stop offset="0.276" stop-color="#a0c4ff"/>
// <stop offset="0.435" stop-color="#9bf6ff"/>
// <stop offset="0.567" stop-color="#caffbf"/>
// <stop offset="0.685" stop-color="#fdffb6"/>
// <stop offset="0.857" stop-color="#ffd6a5"/>
// <stop offset="1" stop-color="#ffadad"/>
// </linearGradient>`

export const getBackground = (index: number) => {
	if (index >= backgroundColors.length) {
		throw new Error("Background color index too hight");
	}
	const color = backgroundColors[index]
	return `<rect width="500" height="500" fill="${color}"/>`
}
