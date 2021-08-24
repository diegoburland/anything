import { ICounter } from "../../interfaces/ICounter"
import { INPUT } from './inputTypes';


export interface InputInput {
    title: string
}
const initialState = {
    title: ''
}
type ActionInput = {
    type: string, 
    payload: {
        title: ''
    }
}

export const inputReducer = (state:InputInput = initialState, action: ActionInput) => {
    switch(action.type) {
        case INPUT.SET_INPUT_TITLE: {
            const { title } = action.payload
            return {
                ...state,
                title
            }
        }
        case INPUT.RESET_INPUT: {
            return initialState
        }

        default:
            return state
    }
}