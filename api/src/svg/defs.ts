

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
	"url(#cyan-to-green-vertical)": (
		`<linearGradient id="cyan-to-green-vertical" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
			<stop offset="0" stop-color="#67f8fd"/>
			<stop offset="1" stop-color="#d2fcaf"/>
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
	"url(#small-male-cycloid-filter)": (
        `<filter id="small-male-cycloid-filter" x="34.643" y="20.586" width="26.284" height="24.26" filterUnits="userSpaceOnUse">
            <feOffset dy="3" input="SourceAlpha"/>
            <feGaussianBlur stdDeviation="3" result="blur"/>
            <feFlood flood-opacity="0.161"/>
            <feComposite operator="in" in2="blur"/>
            <feComposite in="SourceGraphic"/>
        </filter>`
    ),
}
