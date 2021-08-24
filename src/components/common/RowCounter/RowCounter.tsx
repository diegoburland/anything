import React, {useState} from 'react'
import { IncrementIcon, DecrementIcon, Button } from '..'
import { ICounter } from '../../../interfaces/ICounter'
import { useDispatch, useSelector } from 'react-redux'
import { addCountCounters, subCountCounters, rowDelected, rowSelected } from '../../../redux/counters/countersAction'
import { IState } from '../../../interfaces/IState'
import Holdable from '../../../utils/holdable'
import Alert, { useAlert } from '../Alert/Alert'




type counterProds = {
    counter: ICounter
}

const RowCounter = (props:counterProds) => {

    const {counter} = props
    const countersState = useSelector((state:IState) => { return state.counters})
    const [action, setAction] = useState({
        id: '',
        action: 'sub'
    })
    const { isVisible: isAlertVisible, hideAlert, showAlert } = useAlert()
    const {counters, countersSelected} = countersState
    const [currentCounter, setCurrentCounter] = useState({
        title: '',
        count: 0
    })
    
    const dispatch = useDispatch()

    const handleAdd = (id:string) => {
        
        setAction({
            id,
            action: 'add'
        })
        if(navigator.onLine){
            hideAlert()
            dispatch(addCountCounters(id, counters))
        }else{
            const current = counters.filter(x => x.id === id)
            setCurrentCounter({
                title : current[0].title,
                count: current[0].count + 1
            })
            showAlert()
        }
    }

    const handleSub = (id:string) => {
        setAction({
            id,
            action: 'sub'
        })
        if(navigator.onLine){
            hideAlert()
            const counter = counters.filter(x => x.id === id).map(x => x.count)
            if(counter[0] !== 0){
                dispatch(subCountCounters(id, counters))
            }

        }else{
            const current = counters.filter(x => x.id === id)
            setCurrentCounter({
                title : current[0].title,
                count: current[0].count - 1
            })
            showAlert()
        }
    }

    const handleHover = (id:string) => {

        const currentRow = countersSelected == undefined? [] : countersSelected.filter(x => x.id == id)
        
        if(currentRow && currentRow.length > 0){
            
            dispatch(rowDelected(currentRow[0], countersState))

        }else{

            const row = counters.filter(x => x.id == id)
            dispatch(rowSelected(row[0], countersState))

        }

    }

    document.addEventListener("contextmenu", function(evt){
    evt.preventDefault()
    }, false)
    
    
    return (
        <>  
            <div onContextMenu={(e)=> e.preventDefault()} className={`rowCounter noselect ${countersSelected == undefined? [] : countersSelected.filter(x => x.id == counter.id).length > 0? 'active' : ''}`}  id={counter.id}>
                <Holdable onClick={() => ('')} onHold={() => handleHover(counter.id)} id={counter.id}>
                <div className="rowCounter__detail">
                    <label className="rowCounter__detail--description noselect">
                        {counter.title}
                    </label>
                    <div className="rowCounter__detail--counter">
                        <div className="rowCounter__detail--counter-less">
                            <button className="rowCounter__detail--counter-button" disabled={counter.count == 0? true: false } onClick={() => handleSub(counter.id)}>
                                <DecrementIcon fill={counter.count == 0? '#DCDCDF': '#FF9500'}/>
                            </button>
                        </div>
                        <div className="rowCounter__detail--counter-number">
                            {counter.count}
                        </div>
                        <div className="rowCounter__detail--counter-more">
                            <button className="rowCounter__detail--counter-button" onClick={() => handleAdd(counter.id)}>
                                <IncrementIcon fill="#FF9500"/>
                            </button>
                        </div>
                        
                    </div>
                </div>
                </Holdable>
            </div>
            <Alert
                isVisible={isAlertVisible}
                onClose={() => console.log('Alert was closed')}
                onOpen={() => console.log('Alert was opened')}
                >
                <Alert.Title className=''>Couldn’t update “{currentCounter.title}” to {currentCounter.count}</Alert.Title>
                <Alert.Message className={''}>The Internet connection appears to be offline.</Alert.Message>
                <Alert.Actions className=''>
                    <Button kind='raised' onClick={() => {action.action == 'add'? handleAdd(action.id): handleSub(action.id)}}>
                    Retry
                    </Button>
                    <Button kind="raised" color="danger" onClick={hideAlert}>
                        Dismiss
                    </Button>
                </Alert.Actions>
            </Alert>
        </>
            
    )
}

export default RowCounter
