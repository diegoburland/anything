import { FunctionComponent } from 'react'
import { Button } from '../../components/common'
import LinkTag from '../../components/common/LinkTag/LinkTag'

const logo = require('../../assets/images/logo.svg')

const HomeView: FunctionComponent = () => {
  return (
    <>
      <div className='home'>
        <div className='home__logo'>
          <img className='home__logo--img' src={logo.default} />
        </div>
        <div className='home__text'>
          <h3 className='home__text--header'>Welcome to Counters</h3>
          <p className='home__text--paragraph'>Capture cups of lattes, frapuccinos, or anything else that can be counted.</p>
          <div className='home__text--action-container'>
            <LinkTag text='Get started' path='/main'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeView
