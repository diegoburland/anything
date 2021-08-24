import { ICounter } from "../../interfaces/ICounter"
import { CREATION } from './creationTypes';



export interface InputCreation {
    title: string,
    loading: boolean,
    error: string
}
const initialState = {
    title: '',
    loading: false,
    error: ''
}
type ActionCreation = {
    type: string, 
    payload: {
        title?: '',
        error?: ''
    }
}

export const counters = (state:InputCreation = initialState, action: ActionCreation) => {
    switch(action.type) {
        case CREATION.REQUEST_COUNTER: {
            return {
                ...state,
                loading: true
            }
        }

        case CREATION.REQUEST_SUCCESS: {
            return {
                loading: false,
                title: action.payload.title,
                error: ''
            }

        }

        default:
            return state
    }
}