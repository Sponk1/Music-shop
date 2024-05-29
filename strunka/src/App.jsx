import React from 'react'
import {BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import CatalogMain from './pages/CatalogMain'
import Clients from './pages/Clients'
import AboutCompany from './pages/AboutCompany'
import Basket from './pages/Basket'


function App() {

  let isAuth = false;

  return (
    <div className="wrapper">
      <BrowserRouter>
        {/* <AppRouter /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/CatalogMain' element={<CatalogMain />} />
          <Route path='/Clients' element={<Clients />} />
          <Route path='/AboutCompany' element={<AboutCompany />} />
          <Route path='*' element={<Home />} />
          {
            isAuth && <Route path='/Basket' element={<Basket />} />
          }
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
