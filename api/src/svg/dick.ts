import { dickColors } from "./colors";
import { ballsHairs, dickSkin, prepuce } from "./layers";
import { getAccessory } from "./utils";

interface DickOptions {
	mainColor: number
	ballsHairs?: boolean
}

export const getDick = (options: DickOptions) => {
	const dick = getAccessory(options.mainColor, dickColors, "Dick color")
	const dickColor = dick.value
	let ballsColor = dickColor

	if (dick?.attr?.includes("pink-balls")) {
		ballsColor = "#ff83bc"
	}

	let dickSVG = (
        `<g id="dick" transform="translate(96 98) rotate(180)">
            <rect width="15" height="51.915" rx="7.5" transform="translate(40.5 22)" fill="${dickColor}"/>
            <ellipse cx="9.5" cy="9" rx="9.5" ry="9" transform="translate(31 18)" fill="${ballsColor}"/>
            <ellipse cx="9.5" cy="9" rx="9.5" ry="9" transform="translate(46 18)" fill="${ballsColor}"/>
        </g>`
    )

	if (dick?.attr?.includes("dick-waves")) {
		dickSVG += dickSkin.value
	}

	if (dick?.attr?.includes("prepuce")) {
		dickSVG += prepuce.value
	}
	
	if (options.ballsHairs) {
		dickSVG += ballsHairs.value
	}

	return dickSVG
}