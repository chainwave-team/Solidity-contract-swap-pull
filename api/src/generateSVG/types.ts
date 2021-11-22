// Special effect
type ZIndexAttr = "below-dick"
type BgAttr = "bg-stars"
type DickSkin = "dick-waves" | "pink-balls" | "prepuce"
export type AccessoryAttr = ZIndexAttr | BgAttr | DickSkin

export interface Accessory {
    name: string // Used as an id
    value: string | ((props: any) => string) // like #HEX or <svg/>
    attr?: AccessoryAttr[] // like z-index
}