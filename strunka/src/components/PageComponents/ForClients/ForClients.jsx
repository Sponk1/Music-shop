import React from "react";
import { NavLink } from "react-router-dom";
import "./forClients.css";
import tglogo from "../../../img/tglogo.svg";

const ForClients = () => {
    return (
        <div className="for-clients">
            <span className="buyers-txt">Покупателям</span>
            <div className="road-map">
                <nav>
                    <NavLink to={'/'}>Главная</NavLink>
                    <span> &mdash; </span>
                    <NavLink to={"#"}>Покупателям</NavLink>
                </nav>
            </div>
            <div>
            <span className="how-to-order">Как оформить заказ</span>
            <span className="instruction-txt">
                Пошаговая инфструкция оформления заказа в интернет-магазине через корзину:
            </span>
                <ol type="1">
                    <li>Вы выбрали нужный вам товар, нажмите на кнопку &quot;В корзину&quot;.</li>
                    <li>Для оформления заказа перейдите в Корзину, нажав на значок в правом верхнем углу.</li>
                    <li>Справа от наименования товара укажите необходимое Вам количество товаров. При изменении <p>количества сумма к оплате автоматически пересчитается.</p></li>
                    <li>Удалить товар можно, нажав на крестик справа от него.</li>
                    <li>Для продолжения оформления заказа нажмите на кнопку.</li>
                    <li>Заполните все информационные поля. Обратите внимание на поля, отмеченные звездочкой * - данные поля <p>обязательны для заполнения.</p></li>
                    <li>После заполнения формы нажмите на кнопку «Оформить заказ»</li>
                    <li>Заказ принят к выполнению, если Вы видите страницу «Заказ сформирован». C Вами обязательно свяжется <p>менеджер для уточнения деталей.</p></li>
                </ol>
            </div>
            <span className="off-shop">Оффлайн-магазин</span>
            <div className="offline-instruction">
                <span className="offline-txt">
                    <p>Мы всегда дадим вам возможность познакомиться с инструментом поближе. Большинство наших сотрудников</p>
                    <p>прекрасно играют на музыкальных инструментах, и если Вы только начинаете осваивать мир музыки, и,</p>
                    <p>например, хотите впервые купить гитару или выбрать синтезатор, они с удовольствием продемонстрируют все</p> 
                    <p>возможности заинтересовавших Вас музыкальных инструментов, звукового и концертного оборудования.</p>
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

export default ForClients;