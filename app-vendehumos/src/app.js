import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
import App from './components/App'
import { BrowserRouter } from 'react-router-dom'
import getStore from './store/create-store';
import { Provider } from 'react-redux'

const store = getStore()

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
)
