import { resetInput, setInputTitle } from "../../redux/input/inputAction"
import { INPUT } from "../../redux/input/inputTypes"


describe('Test in inputAction', () => {
    test('All actions', () => {

        const setInputTitleAction = setInputTitle('cups coffe')
        expect(setInputTitleAction).toEqual({
            type: INPUT.SET_INPUT_TITLE,
            payload: {
                title: 'cups coffe'
            }
        })

        const resetInputAction = resetInput()
        expect(resetInputAction).toEqual({
            type: INPUT.RESET_INPUT
        })

        
    })
})