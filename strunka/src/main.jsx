import React, {createContext} from 'react'
import UserStore from './store/UserStore.jsx'
import InstrumentStore from './store/InstrumentStore.jsx'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "../src/styles/reset.css"


export const Context = createContext(null)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Context.Provider value={{ 
        user: new UserStore(),
        instrument: new InstrumentStore()
      }}>
      <App />
   </Context.Provider>    
  </React.StrictMode>,
  document.getElementById('root')
)
