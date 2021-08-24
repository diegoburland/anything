import { ICounter } from "../../interfaces/ICounter"
import { COUNTERS } from "./countersTypes"

export interface InputSearch {
    counters: ICounter[],
    loading: boolean,
    countersSelected: ICounter[],
    error: string,
    filtered:  ICounter[],
    text?: string
    
}
const initialState = {
    counters: [],
    loading: false,
    countersSelected: [],
    error: '',
    filtered: [],
    text: ''
}
type ActionSearch = {
    type: string, 
    payload: {
        counters?: [],
        error?: '',
        text?: string,
        countersSelected: []
    }
}

export const countersReduce = (state:InputSearch = initialState, action: ActionSearch) => {

   
    switch(action.type) {
        case COUNTERS.REQUEST_COUNTERS: {
            return {
                ...state,
                loading: true
            }
        }
        case COUNTERS.REQUEST_SUCCESS: {
            return {
                ...state,
                loading: false,
                counters: action.payload.counters,
                error: ''
            }

        }
        case COUNTERS.REQUEST_FAILURE: {
            return {
                ...state,
                loading: false,
                counters: [],
                error: action.payload.error
            }
        }

        case COUNTERS.UPDATE_COUNT_COUNTERS: {
            
            return {
                ...state,
                counters: action.payload.counters,
            }
        }

        case COUNTERS.UPDATE_COUNT_COUNTERS: {
            
            return {
                ...state,
                counters: action.payload.counters,
            }
        }

        case COUNTERS.ADD_COUNTER: {
            
            return {
                ...state,
                counters: action.payload.counters, 
                loading: true
            }
        }

        case COUNTERS.REQUEST_ADD_SUCCESS: {
            
            return {
                ...state,
                loading: false
            }
        }

        case COUNTERS.DELETE_COUNTER: {
            
            return {
                ...state,
                counters: action.payload.counters,
                countersSelected: [],
            }
        }

        case COUNTERS.ROW_SELECT: {
            
            return {
                ...state,
                counters: action.payload.counters,
                countersSelected: action.payload.countersSelected
            }
        }


        case COUNTERS.ROW_DESELECT: {
            
            return {
                ...state,
                counters: action.payload.counters,
                countersSelected: action.payload.countersSelected
            }
        }

        case COUNTERS.ROW_RESET: {
            console.log(state);
            return {
                ...state,
                countersSelected: []
            }
        }

        

        default:
            return state
    }
}