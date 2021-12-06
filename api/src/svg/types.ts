// Special effect
type ZIndexAttr = "below-dick"
type DickSkin = "pink-balls" | "red-balls"

export type AccessoryAttr = ZIndexAttr | DickSkin

export interface Accessory {
  name: string // Used as an id
  value: string | ((props?: any) => string) // like #HEX or <svg/>
  attr?: AccessoryAttr[] // like z-index
  defs?: string[] // For linear gradients
  children?: Accessory[]
}
