import React from 'react'
import {BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import CatalogMain from './pages/CatalogMain'
import Clients from './pages/Clients'
import AboutCompany from './pages/AboutCompany'
import Basket from './pages/Basket'
import Admin from './pages/Admin'
import Auth from './pages/Auth';

function App() {

  let isAuth = false;

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/CatalogMain' element={<CatalogMain />} />
          <Route path='/Clients' element={<Clients />} />
          <Route path='/AboutCompany' element={<AboutCompany />} />
          <Route path='*' element={<Home />} />
          <Route path='/Auth' element={<Auth />} />
          {
            isAuth && <Route key='/Basket' path='/Basket' element={<Basket />} />
          }
          {
            isAuth && <Route key='/Admin' path='/Admin' element={<Admin />} />
          }
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
