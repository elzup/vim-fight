// @flow
import * as React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './store'
import { loadFields, gameSetup } from './containers/FieldContainer/logic'

const store = configureStore()
store.dispatch(loadFields())
store.dispatch(gameSetup())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
