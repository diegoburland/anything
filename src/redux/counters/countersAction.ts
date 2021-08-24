import { ICounter } from '../../interfaces/ICounter';
import { COUNTERS } from './countersTypes';
import axios from 'axios'
import { resetInput } from '../inputCreation/inputCreationAction';

export const fetchCounters = () => {
    return async(dispatch:any) => {
        dispatch(fetchCountersRequest())
        const response = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/counter`)
            .catch(error => {
                dispatch(fetchCountersFailure(error.message))
            })

            setTimeout(() => {
                dispatch(fetchCountersSuccess(response?.data))
            }, 1000)
            

        
    }
    
}

export const fetchCountersRequest = () => {
    return {
        type: COUNTERS.REQUEST_COUNTERS
    }
}

export const fetchCountersSuccess = (counters:ICounter[]) => {
    
    return {
        type: COUNTERS.REQUEST_SUCCESS,
        payload: {
            counters: counters
        }
    }
}

  export const requestAddSuccess = () => {
      return {
          type: COUNTERS.REQUEST_ADD_SUCCESS          
      }
  }

  export const fetchCountersFailure = (error: string) => {
    return {
      type: COUNTERS.REQUEST_FAILURE,
      payload: {
          error: error
      }
    }
  }

  export const addCountCounters = (id:string, counters:any) => {
        return async (dispatch:any) => {
            const response = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/counter/inc`, {id})
            .catch(error => {
                console.log(error)
                // dispatch(fetchCountersFailure(error.message))
            })

        const counterUpdated = counters.map((x:ICounter) => {
            if(x.id === id) x.count = x.count + 1;
        
            return x;
        })
        
        dispatch({
            type: COUNTERS.UPDATE_COUNT_COUNTERS,
            payload: {
                counters: counterUpdated
            }
        })
    }
        
    
  }

  export const subCountCounters = (id:string, counters:any) => {
    return async (dispatch:any) => {
        const response = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/counter/dec`, {id})
            .catch(error => {
                console.log(error)
                // dispatch(fetchCountersFailure(error.message))
            })

        const counterUpdated = counters.map((x:ICounter) => {
    
            if(x.id === id) x.count = x.count - 1;
            return x;
        })
        
        dispatch({
            type: COUNTERS.UPDATE_COUNT_COUNTERS,
            payload: {
                counters: counterUpdated
            }
        })
    }

}

export const addCounter = (title: string, counters:ICounter[], closeModal:any) => {
    return async(dispatch:any) => {
        
            const response = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/counter`, {title})
            .catch(error => {
               console.log(error)
            })
            
            dispatch({
                type: COUNTERS.ADD_COUNTER,
                payload: {
                    counters: [...counters, response?.data]
                }
            })

            setTimeout(() => {
                closeModal()
                dispatch(resetInput())
                dispatch({
                    type: COUNTERS.REQUEST_ADD_SUCCESS
                })
            }, 1000)
            
    }

} 

export const deleteCounter = (countersSelected:ICounter[], counters:ICounter[], hideAlert:any) => {
    return async(dispatch:any) => {

        const elementLeft = []
        
        countersSelected.map(async x => {
            await axios.delete(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/counter`, {data: { id : x.id}})   
            .catch(error => {
               console.log(error)
            })
        })

               
        const countersFiltered = counters.filter(x => !countersSelected.map(y => y.id).includes(x.id))

        dispatch({
            type: COUNTERS.DELETE_COUNTER,
            payload: {
                counters: countersFiltered,
                countersSelected: []
            }
        })
         
        setTimeout(() => {
            // dispatch(rowReset())
            hideAlert()
        }, 500)
            
    }

} 

export const rowSelected = (counter:ICounter, countersState:any) => {
    return (dispatch:any) => {
        const newArray = countersState.countersSelected !== undefined ? countersState.countersSelected : []
        newArray.push(counter);
        
        dispatch({
            type: COUNTERS.ROW_SELECT,
            payload: {
                counters: countersState.counters,
                countersSelected: newArray
            }
        })
    }
}

export const rowDelected = (counter:ICounter, countersState:any) => {
    return (dispatch:any) => {
        const newCountesSeleted = countersState.countersSelected.filter((x:ICounter) => x.id !== counter.id)
        dispatch({
            type: COUNTERS.ROW_DESELECT,
            payload: {
                counters: countersState.counters,
                countersSelected: newCountesSeleted
            }
        })
    }
}

export const rowReset = () => ({
    type: COUNTERS.ROW_RESET
})




