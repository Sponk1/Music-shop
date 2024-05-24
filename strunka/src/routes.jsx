import { Component } from "react"
import Admin from "./pages/Admin"
import { ADMIN_ROUTE, SHOPPING_CART } from "./utils/consts"
import ShopingCart from "./pages/ShopingCart"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: SHOPPING_CART,
        Component: ShopingCart
    }
]

export const publicRoutes = [
    {
        path: ,
        Component: Admin
    },
    {
        path: SHOPPING_CART,
        Component: ShopingCart
    }
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: SHOPPING_CART,
        Component: ShopingCart
    }
]