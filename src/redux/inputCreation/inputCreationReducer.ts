import { INPUT } from './inputCreationTypes';


export interface InputInput {
    title: string,
    loading: boolean,
}
const initialState = {
    title: '',
    loading: false
    
}
type ActionInput = {
    type: string, 
    payload: {
        title: '',
        loading: false,
    }
}

export const inputCreationReducer = (state:InputInput = initialState, action: ActionInput) => {
    switch(action.type) {
        case INPUT.SET_INPUT_TITLE: {
            const { title } = action.payload
            return {
                ...state,
                title
            }
        }

        case INPUT.REQUEST_TITLE: {
            
            return {
                ...state,
                loading: true
            }
        }

        case INPUT.REQUEST_SUCCESS: {
            return {
                ...state,
                loading: false
            }
        }

        case INPUT.RESET_INPUT: {
            return initialState
        }

        default:
            return state
    }
}