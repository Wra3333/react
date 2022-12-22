import React from "react";
import "./BasketEmpty.scss"
import { Link } from "react-router-dom";
export function BasketEmpty() {
  return (
    <>
          <h2 className="basket__title">Корзина пустая</h2>
          <p className="basket__description">
            Вероятней всего, вы не заказывали ещё нечего
            Для того, чтобы заказать, перейди на главную страницу.
          </p>
          <img src="/img/empty-cart.png" alt="Empty cart" className="basket__img" height="300"  decoding="async"/>
          <Link to={"/"} class="basket__button" >
              <span>Вернуться назад</span>
            </Link>
    </>
    )
}