import { ICounter } from '../../interfaces/ICounter';
import axios from 'axios'
import { CREATION } from './creationTypes';
const endPoint = process.env.REACT_APP_API_ENDPOINT;



export const addCounter = (title:string) => {
    return async(dispatch:any) => {
        dispatch(requestCounter())
        const response = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/counter`, {
            title 
        })
        .catch(error => {
            dispatch(fetchCountersFailure(error.message))
        })

        console.log(response, 'respuesta');

        dispatch(requestCounterSuccess(response?.data))
    }
    
}

export const requestCounter = () => {
    return {
        type: CREATION.REQUEST_COUNTER
    }
}

export const requestCounterSuccess = (counter:ICounter) => {
    
    return {
        type: CREATION.REQUEST_SUCCESS,
        payload: {
            counters: 'counters'
        }
    }
  }


  export const fetchCountersFailure = (error: string) => {
    return {
      type: CREATION.REQUEST_SUCCESS,
      payload: {
          error: error
      }
    }
  }