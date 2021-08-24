import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo } from '@fortawesome/free-solid-svg-icons'
import RowCounter from '../../common/RowCounter/RowCounter'
import { connect, useDispatch, useSelector } from 'react-redux'
import { ICounter } from '../../../interfaces/ICounter'
import LoadingUi from '../../common/LoadingUi/LoadingUi'
import EmptyResult from '../EmptyResult/EmptyResult'
import { fetchCounters, rowReset } from '../../../redux/counters/countersAction'
import { IState } from '../../../interfaces/IState'
import { Alert, Button, useAlert } from '../../common'



const Counters = (props:any) => {
    
    const {fetchCounters, data } = props
    const countersSelected:ICounter[] = useSelector((state:IState) => {return state.counters.countersSelected})
    const dispatch = useDispatch()

    const { 
        isVisible: isAlertVisibleConnection,
        hideAlert: hideAlertConnection, 
        showAlert:showAlertConnection 
    } = useAlert()

    useEffect(() => {
        fetchCounters()
    }, [])

    const refresh = () => {
        if(navigator.onLine){
            fetchCounters()
        }else{
            showAlertConnection()
        }
    }

    const serchingTerm = (term:any) => {
        return (x:any) => {
            return x.title.toLowerCase().includes(term) || !term
        }
    }

    const [filter, setFilter] = useState([])
    const term = useSelector<any>((state:any) => state.inputFilter.title)

    useEffect(() => {
        setFilter(data.counters)
    }, [data.counters])

    const times = filter ? filter.filter(serchingTerm(term)).map((x:any) => x.count).reduce((a:number, b:number) =>{ return a+b}, 0): 0
    const items = filter ? filter.filter(serchingTerm(term)) && filter.filter(serchingTerm(term)).length: 0

    return data.loading? (<LoadingUi/>): 
    data.error ? (<p>we have an error {data.error}</p>) :
    (navigator.onLine? (
        filter !== undefined && filter.length > 0 ?
        <div className='counters'>
            <div className="counters__totalers">
            { countersSelected && countersSelected.length == 0?
            <> 
                <label className="counters__totalers--items">{items} items</label>
                <label className="counters__totalers--times">{times} times</label>
                <label className="counters__totalers--refresh" onClick={refresh}>
                <FontAwesomeIcon icon={faRedo}/></label>

            </> : <label className="counters__totalers--selected">{countersSelected.length } Selected <FontAwesomeIcon icon={faRedo} onClick={() => {dispatch(rowReset())}}/><span></span></label> }
            </div>
            <div className="counters__container">
                {
                    filter.filter(serchingTerm(term)).map((counter:ICounter, index:number) => (
                        <RowCounter counter={counter} key={index}/>
                    ))
                }
            </div>
        </div>
        :
        <EmptyResult title='No counters yet' text='“When I started counting my blessings, my whole life turned around.” —Willie Nelson'/>
        ):(
    
        <div className="main__countersEmpties">
            <div className="main__countersEmpties--text">
                <h3 className="main__countersEmpties--header">Couldn’t load the counters</h3>
                <p className="main__countersEmpties--paragraph">The Internet connection appears to be offline.</p>
                <button className='main__countersEmpties--button' onClick={fetchCounters}>Retry</button>
            </div>
            <Alert
          isVisible={isAlertVisibleConnection}
          onClose={() => console.log('')}
          onOpen={() => console.log('')}
        >
          <Alert.Title className={''}>
          Couldn’t create counter
            </Alert.Title>
          <Alert.Message className={''}>The Internet connection appears to be offline.</Alert.Message>
          <Alert.Actions className={''}>
            <Button kind="raised" onClick={hideAlertConnection}>
              Dismiss
            </Button>
          </Alert.Actions>
        </Alert>
        </div>
    ))
    
}

const mapStateToProps = (state:any) => {
    
    return {
        data: state.counters
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        fetchCounters: () => dispatch(fetchCounters())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counters)

