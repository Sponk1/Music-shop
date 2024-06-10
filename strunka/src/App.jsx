import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CatalogMain from './pages/CatalogMain'
import Clients from './pages/Clients'
import AboutCompany from './pages/AboutCompany'
import Basket from './pages/Basket'
import Admin from './pages/Admin'
import Auth from './pages/Auth'
import Header from './components/Header/Header';
import Instrument from './pages/Instrument'
import { observer } from "mobx-react-lite";
import { Context } from './main'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "./utils/consts";

const App = observer(() => {
  const { user } = useContext(Context);

  return (
    <div className="wrapper">
      <Router>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/CatalogMain' element={<CatalogMain />} />
          <Route path='/Clients' element={<Clients />} />
          <Route path='/AboutCompany' element={<AboutCompany />} />
          <Route path='/Auth' element={<Auth />} />
          <Route path={LOGIN_ROUTE} element={<Auth />} />
          <Route path={REGISTRATION_ROUTE} element={<Auth />} />
          <Route path='/Instrument/:id' element={<Instrument />} />
          <Route path='/Basket' element={<Basket />} />
          <Route path='*' element={<Home />} />
          {/* <Route 
            path='/Basket' 
            element={user.isAuth ? <Basket /> : <Navigate to={LOGIN_ROUTE} />} 
          />
          <Route 
            path='/Admin' 
            element={user.isAuth ? <Admin /> : <Navigate to={LOGIN_ROUTE} />} 
          /> */}
        </Routes>
      </Router>
    </div>
  );
});

export default App;

