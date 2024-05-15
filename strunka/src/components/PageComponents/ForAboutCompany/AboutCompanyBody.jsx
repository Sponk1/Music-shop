import React from "react";
import { NavLink } from "react-router-dom";
import "./aboutCompanyBody.css";
import tglogo from "../../../img/tglogo.svg"

const AboutCompanyBody = () => {
    return (
        <div className="about-company">
            <span className="about-company-txt">О КОМПАНИИ</span>
            <div className="navigatio">
                <nav>
                    <NavLink to={"/"}>Главная</NavLink>
                    <span> &mdash; </span>
                    <NavLink to={"#"}>О компании</NavLink>
                </nav>
            </div>
            <div className="txt-description">
                <span className="strunka">
                    «Струнка» — это крупнейший в России магазин по продаже музыкальных инструментов, а также звукового, 
                    <p>студийного и концертного оборудования.</p>
                </span>
                <span className="establishment">
                    Компания «Струнка» была основана 30 февраля 2024 года и с этого времени непрерывно работает для Вас 
                    <p>на российском рынке. Она зародилась из небольшого магазина клавишных инструментов и прошла долгий </p>
                    <p>длинный путь, чтобы бережно собрать и сегодня предложить Вам все самое лучшее в Струнке.</p>
                </span>
                <span className="we-customers">
                    Мы ценим каждого нашего посетителя и рады предоставить нашим покупателям не только превосходное 
                    <p>обслуживание, но и широчайший ассортимент товаров и максимально широкий набор дополнительных услуг.</p>
                </span>
                <span className="cooperation">
                    Мы сотрудничаем с театрами, консерваториями, образовательными учреждениями, музыкальными 
                    <p>площадками и студиями звукозаписи, осуществляем информационную поддержку мероприятий.</p>
                </span>
                <span className="we-n-client">
                    Мы всегда идем клиенту навстречу и гарантируем высокое качество нашей продукции и обслуживания. 
                </span>
                <span className="help">
                    Мы всегда дадим вам возможность познакомиться с инструментом поближе. Большинство наших сотрудников 
                    <p>прекрасно играют на музыкальных инструментах, и если Вы только начинаете осваивать мир музыки, и, </p>
                    <p>например, хотите впервые купить гитару или выбрать синтезатор, они с удовольствием продемонстрируют все </p>
                    <p>возможности заинтересовавших Вас музыкальных инструментов, звукового и концертного оборудования.</p>
                </span>
                <spna className="e-shop">
                    Для наших клиентов работает интернет-магазин, в котором представлен большой выбор товаров, уникальные 
                    <p>предложения. Если Вы сомневаетесь и хотите подержать инструмент в руках, прежде чем совершить покупку, </p>
                    <p>Вы всегда можете зарезервировать товар и приехать за ним в магазин.</p>
                </spna>
                <span className="end">
                    Звучите вместе с нами!
                </span>
            </div>
            <div className="tg">
                <a href="#" className="tg-link">
                    telegram/@magaasStruna
                    <img src={tglogo} alt="" />
                </a>
            </div>
        </div>
    );
}

export default AboutCompanyBody;