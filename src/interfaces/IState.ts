import { ICounter } from "./ICounter";

export interface IState {
    counters: {
        loading?: boolean,
        counters: ICounter[],
        error?: string,
        countersSelected: ICounter[],
    },
    inputFilter?: {
        title?: string,
        loading?: boolean,
        error?: string
    }
}

