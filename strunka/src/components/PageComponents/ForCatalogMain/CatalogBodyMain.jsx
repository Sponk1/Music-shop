import React from "react";
import "./catalogBodyMain.css"
import { NavLink } from "react-router-dom";
import Home from "../../../pages/Home"

const CatalogBody = () => {
    return (
        <div>
            <span>Каталог</span>
            <div className="navigation">
                <a href="#">Главная</a>
                <hr />
                <a href="#">Каталог</a>
            </div>
            <div className="good-types">

            </div>
            <div className="downside-txt">

            </div>
        </div>
    );
}

export default CatalogBody;