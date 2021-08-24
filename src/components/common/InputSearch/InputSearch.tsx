import React from 'react'
import { Button, SearchIcon } from '..'
import { useSelector, useDispatch } from 'react-redux'
import { setInputTitle, resetInput } from '../../../redux/input/inputAction'
import { IState } from '../../../interfaces/IState'
import { IStateFromInputFilter } from '../../../interfaces/IInputFiter'

const InputSearch = (props: any) => {

    const {counters} = useSelector((state:IState) => { return state.counters})
    const title = useSelector((state:IStateFromInputFilter) => state.inputFilter.title)
    const dispatch = useDispatch()
    return (
        <div className="header">
            <div className='inputSearch'>
                <div className="inputSearch__icon-container"><SearchIcon/></div>
                    <input className='inputSearch__input' disabled={counters && counters.length == 0} value={title}  type='text' placeholder='Search Counters' onChange={e => 
                    dispatch(setInputTitle(e.target.value))}/>
                    {
                        title !== undefined && title.length > 0 && <Button className='inputSearch__cancel' onClick={() => {dispatch(resetInput())}} color="white" children='Cancel'/>
                    }
                    
            </div>
        </div>
    )
}

export default InputSearch
