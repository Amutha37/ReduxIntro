import App from './App'
import ReactDOM from 'react-dom/client'
import { CounterContextProvider } from './CounterContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CounterContextProvider>
    <App />
  </CounterContextProvider>
)
