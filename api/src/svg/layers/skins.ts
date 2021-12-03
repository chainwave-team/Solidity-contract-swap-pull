import { Accessory } from "../types"

export const skins: Accessory[] = [
	{ name: "blue-to-blue-45", value: "url(#blue-to-blue-45)" },
	{ name: "yellow-to-pink-45", value: "url(#yellow-to-pink-45)" },
	{ name: "purple-to-salmon-45", value: "url(#purple-to-salmon-45)" },
	{ name: "pink-to-purple-45", value: "url(#pink-to-purple-45)" },
	{ name: "pink-to-green-45", value: "url(#pink-to-green-45)" },
	{ name: "cyan-to-green-45", value: "url(#cyan-to-green-45)" },
	{ name: "shades-of-purple-45", value: "url(#shades-of-purple-45)" },
	{ name: "cyan-to-blue-45", value: "url(#cyan-to-blue-45)" },
	{ name: "orange-to-red-45", value: "url(#orange-to-red-45)" },
	{ name: "orange-to-dark-red-45", value: "url(#orange-to-dark-red-45)" },
	{ name: "red-purple-green-45", value: "url(#red-purple-green-45)" },
	{ name: "pink-to-yellow-45", value: "url(#pink-to-yellow-45)" },
	{ name: "purple-to-green-45", value: "url(#purple-to-green-45)" },
]


export function createDick(dick: Accessory): string {
	const dickColor = dick.value
	let ballsColor = dickColor

	if (dick.value === '') {
		return ''
	}

	if (dick?.attr?.includes("pink-balls")) {
		ballsColor = "#ff83bc"
	}
	if (dick?.attr?.includes("red-balls")) {
		ballsColor = "#fc6471"
	}

	return (
        `<g id="dick" transform="translate(96 98) rotate(180)">
            <rect width="15" height="51.915" rx="7.5" transform="translate(40.5 22)" fill="${dickColor}"/>
            <ellipse cx="9.5" cy="9" rx="9.5" ry="9" transform="translate(31 18)" fill="${ballsColor}"/>
            <ellipse cx="9.5" cy="9" rx="9.5" ry="9" transform="translate(46 18)" fill="${ballsColor}"/>
        </g>`
    )
}