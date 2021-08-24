import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, NewIcon, Modal, useModal, CloseIcon, TrashBinIcon, OpenIcon, useAlert } from '../../common'
import InputCreation from '../../common/InputCreation/inputCreation'
import { IStateFromInputCreation } from '../../../interfaces/IStateFromInputCreation'
import { addCounter, deleteCounter } from '../../../redux/counters/countersAction'
import { IState } from '../../../interfaces/IState'
import LoadingUi from '../../common/LoadingUi/LoadingUi'
import Alert from '../../common/Alert/Alert'
import { ICounter } from '../../../interfaces/ICounter'
import ButtonTooltip from '../../common/ButtonTooltip/ButtonTooltip.jsx'

const Footer = () => {

    const dispatch = useDispatch()
    const { isVisible: isModalVisible, hideModal, showModal } = useModal()
    const {title} = useSelector((state:IStateFromInputCreation) => state.inputCreation)
    const countersSelected:ICounter[] = useSelector((state:IState) => {return state.counters.countersSelected}) 
    const {counters, loading}  = useSelector((state:IState) => state.counters)
    const { isVisible: isAlertVisible, hideAlert, showAlert } = useAlert()
    const { 
      isVisible: isAlertVisibleConnection,
      hideAlert: hideAlertConnection, 
      showAlert:showAlertConnection 
    } = useAlert()
    let titleCurrent = ''
    const handleSave = () => {
      
      if(title && title.length > 0){
        if(navigator.onLine){
          dispatch(addCounter(title, counters, hideModal))
        }else{
          showAlertConnection()
        }
      }
    }

    const handleDelete = () => {
      dispatch(deleteCounter(countersSelected, counters, hideAlert))
    }

    return (
    <div className='footer'>
        <div className="footer__container">
          <div>
            {
              countersSelected == undefined? 0 : countersSelected.length > 0 &&
              <>
                <Button onClick={showAlert} color='white' className='footer__trash-icon'>
                  <TrashBinIcon fill='#FF3B30' />
                </Button>
                <ButtonTooltip/>
              </>
            }
            </div>
          <Button onClick={showModal}>
            <NewIcon fill='var(--white)' />
        </Button>
        </div>
        
        <Modal
          isVisible={isModalVisible}
          onClose={() => console.log('Modal was closed')}
          onOpen={() => console.log('Modal was opened')}
          className='createCounter'
        >
          <Modal.Header className='createCounter__header'>
            <div className="createCounter__header-container">
                <button className='createCounter__header-close' onClick={hideModal}><CloseIcon fill="#fff"/></button>
                <Modal.Title className='createCounter__header-title'>Create counter</Modal.Title>
            </div>
            <button className='createCounter__header-save cs-button' onClick={handleSave} disabled={title && title.length == 0 || loading}><span>Save</span></button>
          </Modal.Header>
          <Modal.Body className='createCounter__body'>
            <InputCreation/>
            {loading && <LoadingUi/> }
            
          </Modal.Body>
        </Modal>
        <Alert
          isVisible={isAlertVisible}
          onClose={() => console.log('')}
          onOpen={() => console.log('')}
        >
          <Alert.Title className={''}>
            {
              countersSelected !== undefined && countersSelected.length <= 1?
              `Delete the “${countersSelected[0]?.title}” counter?`:
              `Delete the many counters?`
            }
            </Alert.Title>
          <Alert.Message className={''}>This cannot be undone.</Alert.Message>
          <Alert.Actions className={''}>
            <Button kind="raised" onClick={hideAlert}>
              Cancel
            </Button>
            <Button kind="raised" color="danger" onClick={handleDelete}>
              Delete
            </Button>
          </Alert.Actions>
        </Alert>
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
    )
}

export default Footer
