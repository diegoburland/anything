import { combineReducers } from 'redux'
import { countersReduce } from './counters/countersReducer'
import { inputReducer } from './input/inputReducer'
import { inputCreationReducer } from './inputCreation/inputCreationReducer';


export default combineReducers({
    counters: countersReduce,
    inputFilter: inputReducer,
    inputCreation: inputCreationReducer,
})

