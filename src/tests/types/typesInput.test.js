import { INPUT } from "../../redux/input/inputTypes"


describe('Test inputTypes', () => {

    test('must have these types', () => {
        expect(INPUT).toEqual({
            SET_INPUT_TITLE: 'SET_INPUT_TITLE',
            RESET_INPUT: 'RESET_INPUT'
          })
    })
})