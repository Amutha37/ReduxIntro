// import ReactDOM from 'react-dom/client'

// import App from './App'

import './App.css'
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<App />)

import React from 'react'
import ReactDOM from 'react-dom/client'

import { createStore } from 'redux'

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'ZERO':
      return 0
    default:
      return state
  }
}

const store = createStore(counterReducer)

const App = () => {
  return (
    <div className='App'>
      <h4>Counter App</h4>
      <div id='count'>{store.getState()}</div>
      <button id='add' onClick={(e) => store.dispatch({ type: 'INCREMENT' })}>
        plus
      </button>
      <button id='minus' onClick={(e) => store.dispatch({ type: 'DECREMENT' })}>
        minus
      </button>
      <button id='reset' onClick={(e) => store.dispatch({ type: 'ZERO' })}>
        zero
      </button>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderApp = () => {
  root.render(<App />)
}

renderApp()
store.subscribe(renderApp)
