import React, { useContext } from "react"
import {Button} from 'react-bootstrap'
import "./header.css"
import { useState } from "react"
import { observer } from "mobx-react-lite";
import { NavLink } from "react-router-dom"
import scripkey from "../../img/scrip-key.svg"
import tglogo from "../../img/tglogo.svg"
import profilepic from "../../img/profilepic.svg"
import { Context } from "../../main.jsx"



const Header = observer( () => {
    const {user} = useContext(Context)
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
                {user.isAuth ?
                    <>
                     <nav className="nav-bar-right">
                     <NavLink to={"/AboutCompany" } className="nvl">О КОМПАНИИ</NavLink>   
                     <NavLink to={"/Basket"} className="nvl">КОРЗИНА</NavLink>
                     <NavLink to={"#"} className='nvl'>админ</NavLink>
                    </nav>
                     <a href="#" className="profile-pic">
                         <NavLink to={"#"}>
                            <img src={profilepic} alt="Профиль" />
                         </NavLink>
                     </a>
                     </>
                    :
                    <>
                    <nav className="nav-bar-right">
                    <NavLink to={"/AboutCompany" } className="nvl">О КОМПАНИИ</NavLink>   
                    <NavLink to={"/Basket"} className="nvl">КОРЗИНА</NavLink>
                    {/* <NavLink to={"#"} className='nvl'>админ</NavLink> */}
                    </nav>
                    <a href="#" className="profile-pic">
                        <NavLink to={"#"}>
                            <Button variant={""}  onClick={() => user.setIsAuth(true)}>
                                <img src={profilepic} alt="Профиль" />
                            </Button> 
                         </NavLink>
                    </a>
                    </>
                }
            </div>
        </div>
    );
});

export default Header;
