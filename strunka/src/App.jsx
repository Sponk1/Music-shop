import React from 'react'
import {BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import CatalogMain from './pages/CatalogMain'
import Clients from './pages/Clients'
import AboutCompany from './pages/AboutCompany'
import Basket from './pages/Basket'
import Admin from './pages/Admin'
import AppRouter from './components/AppRouter/AppRouter'


function App() {

  let isAuth = false;

  return (
    <div className="wrapper">
        <AppRouter />    
    </div>
  )
}

export default App
