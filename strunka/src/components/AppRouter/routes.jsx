import React, { Component } from "react";

import Admin from '../../pages/Admin' 
import Basket from "../../pages/Basket";
import Login from "../../pages/Login";
import Home from "../../pages/Home";
import Registration from "../../pages/Registration";
import Instrument from "../../pages/Instrument";
import Auth from '../../pages/Auth'
import CatalogMain from "../../pages/CatalogMain";

import { ADMIN_ROUTE, BASKET_ROUTE, HOME_ROUTE, INSTRUMENT_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE,  } from "../../utils/consts";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin,
    },
    {
        path: BASKET_ROUTE,
        Component: Basket,
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth,
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth,
    },
    {
        path: INSTRUMENT_ROUTE + '/:id',
        Component: Instrument,
    },
    {
        path: HOME_ROUTE,
        Component: Home,
    }
]