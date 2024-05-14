import React from "react";
import "./catalogBodyMain.css";
import { NavLink } from "react-router-dom";
// import Home from "../../../pages/Home";
import pianos from "../../../img/PianosCard.png";
import drums from "../../../img/drums.png"
import percs from "../../../img/percs.png"
import guitar from "../../../img/Guitar.png"
import duh from "../../../img/duhovble.png"
import acc from "../../../img/accessuories.png"

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
                                <img src={percs} alt=""/>
                            </div>
                        </a>
                    </li>
                    <li className="product-wrapper">
                        <a href="" className="type-card">
                            <div className="product-photo">
                                {/* <img src={guitar} alt=""/> */}
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
                                <img src={guitar} alt=""/>
                            </div>
                        </a>
                    </li>
                    <li className="product-wrapper">
                        <a href="" className="type-card">
                            <div className="product-photo">
                                <img src={acc} alt=""/>
                            </div>  
                        </a>
                    </li>
                </ul>
                
            </div>
            <div className="downside-txt">
                <span>
                    Найти инструмент на любой вкус ? Не проблема ! Магазин СТРУНКА предоставит вам обширный каталог 
                    <p>музыкальных инструментов, от ударных до духовых. Развивайте свое творческое начало по выгодным ценам и с</p>
                    <p>лучшем качеством в стране.</p> 
                    <p>Вы можете преобрести товар в торговых сетевых магазинах СТРУНКА или заказать онлайн!</p>
                </span>
            </div>
        </div>
    );
}

export default CatalogBody;