export function isNumeric(str: unknown): boolean {
    return typeof str === "string" && !isNaN(parseFloat(str))
}
