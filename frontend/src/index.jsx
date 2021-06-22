import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware,createStore } from 'redux'
import { Provider } from 'react-redux'

import promise from 'redux-promise'

import App from './main/app'
import reducers from './main/reducers'
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
    //São tres chamadas em constante
const store = applyMiddleware(promise)(createStore)(reducers, devTools) // esse metodo cria a store com os reducers que deixamos staticos

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,

    document.getElementById('app')
)