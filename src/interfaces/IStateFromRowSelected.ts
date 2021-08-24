import { ICounter } from "./ICounter";

export interface IStateFromRowSelected {
    rowSelected: {
        counter: ICounter[]
    }
}

