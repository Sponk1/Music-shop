import React from "react";
import "./catalogBodyMain.css";
import { NavLink } from "react-router-dom";
// import Home from "../../../pages/Home";
import pianos from "../../../img/PianosCard.png";

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
                                <img src={pianos} alt=""/>
                            </div>
                        </a>
                    </li>
                    <li className="product-wrapper">
                        <a href="" className="type-card">
                            <div className="product-photo">
<<<<<<< HEAD
                                <img src={pianos} alt=""/>
=======
                                <img src={drums} alt=""/>
<<<<<<< HEAD
>>>>>>> parent of c9dd517 (........)
=======
                                
>>>>>>> parent of 97db517 (Revert "........")
                            </div>
                        </a>
                    </li>
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
                                <img src={pianos} alt=""/>
                            </div>
                        </a>
                    </li>
                    <li className="product-wrapper">
                        <a href="" className="type-card">
                            <div className="product-photo">
                                <img src={pianos} alt=""/>
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