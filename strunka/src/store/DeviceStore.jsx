import React from "react";
import {makeAutoObservable} from 'mobx'

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Гитары'},
            {id: 2, name: 'Клавишные инструметы'}
        ]
        this._brands = [
            {id: 1, name: 'Yamaha'},
            {id: 2, name: 'BEHRINGER'}
        ]
        this._instruments = [
            
        ]
        
        
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
        this._user = bool
    }

    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }
}