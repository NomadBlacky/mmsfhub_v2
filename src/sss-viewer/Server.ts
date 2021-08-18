import {Card} from "./Card";

export default interface Server {
    id: number
    type: ServerType
    level: number
    name: string
    cards: Card[]
}

export type ServerType = "satellite" | "meteor"
