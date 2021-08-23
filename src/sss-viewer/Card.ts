export default interface Card {
    name: string
    class: Class
}

export type Class = "standard" | "mega" | "giga"
