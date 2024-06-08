import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CatalogMain from './pages/CatalogMain'
import Clients from './pages/Clients'
import AboutCompany from './pages/AboutCompany'
import Basket from './pages/Basket'
import Admin from './pages/Admin'
import Auth from './pages/Auth'
import Instrument from './pages/Instrument'
import { observer } from "mobx-react-lite";
import { Context } from './main'

const App = observer(() => {
  const { user } = useContext(Context);

  return (
    <div className="wrapper">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/CatalogMain' element={<CatalogMain />} />
          <Route path='/Clients' element={<Clients />} />
          <Route path='/AboutCompany' element={<AboutCompany />} />
          <Route path='/Auth' element={<Auth />} />
          <Route path='/Instrument/:id' element={<Instrument />} />
          <Route path='*' element={<Home />} />
          {user.isAuth && <Route path='/Basket' element={<Basket />} />}
          {user.isAuth && <Route path='/Admin' element={<Admin />} />}
        </Routes>
      </Router>
    </div>
  );
});

export default App;

