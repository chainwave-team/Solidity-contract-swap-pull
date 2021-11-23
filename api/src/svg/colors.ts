import { Accessory } from "./types"

export const backgrounds: Accessory[] = [
	{ name: "light-pink", value: "#ffc6ff" },
	{ name: "light-purple", value: "#bdb2ff" },
	{ name: "light-blue", value: "#a0c4ff" },
	{ name: "light-cyan", value: "#9bf6ff" },
	{ name: "light-green", value: "#caffbf" },
	// { name: "light-yellow", value: "#fdffb6" },
	{ name: "light-orange", value: "#ffd6a5" },
	// { name: "light-orange-red", value: "#ffadad" },
	{ name: "green", value: "#136F63" },
	{ name: "purple", value: "rgba(117,42,219,0.89)" },
	{ name: "linear-gradient-4", value: "url(#rainbow-vertical)" },
	{ name: "black", value: "#000000", attr: ["bg-stars"] },
]

export const dickColors: Accessory[] = [
	{ name: "pink", value: "#C78AD9", attr: ["pink-balls", "prepuce", "green-balls-hairs"] },
	{ name: "green", value: "#55D6BE", attr: ["red-balls", "prepuce"] },
	{ name: "red", value: "#FC6471" },
	{ name: "light-purple", value: "#ADA7FF", attr: ["prepuce"] },
	{ name: "cyan-to-green-vertical", value: "url(#cyan-to-green-vertical)" },
	{ name: "purple-to-green-45", value: "url(#purple-to-green-45)" },
	{ name: "yellow-to-pink-45", value: "url(#yellow-to-pink-45)" },
	{ name: "blue-to-pink-vertical", value: "url(#blue-to-pink-vertical)" },
	{ name: "blue-green", value: "#40B5C1", attr: ["prepuce", "dick-waves"] },
]
