import React from 'react'
import {BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import CatalogMain from './pages/CatalogMain'
import Clients from './pages/Clients'
import AboutCompany from './pages/AboutCompany'
import ShopingCart from './pages/ShopingCart'

function App() {

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/CatalogMain' element={<CatalogMain />} />
          <Route path='/Clients' element={<Clients />} />
          <Route path='/AboutCompany' element={<AboutCompany />} />
          <Route path='/ShopingCart' element={<ShopingCart />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
