import React from "react"
import "./header.css"
import { NavLink } from "react-router-dom"
import scripkey from "../../img/scrip-key.svg"
import tglogo from "../../img/tglogo.svg"
import profilepic from "../../img/profilepic.svg"
import CatalogMain from "../../pages/CatalogMain.jsx";



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
                    <NavLink to={"/CatalogMain"}>КАТАЛОГ</NavLink>
                    <NavLink to={"/Clients"}>ПОКУПАТЕЛЯМ</NavLink>
                    {/* <a href="/CatalogMain">КАТАЛОГ</a> */}
                    {/* <a href="./Clients">ПОКУПАТЕЛЯМ</a> */}
                </nav>
                <nav className="nav-bar-right">
                    <a href="#">О КОМПАНИИ</a>
                    <a href="#">КОРЗИНА</a>
                </nav>
                    <a href="#" className="profile-pic">
                        <img src={profilepic} alt="Профиль" />
                    </a>
            </div>
        </div>
    );
}

export default Header;