import React, { useContext } from "react";
import "./header.css";
import { NavLink, useNavigate } from "react-router-dom";
import scripkey from "../../img/scrip-key.svg";
import tglogo from "../../img/tglogo.svg";
import profilepic from "../../img/profilepic.svg";
import { Context } from '../../main';
import { LOGIN_ROUTE } from '../../utils/consts';

const Header = () => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const handleLogout = () => {
    user.logout();
    navigate('/');
  };

  return (
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
          <NavLink to="/CatalogMain" className="nvl">КАТАЛОГ</NavLink>
          <NavLink to="/Clients" className="nvl">ПОКУПАТЕЛЯМ</NavLink>
        </nav>
        <nav className="nav-bar-right">
          <NavLink to="/AboutCompany" className="nvl">О КОМПАНИИ</NavLink>
          <NavLink to="/Basket" className="nvl">КОРЗИНА</NavLink>
          {user.isAuth ? (
            <>
              <span className="nvl button-name">{user.user.email}</span>
              <button onClick={handleLogout} className="nvl button-name">ВЫЙТИ</button>
            </>
          ) : (
            <>
              <NavLink to={LOGIN_ROUTE} className="nvl">ВОЙТИ</NavLink>
            </>
          )}
        </nav>
        {user.isAuth && (
          <NavLink to="/profile" className="profile-pic">
            <img src={profilepic} alt="Профиль" />
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
