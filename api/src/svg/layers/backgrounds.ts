import { buildSize } from "../../config"
import { Accessory } from "../types"

export const backgroundStars: Accessory = {
	name: "Background stars",
	value: (
		`<g id="background-stars">
			<path d="M1.29.914.919.7,1.29.485a.044.044,0,0,0,.016-.06L1.219.274a.044.044,0,0,0-.06-.016L.788.473V.044A.044.044,0,0,0,.744,0H.569A.044.044,0,0,0,.525.044V.473L.153.258a.044.044,0,0,0-.06.016L.006.426a.044.044,0,0,0,.016.06L.394.7.022.914a.044.044,0,0,0-.016.06l.088.152a.044.044,0,0,0,.06.016L.525.927v.429A.044.044,0,0,0,.569,1.4H.744a.044.044,0,0,0,.044-.044V.927l.372.214a.044.044,0,0,0,.06-.016L1.306.974A.044.044,0,0,0,1.29.914Z" transform="translate(77.226 42.419)" fill="#ff43f1"/>
			<path d="M1.29.914.919.7,1.29.485a.044.044,0,0,0,.016-.06L1.219.274a.044.044,0,0,0-.06-.016L.788.473V.044A.044.044,0,0,0,.744,0H.569A.044.044,0,0,0,.525.044V.473L.153.258a.044.044,0,0,0-.06.016L.006.426a.044.044,0,0,0,.016.06L.394.7.022.914a.044.044,0,0,0-.016.06l.088.152a.044.044,0,0,0,.06.016L.525.927v.429A.044.044,0,0,0,.569,1.4H.744a.044.044,0,0,0,.044-.044V.927l.372.214a.044.044,0,0,0,.06-.016L1.306.974A.044.044,0,0,0,1.29.914Z" transform="translate(47.132 81.36)" fill="#ff43f1"/>
			<path d="M1.29.914.919.7,1.29.485a.044.044,0,0,0,.016-.06L1.219.274a.044.044,0,0,0-.06-.016L.788.473V.044A.044.044,0,0,0,.744,0H.569A.044.044,0,0,0,.525.044V.473L.153.258a.044.044,0,0,0-.06.016L.006.426a.044.044,0,0,0,.016.06L.394.7.022.914a.044.044,0,0,0-.016.06l.088.152a.044.044,0,0,0,.06.016L.525.927v.429A.044.044,0,0,0,.569,1.4H.744a.044.044,0,0,0,.044-.044V.927l.372.214a.044.044,0,0,0,.06-.016L1.306.974A.044.044,0,0,0,1.29.914Z" transform="translate(36.526 52.547)" fill="#ff43f1"/>
			<path d="M1.29.914.919.7,1.29.485a.044.044,0,0,0,.016-.06L1.219.274a.044.044,0,0,0-.06-.016L.788.473V.044A.044.044,0,0,0,.744,0H.569A.044.044,0,0,0,.525.044V.473L.153.258a.044.044,0,0,0-.06.016L.006.426a.044.044,0,0,0,.016.06L.394.7.022.914a.044.044,0,0,0-.016.06l.088.152a.044.044,0,0,0,.06.016L.525.927v.429A.044.044,0,0,0,.569,1.4H.744a.044.044,0,0,0,.044-.044V.927l.372.214a.044.044,0,0,0,.06-.016L1.306.974A.044.044,0,0,0,1.29.914Z" transform="translate(56.108 17.408)" fill="#ff43f1"/>
			<path d="M4.477,5.539l.42.253-.111-.478.371-.321-.489-.042L4.477,4.5l-.191.451L3.8,4.993l.371.321-.111.478Z" transform="translate(20.923 74.253)" fill="#53b0ff"/>
			<path d="M4.477,5.539l.42.253-.111-.478.371-.321-.489-.042L4.477,4.5l-.191.451L3.8,4.993l.371.321-.111.478Z" transform="translate(3.035 43.827)" fill="#53b0ff"/>
			<path d="M4.3,5.264l.309.186L4.524,5.1,4.8,4.862l-.36-.031L4.3,4.5l-.14.332-.36.031L4.07,5.1l-.082.352Z" transform="translate(19.629 29.188)" fill="#53b0ff"/>
			<path d="M4.3,5.264l.309.186L4.524,5.1,4.8,4.862l-.36-.031L4.3,4.5l-.14.332-.36.031L4.07,5.1l-.082.352Z" transform="translate(64.504 65.271)" fill="#53b0ff"/>
			<path d="M4.477,5.539l.42.253-.111-.478.371-.321-.489-.042L4.477,4.5l-.191.451L3.8,4.993l.371.321-.111.478Z" transform="translate(79.942 26.585)" fill="#ff0"/>
		</g>`
 	),
	 attr: ["below-dick"]
}

// Only for the frontend
export const transparentBackground: Accessory = { name: "transparent", value: "transparent" }

export const backgrounds: Accessory[] = [
	{ name: "light-pink", value: "#ffc6ff" },
	{ name: "light-purple", value: "#bdb2ff" },
	{ name: "light-blue", value: "#a0c4ff" },
	{ name: "light-cyan", value: "#9bf6ff" },
	{ name: "light-green", value: "#caffbf" },
	{ name: "light-yellow", value: "#fdffb6" },
	{ name: "light-orange", value: "#ffd6a5" },
	{ name: "light-orange-red", value: "#ffadad" },
	{ name: "green2", value: "#20d09a" },
	{ name: "green", value: "#136F63" },
	{ name: "purple", value: "rgba(117,42,219,0.89)" },
	{ name: "rainbow-vertical", value: "url(#rainbow-vertical)" },
	// { name: "rainbow-circle-transparent", value: "url(#rainbow-circle-transparent)" },
	{ name: "yellow-to-pink-circle", value: "url(#yellow-to-pink-circle)" },
	{ name: "shades-of-grey-vertical", value: "url(#shades-of-grey-vertical)" },
	{ name: "black", value: "#000000", children: [backgroundStars] },
]

export const createBackground = (background: Accessory) => {
	const color = background.value
    
	return `<rect width="${buildSize}" height="${buildSize}" fill="${color}"/>`
}