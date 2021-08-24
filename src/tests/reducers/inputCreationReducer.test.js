import { inputCreationReducer } from "../../redux/inputCreation/inputCreationReducer"
import { INPUT } from "../../redux/inputCreation/inputCreationTypes"

describe('Test in inputReducer', () => {
    
    test('must set title', () => {
        const initialState = {
            title: '',
            loading: false
            
        }

        const action = {
            type: INPUT.SET_INPUT_TITLE, 
            payload: {
                title: 'cup coffe',
                loading: false
            }
        }

        const state = inputCreationReducer(initialState, action)

        expect(state).toEqual({ title: 'cup coffe', loading: false })
    })

    test('must request title', () => {
        const initialState = {
            title: '',
            loading: false
            
        }

        const action = {
            type: INPUT.REQUEST_TITLE, 
            payload: {
                title: 'cup coffe',
                loading: false
            }
        }

        const state = inputCreationReducer(initialState, action)
        expect(state).toEqual({ title: '', loading: true })
    })

    
    
})