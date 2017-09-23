// @flow
import * as React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './store'
import { getAllProducts } from './containers/CartContainer/logic'
import { loadFields } from './containers/FieldContainer/logic'

const store = configureStore()
store.dispatch(getAllProducts())
store.dispatch(loadFields())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
