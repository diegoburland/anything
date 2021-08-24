import axios from 'axios'
import { INPUT } from './inputCreationTypes';

export const setInputTitle = (title:string) => ({
    type: INPUT.SET_INPUT_TITLE,
    payload: {
        title,
        loading: false
    }
})


export const requestTitle = () => ({
    type: INPUT.REQUEST_TITLE,
    payload: {
        loading: true
    }
})

export const requestSuccess = () => ({
    type: INPUT.REQUEST_SUCCESS,
    payload: {
        loading: false
    }
})

export const resetInput = () => ({
    type: INPUT.RESET_INPUT
})

