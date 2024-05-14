import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import CatalogMain from './pages/CatalogMain'

function App() {

  return (
    <div className="wrapper">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/CatalogMain' element={<CatalogMain />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
