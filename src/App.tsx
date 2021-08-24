import { FunctionComponent } from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import 'normalize.css'
import './styles/app.scss'
import { AppRouter } from './routes/AppRouter';

import HomeView from './views/Home'


const App: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <AppRouter/>
    </Provider>
  )
}

export default App
