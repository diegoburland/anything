import { inputReducer } from "../../redux/input/inputReducer"
import { INPUT } from "../../redux/input/inputTypes"


describe('Test in inputReducer', () => {
    
    test('must set title', () => {
        const initialState = {
            title: ''
        }

        const action = {
            type: INPUT.SET_INPUT_TITLE, 
            payload: {
                title: 'cup coffe'
            }
        }

        const state = inputReducer(initialState, action)
        expect(state).toEqual({title: 'cup coffe'})
    })

    test('must reset title', () => {
        const initialState = {
            title: ''
        }

        const action = {
            type: INPUT.RESET_INPUT, 
            payload: {
                title: ''
            }
        }

        const state = inputReducer(initialState, action)
        expect(state).toEqual({title: ''})
    })

    test('must be initial state', () => {
        const initialState = {
            title: ''
        }

        const action = {
            type: 'asdasdasdasd', 
            payload: {
                title: ''
            }
        }

        const state = inputReducer(initialState, action)
        expect(state).toEqual(initialState)
    })
    
})