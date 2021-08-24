import axios from 'axios'
import { INPUT } from './inputTypes';

export const setInputTitle = (title:string) => ({
    type: INPUT.SET_INPUT_TITLE,
    payload: {
        title
    }
})

export const resetInput = () => ({
    type: INPUT.RESET_INPUT
})

