import React from "react";
import "./catalogBodyMain.css";
import { NavLink } from "react-router-dom";
// import Home from "../../../pages/Home";
import pianos from "../../../img/PianosCard.png";
import guitar from "../../../img/Guitar.png";
import drums from "../../../img/drums.png";
import duh from "../../../img/duhovble.png";
import percs from "../../../img/Rectangle 4.png";
import accsessoires from "../../../img/acccc.png";



const CatalogBody = () => {
    return (
        <div className="catalog-body">
            <span className="catalog-txt">Каталог</span>
            <div className="navigation">
                <nav>
                    <NavLink to={"/"}>Главная</NavLink>
                    <span> &mdash; </span>
                    <NavLink to={"#"}>Каталог</NavLink>
                </nav>
            </div>
            <div className="good-types">
                <ul className="cards">
                    <li className="product-wrapper">
                        <a href="" className="type-card">
                            <div className="product-photo">
                                <img src={pianos} alt=""/>
                            </div>
                        </a>
                    </li>
                    <li className="product-wrapper">
                        <a href="" className="type-card">
                            <div className="product-photo">
                                <img src={guitar} alt=""/>
                            </div>
                        </a>
                    </li>
                    <li className="product-wrapper">
                        <a href="" className="type-card">
                            <div className="product-photo">
                                <img src={drums} alt=""/>
                            </div>
                        </a>
                    </li>
                    <li className="product-wrapper">
                        <a href="" className="type-card">
                            <div className="product-photo">
                                <img src={duh} alt=""/>
                            </div>
                        </a>
                    </li>
                    <li className="product-wrapper">
                        <a href="" className="type-card">
                            <div className="product-photo">
                                <img src={percs} alt=""/>
                            </div>
                        </a>
                    </li>
                    <li className="product-wrapper">
                        <a href="" className="type-card">
                            <div className="product-photo">
                                <img src={accsessoires} alt=""/>
                            </div>
                        </a>
                    </li>
                </ul>
                
            </div>
            <div className="downside-txt">

            </div>
        </div>
    );
}

export default CatalogBody;