import React from 'react'
import { Button, Modal, SearchIcon, useModal } from '..'
import { useSelector, useDispatch } from 'react-redux'
import { InputInput } from '../../../redux/input/inputReducer'
import { setInputTitle, resetInput } from '../../../redux/inputCreation/inputCreationAction'
import { IStateFromInputCreation } from '../../../interfaces/IStateFromInputCreation'
import { IState } from '../../../interfaces/IState'
import { Carousel } from '../Carousel/carousel'
import { FunctionComponent } from 'react';


const InputCreation:FunctionComponent = () => {

    const {title} = useSelector((state:IStateFromInputCreation) => state.inputCreation)
    const {loading}  = useSelector((state:IState) => state.counters)
    const { isVisible: isModalVisible2,  hideModal: hideModal2, showModal: showModal2 } = useModal()
    const dispatch = useDispatch()
    return (
        <>
        <div className="createCounter__input-container">
            <label className="createCounter__input-label">Name</label>
            <input type="text" className="createCounter__input-input" placeholder='Cups of coffe' disabled={loading} onChange={e => {dispatch(setInputTitle(e.target.value))}} value={title}/>
            <p className="createCounter__input-help">Give it a name. Creative block? See <button className='createCounter__input-help-link' onClick={showModal2}>examples</button></p>
        </div>
        <Modal
        isVisible={isModalVisible2}
        onClose={() => console.log('Modal was closed')}
        onOpen={() => console.log('Modal was opened')}
        className='exampleCounters'
      >
        <Modal.Header className='exampleCounters__header'>
          <div className="exampleCounters__header-container">
              <button className='exampleCounters__header-close' onClick={hideModal2}>x</button>
              <Modal.Title disabled={loading} className='exampleCounters__header-title'>Examples</Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body className='exampleCounters__body'>
            <p className="exampleCounters__body-title">Select an example to add it to your counters.</p>
            <div className="exampleCounters__row">
              <Carousel closeModal={hideModal2} items={['Cups of coffee', 'Glasses of water', 'Martinis']} title='Drinks'/> 
            </div>
            <div className="exampleCounters__row">
              <Carousel closeModal={hideModal2} items={['Hot-dogs', 'Cupcakes eaten', 'Chicken wings']} title='Food'/> 
            </div>
            <div className="exampleCounters__row">
              <Carousel closeModal={hideModal2} items={['Times sneezed', 'Naps', 'Day dreaming']} title='Misc'/> 
            </div>
        </Modal.Body>
      </Modal>
      </>
    )
}

export default InputCreation
