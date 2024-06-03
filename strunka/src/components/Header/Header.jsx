import React from "react"
import "./header.css"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import scripkey from "../../img/scrip-key.svg"
import tglogo from "../../img/tglogo.svg"
import profilepic from "../../img/profilepic.svg"
import { REGISTARTION_ROUTE } from '../utils/consts';
// import CatalogMain from "../../pages/CatalogMain.jsx";



const Header = () => {
    
    return(
        <div className="full-head">
            <div className="top-head">
                <span className="phone-num">+7 906 44 55</span>
                <img className="scripkey-img" src={scripkey} alt="скрипичный ключ" />
                <div className="telegram">
                    <a className="tg-link" href="https://telegram.org">/telegram/@magaasStruna</a>
                    <img className="tg-img" src={tglogo} alt="логотип телеграм"/>
                </div>
            </div>
        <div className="line">
            <hr />
        </div>
            <div className="bottom-head">
                <nav className="nav-bar-left">
                    <NavLink to={"/CatalogMain"} className="nvl">КАТАЛОГ</NavLink>
                    <NavLink to={"/Clients"} className="nvl">ПОКУПАТЕЛЯМ</NavLink>
                </nav>
                <nav className="nav-bar-right">
                    <NavLink to={"/AboutCompany"} className="nvl">О КОМПАНИИ</NavLink>
                    <NavLink to={"/Basket"} className="nvl">КОРЗИНА</NavLink>
                    <NavLink to={"/Auth"} className="nvl">РЕГИСТРАЦИЯ</NavLink>
                </nav>
                    <a href="#" className="profile-pic">
                        <NavLink to={"#"}>
                            <img src={profilepic} alt="Профиль" />
                        </NavLink>
                    </a>
            </div>
        </div>
    );
}

export default Header;
