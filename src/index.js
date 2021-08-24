import ReactDOM from 'react-dom'
import 'normalize.css'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))
serviceWorkerRegistration.register();


