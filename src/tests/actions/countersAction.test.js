import { 
    fetchCounters, 
    fetchCountersRequest, 
    fetchCountersSuccess, 
    requestAddSuccess,
    deleteCounter,
    rowSelected
 } from "../../redux/countersAction"
import configureStore from 'redux-mock-store' //ES6 modules
import thunk from "redux-thunk"
import { COUNTERS } from "../../redux/types"
 
const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const store = mockStore({
    counters: {
      loading: false,
      countersSelected: [
        {
            id: 'dasdasd',
            title: 'tytrtyrty',
            count: 0
        }
      ],
      error: '',
      filtered: [],
      text: '',
      counters: [
          {
              id: 'dasdasd',
              title: 'tytrtyrty',
              count: 0
          }
      ]
    },
    inputFilter: {
      title: ''
    },
    inputCreation: {
      title: '',
      loading: false
    }
  })

describe('test action counterAction', () => {
    test('most get all counters', async() => {
        await store.dispatch(fetchCounters())
        const actions = store.getActions()
      
        expect(actions[0]).toEqual({
            type: COUNTERS.REQUEST_COUNTERS
        })
    })

    test('most get all counters', async() => {
        await store.dispatch(fetchCounters())
        const actions = store.getActions()
      
        expect(actions[0]).toEqual({
            type: COUNTERS.REQUEST_COUNTERS
        })
    })

    test('most return action request', async() => {
        
        const response = await store.dispatch(fetchCountersRequest())
        expect(response).toEqual({ type: COUNTERS.REQUEST_COUNTERS })
    })

    test('most return action request', async() => {
        const counters = store.getState().counters.counters;
        const response = await store.dispatch(fetchCountersSuccess(counters))
        expect(response).toEqual({ 
            type: COUNTERS.REQUEST_SUCCESS,
            payload: { 
                counters: [{
                    id: expect.any(String),
                    title: expect.any(String),
                    count: expect.any(Number)
                }] 
            } 
        })
    })

    test('most return action add success', async() => {
        
        const response = await store.dispatch(requestAddSuccess())
        expect(response).toEqual({ type: COUNTERS.REQUEST_ADD_SUCCESS })
    })

    test('most delete counter', async() => {
        const {counters, countersSelected} = store.getState().counters;
        await store.dispatch(deleteCounter(counters, counters))
        const actions = store.getActions()
        let action = null
        actions.map(x => {
            if(x.type === COUNTERS.DELETE_COUNTER){
                action = x;
            }
        })
        expect(action).toEqual({
            type: COUNTERS.DELETE_COUNTER,
            payload: {
                counters: expect.any(Array),
                countersSelected: expect.any(Array)
            }
        })
    })

})