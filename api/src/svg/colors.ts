import { Accessory } from "./types"

export const backgrounds: Accessory[] = [
	{ name: "pink", value: "#ffc6ff" },
	{ name: "purple", value: "#bdb2ff" },
	{ name: "light-blue", value: "#a0c4ff" },
	{ name: "cyan", value: "#9bf6ff" },
	{ name: "light-green", value: "#caffbf" },
	// { name: "yellow", value: "#fdffb6" },
	{ name: "orange", value: "#ffd6a5" },
	// { name: "orange-red", value: "#ffadad" },
	{ name: "green", value: "#136F63" },
	{ name: "linear-gradient-4", value: "url(#rainbow-vertical)" },
	{ name: "black", value: "#000000", attr: ["bg-stars"] },
]

export const dickColors: Accessory[] = [
	{ name: "pink", value: "#C78AD9", attr: ["pink-balls", "prepuce"] },
	{ name: "green", value: "#55D6BE", attr: ["pink-balls", "prepuce"] },
	{ name: "red", value: "#FC6471" },
	{ name: "purple", value: "#ADA7FF", attr: ["prepuce"] },
	{ name: "purple-to-green-45", value: "url(#purple-to-green-45)" },
	{ name: "yellow-to-pink-45", value: "url(#yellow-to-pink-45)" },
	{ name: "blue-to-pink-vertical", value: "url(#blue-to-pink-vertical)" },
	{ name: "blue-green", value: "#40B5C1", attr: ["prepuce", "dick-waves"] },
]

export const linearGradients: Record<string, string> = {
	"url(#purple-to-green-45)": (
		`<linearGradient id="purple-to-green-45" x1="0.105" y1="1.077" x2="0.933" y2="-0.048" gradientUnits="objectBoundingBox">
			<stop offset="0" stop-color="#50ffb1" />
			<stop offset="0.094" stop-color="#4fb286" />
			<stop offset="0.665" stop-color="#9381ff" />
			<stop offset="1" stop-color="#ff50f8" />
		</linearGradient>`
	),
	"url(#yellow-to-pink-45)": (
		`<linearGradient id="yellow-to-pink-45" x1="1.015" y1="-0.888" x2="-0.045" y2="1.333" gradientUnits="objectBoundingBox">
			<stop offset="0" stop-color="#cb429f"/>
			<stop offset="1" stop-color="#c4d6b0"/>
		</linearGradient>`
	),
	"url(#blue-to-pink-vertical)": (
		`<linearGradient id="blue-to-pink-vertical" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
			<stop offset="0" stop-color="#8e94f2"/>
			<stop offset="0.148" stop-color="#9fa0ff"/>
			<stop offset="0.271" stop-color="#ada7ff"/>
			<stop offset="0.419" stop-color="#bbadff"/>
			<stop offset="0.586" stop-color="#cbb2fe"/>
			<stop offset="0.744" stop-color="#dab6fc"/>
			<stop offset="0.892" stop-color="#ddbdfc"/>
			<stop offset="1" stop-color="#e0c3fc"/>
  		</linearGradient>`
	),
	"url(#rainbow-vertical)": (
		`<linearGradient id="rainbow-vertical" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
			<stop offset="0" stop-color="#ffc6ff"/>
			<stop offset="0.148" stop-color="#bdb2ff"/>
			<stop offset="0.276" stop-color="#a0c4ff"/>
			<stop offset="0.435" stop-color="#9bf6ff"/>
			<stop offset="0.567" stop-color="#caffbf"/>
			<stop offset="0.685" stop-color="#fdffb6"/>
			<stop offset="0.857" stop-color="#ffd6a5"/>
			<stop offset="1" stop-color="#ffadad"/>
		</linearGradient>`
	)
}