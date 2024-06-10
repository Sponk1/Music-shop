import { makeAutoObservable } from "mobx";

export default class UserStore {
  constructor() {
    this._isAuth = false;
    this._user = null;
    makeAutoObservable(this);
  }

  setIsAuth(bool) {
    this._isAuth = bool;
  }

  setUser(user) {
    this._user = user;
  }


  login(user) {
    this.setIsAuth(true);
    this.setUser(user);
  }


  logout() {
    this.setIsAuth(false);
    this.setUser(null);
  }

  get isAuth() {
    return this._isAuth;
  }

  get user() {
    return this._user;
  }
}
