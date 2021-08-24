import { FunctionComponent, useEffect } from 'react'
import InputSearch from '../../components/common/InputSearch/InputSearch'
import Footer from '../../components/layout/Footer/Footer'
import Counters from '../../components/layout/Counters/Counters'

const MainView: FunctionComponent = () => {

  return (
    <>
      <div className='main'>
          <InputSearch/>
          <Counters/>
          <Footer/>
      </div>
    </>
  )
}


export default MainView
