import React, { useContext, useReducer } from "react";
import {BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from '../../pages/Home'
import CatalogMain from '../../pages/CatalogMain'
import Clients from '../../pages/Clients'
import AboutCompany from '../../pages/AboutCompany'
import Basket from '../../pages/Basket'
import Admin from '../../pages/Admin'

import { authRoutes, publicRoutes } from "./routes";
import { Context } from "../../main";

const AppRouter = () => {
    const {user} = useContext(Context)

    console.log(user)
    return (
        <div className="wrapper">
        <BrowserRouter>
          <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component />} exact/>
            )}
            {publicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component />} exact/>
            )}
            <Route path='/Clients' element={<Clients />} />
            <Route path='/AboutCompany' element={<AboutCompany />} />
            <Route path="/CatalogMain" element={<CatalogMain />} />
            <Route path='*' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default AppRouter; 

{/* <Route path='/' element={<Home />} />
            <Route path='/CatalogMain' element={<CatalogMain />} />
            <Route path='/Clients' element={<Clients />} />
            <Route path='/AboutCompany' element={<AboutCompany />} />
            <Route path='*' element={<Home />} />
            {
              isAuth && <Route key='/Basket' path='/Basket' element={<Basket />} />
            }
            {
              isAuth && <Route key='/Admin' path='/Admin' element={<Admin />} />
            } */}