import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { getAccountList, getTotalBalance } from './actions'
import App from './containers/App'

const middleware = [ thunk ]

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

store.dispatch(getAccountList())
store.dispatch(getTotalBalance())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)