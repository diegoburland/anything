import { INPUT } from "../../redux/inputCreation/inputCreationTypes"

describe('Test inputCreationTypes', () => {

    test('must have these types', () => {
        expect(INPUT).toEqual({
            SET_INPUT_TITLE: 'SET_INPUT_TITLE',
            RESET_INPUT: 'RESET_INPUT',
            REQUEST_TITLE: 'REQUEST_TITLE',
            REQUEST_SUCCESS: 'REQUEST_SUCCESS'
        })
    })
})