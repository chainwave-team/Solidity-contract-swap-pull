

// Used to paint background and others shapes
export const defs: Record<string, string> = {
	"url(#purple-to-green-45)": (
		`<linearGradient id="purple-to-green-45" x1="0.105" y1="1.077" x2="0.933" y2="-0.048" gradientUnits="objectBoundingBox">
			<stop offset="0" stop-color="#50ffb1" />
			<stop offset="0.094" stop-color="#4fb286" />
			<stop offset="0.665" stop-color="#9381ff" />
			<stop offset="1" stop-color="#ff50f8" />
		</linearGradient>`
	),
	"url(#purple-to-green-circle)": (
		`<radialGradient id="purple-to-green-circle" cx="0.5" cy="0.5" r="0.727" gradientUnits="objectBoundingBox">
			<stop offset="0" stop-color="#50ffb1" stop-opacity="0.886"/>
			<stop offset="0.665" stop-color="#9381ff" stop-opacity="0.886"/>
			<stop offset="1" stop-color="#ff50f8" stop-opacity="0.886"/>
		</radialGradient>`
	),
	"url(#yellow-to-pink-45)": (
		`<linearGradient id="yellow-to-pink-45" x1="1.015" y1="-0.888" x2="-0.045" y2="1.333" gradientUnits="objectBoundingBox">
			<stop offset="0" stop-color="#cb429f"/>
			<stop offset="1" stop-color="#c4d6b0"/>
		</linearGradient>`
	),
	"url(#rainbow-vertical)": (
		`<linearGradient id="rainbow-vertical" x1="1" y1="0.008" x2="0.014" y2="0.979" gradientUnits="objectBoundingBox">
			<stop offset="0" stop-color="#ffc6ff"/>
			<stop offset="0.148" stop-color="#bdb2ff"/>
			<stop offset="0.276" stop-color="#a0c4ff"/>
			<stop offset="0.435" stop-color="#9bf6ff"/>
			<stop offset="0.567" stop-color="#caffbf"/>
			<stop offset="0.685" stop-color="#fdffb6"/>
			<stop offset="0.857" stop-color="#ffd6a5"/>
			<stop offset="1" stop-color="#ffadad"/>
		</linearGradient>`
	),
	"url(#rainbow-circle-transparent)": (
		`<radialGradient id="rainbow-circle-transparent" cx="0.5" cy="0.5" r="0.5" gradientUnits="objectBoundingBox">
			<stop offset="0" stop-color="#ffc6ff" stop-opacity="0.82"/>
			<stop offset="0.099" stop-color="#fdffb6" stop-opacity="0.565"/>
			<stop offset="0.148" stop-color="#bdb2ff" stop-opacity="0.678"/>
			<stop offset="0.153" stop-color="#adbcff" stop-opacity="0.718"/>
			<stop offset="0.276" stop-color="#a0c4ff" stop-opacity="0.749"/>
			<stop offset="0.435" stop-color="#9bf6ff" stop-opacity="0.745"/>
			<stop offset="0.567" stop-color="#caffbf" stop-opacity="0.765"/>
			<stop offset="0.857" stop-color="#ffd6a5" stop-opacity="0.745"/>
			<stop offset="1" stop-color="#ffadad" stop-opacity="0.82"/>
		</radialGradient>`
	),
	"url(#cyan-to-green-45)": (
		`<linearGradient id="cyan-to-green-45" x1="1" x2="0" y2="1" gradientUnits="objectBoundingBox">
			<stop offset="0" stop-color="#67f8fd"/>
			<stop offset="1" stop-color="#d2fcaf"/>
		</linearGradient>`
	),
	"url(#white-to-yellow-vertical)": (
		`<linearGradient id="white-to-yellow-vertical" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
		<stop offset="0" stop-color="#fff"/>
		<stop offset="1" stop-color="#e8eb88"/>
	  </linearGradient>`
	),
    "url(#female-cycloid-filter)": (
        `<filter id="female-cycloid-filter" x="34.642" y="20.887" width="26.488" height="22.729" filterUnits="userSpaceOnUse">
            <feOffset dy="3" input="SourceAlpha"/>
            <feGaussianBlur stdDeviation="3" result="blur"/>
            <feFlood flood-opacity="0.161"/>
            <feComposite operator="in" in2="blur"/>
            <feComposite in="SourceGraphic"/>
        </filter>`
    ),
    "url(#male-cycloid-filter)": (
        `<filter id="male-cycloid-filter" x="34.643" y="20.586" width="26.284" height="24.26" filterUnits="userSpaceOnUse">
            <feOffset dy="3" input="SourceAlpha"/>
            <feGaussianBlur stdDeviation="3" result="blur"/>
            <feFlood flood-opacity="0.161"/>
            <feComposite operator="in" in2="blur"/>
            <feComposite in="SourceGraphic"/>
        </filter>`
    ),
	"url(#male-cycloid-top-filter)": (
        `<filter id="male-cycloid-top-filter" x="35.643" y="19.577" width="24.964" height="23.268" filterUnits="userSpaceOnUse">
			<feOffset dy="3" input="SourceAlpha"/>
			<feGaussianBlur stdDeviation="3" result="blur"/>
			<feFlood flood-opacity="0.161"/>
			<feComposite operator="in" in2="blur"/>
			<feComposite in="SourceGraphic"/>
		</filter>`
    ),
	"url(#picasso-small-eye-filter)": (
        `<filter id="picasso-small-eye-filter" x="34.462" y="26.542" width="21.656" height="20.781" filterUnits="userSpaceOnUse">
			<feOffset dy="3" input="SourceAlpha"/>
			<feGaussianBlur stdDeviation="3" result="blur-2"/>
			<feFlood flood-opacity="0.161"/>
			<feComposite operator="in" in2="blur-2"/>
			<feComposite in="SourceGraphic"/>
		</filter>`
    ),
	"url(#blue-pink-purple-45)": (
        `<linearGradient id="blue-pink-purple-45" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
			<stop offset="0" stop-color="#7089f9"/>
			<stop offset="0.483" stop-color="#e588d0"/>
			<stop offset="1" stop-color="#9c65fa"/>
		</linearGradient>`
    ),
	"url(#green-pink-purple-45)": (
        `<linearGradient id="green-pink-purple-45" x1="0.024" y1="0.045" x2="0.98" y2="0.976" gradientUnits="objectBoundingBox">
			<stop offset="0" stop-color="#68fced"/>
			<stop offset="0.474" stop-color="#eeb7fe"/>
			<stop offset="1" stop-color="#9c65fa"/>
		</linearGradient>`
    ),
	"url(#pink-to-purple-45)": (
        `<linearGradient id="pink-to-purple-45" x1="1" x2="0" y2="1" gradientUnits="objectBoundingBox">
			<stop offset="0" stop-color="#6f23e0"/>
			<stop offset="1" stop-color="#e347bf"/>
		</linearGradient>`
    ),
	"url(#shades-of-purple-45)": (
        `<linearGradient id="shades-of-purple-45" x1="1" x2="0" y2="1" gradientUnits="objectBoundingBox">
		<stop offset="0" stop-color="#c4b5fd"/>
		<stop offset="1" stop-color="#a78bfa"/>
	  </linearGradient>`
    ),
	"url(#pink-to-yellow-45)": (
        `<linearGradient id="pink-to-yellow-45" x1="1" x2="0" y2="1" gradientUnits="objectBoundingBox">
			<stop offset="0" stop-color="#e34dc6"/>
			<stop offset="1" stop-color="#ffff5d"/>
		</linearGradient>`
    ),
	"url(#pink-to-green-45)": (
        `<linearGradient id="pink-to-green-45" x1="1" x2="0" y2="1" gradientUnits="objectBoundingBox">
			<stop offset="0" stop-color="#f0a0f3"/>
			<stop offset="1" stop-color="#50ffb1"/>
		</linearGradient>`
    ),
	"url(#red-purple-green-45)": (
        `<linearGradient id="red-purple-green-45" x1="1" x2="0" y2="1" gradientUnits="objectBoundingBox">
			<stop offset="0" stop-color="#fb7185"/>
			<stop offset="0.512" stop-color="#d946ef"/>
			<stop offset="1" stop-color="#50ffb1"/>
		</linearGradient>`
    ),
	"url(#small-eyes-filter)": (
        `<filter id="small-eyes-filter" x="33.642" y="27.524" width="21.683" height="20.087" filterUnits="userSpaceOnUse">
			<feOffset dy="3" input="SourceAlpha"/>
			<feGaussianBlur stdDeviation="3" result="blur"/>
			<feFlood flood-opacity="0.161"/>
			<feComposite operator="in" in2="blur"/>
			<feComposite in="SourceGraphic"/>
		</filter>`
    ),
	"url(#small-eyes-makeup-filter)": (
        `<filter id="small-eyes-makeup-filter" x="33.642" y="27.524" width="21.683" height="20.087" filterUnits="userSpaceOnUse">
			<feOffset dy="3" input="SourceAlpha"/>
			<feGaussianBlur stdDeviation="3" result="blur"/>
			<feFlood flood-opacity="0.161"/>
			<feComposite operator="in" in2="blur"/>
			<feComposite in="SourceGraphic"/>
		</filter>`
    ),
	"url(#mouse-filter)": (
        `<filter id="mouse-filter" x="33.642" y="27.524" width="21.683" height="20.087" filterUnits="userSpaceOnUse">
			<feOffset dy="3" input="SourceAlpha"/>
			<feGaussianBlur stdDeviation="3" result="blur"/>
			<feFlood flood-opacity="0.161"/>
			<feComposite operator="in" in2="blur"/>
			<feComposite in="SourceGraphic"/>
		</filter>`
    ),
	"url(#small-mouse-filter)": (
        `<filter id="small-mouse-filter" x="37.566" y="32.676" width="21.655" height="20.857" filterUnits="userSpaceOnUse">
			<feOffset dy="3" input="SourceAlpha"/>
			<feGaussianBlur stdDeviation="3" result="blur-2"/>
			<feFlood flood-opacity="0.161"/>
			<feComposite operator="in" in2="blur-2"/>
			<feComposite in="SourceGraphic"/>
		</filter>`
    ),
	"url(#blue-to-blue-45)": (
        `<linearGradient id="blue-to-blue-45" x1="1.015" y1="-0.888" x2="-0.045" y2="1.333" gradientUnits="objectBoundingBox">
			<stop offset="0" stop-color="#6f73d2"/>
			<stop offset="1" stop-color="#83c9f4"/>
		</linearGradient>`
    ),
	"url(#purple-to-salmon-45)": (
        `<linearGradient id="purple-to-salmon-45" x1="1.015" y1="-0.888" x2="-0.045" y2="1.333" gradientUnits="objectBoundingBox">
			<stop offset="0" stop-color="#6f73d2"/>
			<stop offset="1" stop-color="#ffafbd"/>
		</linearGradient>`
    ),
	"url(#pink-to-purple-rounded)": (
        `<radialGradient id="pink-to-purple-rounded" cx="0.5" cy="0.5" r="0.5" gradientUnits="objectBoundingBox">
			<stop offset="0" stop-color="#eeaeca" stop-opacity="0.451"/>
			<stop offset="1" stop-color="#94bbe9" stop-opacity="0.451"/>
		</radialGradient>`
    ),
	"url(#purple-green-vertical)": (
        `<linearGradient id="purple-green-vertical" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
			<stop offset="0" stop-color="#74ebd5"/>
			<stop offset="1" stop-color="#acb6e5"/>
		</linearGradient>`
    ),

	"url(#yellow-to-pink-circle)": (
        `<radialGradient id="yellow-to-pink-circle" cx="0.5" cy="0.5" r="0.716" gradientTransform="matrix(0.999, -0.034, 0.034, 0.999, -0.017, 0.017)" gradientUnits="objectBoundingBox">
			<stop offset="0" stop-color="#ff80ff"/>
			<stop offset="1" stop-color="#ffff80"/>
		</radialGradient>`
    ),
	"url(#orange-to-red-45)": (
        `<linearGradient id="orange-to-red-45" x1="1" x2="0" y2="1" gradientUnits="objectBoundingBox">
			<stop offset="0" stop-color="#fdba74"/>
			<stop offset="1" stop-color="#fb7185"/>
		</linearGradient>`
    ),
	"url(#orange-to-dark-red-45)": (
        `<linearGradient id="orange-to-dark-red-45" x1="1" x2="0" y2="1" gradientUnits="objectBoundingBox">
			<stop offset="0" stop-color="#f96"/>
			<stop offset="1" stop-color="#ef233c"/>
		</linearGradient>`
    ),
	"url(#cyan-to-blue-45)": (
        `<linearGradient id="cyan-to-blue-45" x1="1" x2="0" y2="1" gradientUnits="objectBoundingBox">
			<stop offset="0" stop-color="#5438eb"/>
			<stop offset="1" stop-color="#40b5c1"/>
		</linearGradient>`
    ),
	"url(#shades-of-grey-vertical)": (
        `<linearGradient id="shades-of-grey-vertical" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
			<stop offset="0" stop-color="#0f0c29"/>
			<stop offset="0.488" stop-color="#302b63"/>
			<stop offset="1" stop-color="#24242e"/>
		</linearGradient>`
    ),
	"url(#shades-of-black-hair-vertical)": (
        `<linearGradient id="shades-of-black-hair-vertical" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
			<stop offset="0" stop-color="#29312d"/>
			<stop offset="0.498" stop-color="#3b3527"/>
			<stop offset="1"/>
		</linearGradient>`
    ),
	"url(#cape-small-eyes-filter-1)": (
        `<filter id="cape-small-eyes-filter-1" x="32.462" y="26.542" width="21.656" height="20.781" filterUnits="userSpaceOnUse">
			<feOffset dy="3" input="SourceAlpha"/>
			<feGaussianBlur stdDeviation="3" result="blur"/>
			<feFlood flood-opacity="0.161"/>
			<feComposite operator="in" in2="blur"/>
			<feComposite in="SourceGraphic"/>
		</filter>`
    ),
	"url(#cape-small-eyes-filter-2)": (
        `<filter id="cape-small-eyes-filter-2" x="40.462" y="26.542" width="21.656" height="20.781" filterUnits="userSpaceOnUse">
			<feOffset dy="3" input="SourceAlpha"/>
			<feGaussianBlur stdDeviation="3" result="blur-2"/>
			<feFlood flood-opacity="0.161"/>
			<feComposite operator="in" in2="blur-2"/>
			<feComposite in="SourceGraphic"/>
		</filter>`
    ),
}
