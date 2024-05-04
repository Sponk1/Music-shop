import React from "react"
import "./header.css"
import scripkey from "../../img/scrip-key.svg"
import tglogo from "../../img/tglogo.svg"
import profilepic from "../../img/profilepic.svg"

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
                    <a href="#">КАТАЛОГ</a>
                    <a href="#">ПОКУПАТЕЛЯМ</a>
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