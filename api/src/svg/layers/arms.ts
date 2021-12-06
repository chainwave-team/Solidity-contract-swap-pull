import { Accessory } from '../types'

export const egyptianArms: Accessory = {
  name: "Egyptian arms",
  value: (color: string) => (
    `<g id="egyptian-arms">
			<path d="M100.365,593.922H91.414V585l-6.239.506-1.084,3.578.968-1.96.47-.289.729-.289-.475,2.538,1.655-2.249-.248,2.249,1.42-2.749v11.179h11.754Z" transform="translate(-59 -553)" fill="${color}"/>
			<path d="M84.091,588.591h8.951v8.923l6.239-.506,1.084-3.578-.968,1.96-.47.289-.729.289.475-2.538-1.655,2.249.248-2.249-1.42,2.749V585H84.091Z" transform="translate(-29 -544)" fill="${color}"/>
		</g>`
  )
}

export const arms: Accessory[] = [
  {
    name: "Empty",
    value: ""
  },
  egyptianArms,
]