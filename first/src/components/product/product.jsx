import React, { createContext } from "react";
import { useState,useEffect, useContext } from "react";
import { ContextBuy } from "../App/App.js";
import "./product.scss"
export function Product(props) {
  let {sum, setSum,countMenu,setCountMenu,productBys,setProductsBuy}= useContext(ContextBuy)
  let  [sell,setSell] =useState(false)
  useEffect( ()=>{
    if (productBys.find( item => item.index==props.index)) return setSell(true);
  },[setBy])
  function setBy(){
    if (productBys.find( item => item.index==props.index)) return;
    setSum(sum+=props.price)
    setCountMenu(++countMenu)
    productBys.push({...props })

  }
  return (
    <div className="product">
      <div className="product__card">
        <img src={props.img} alt="product" />
      </div>
      <div className="product__title">
        {props.title}
      </div>
      <div className="product__menu"> 
      <span className="product__price">
        {"От " + props.price+"₽"}
      </span>
        <button className={sell?"cost sell":"cost"} onClick={setBy} >
          {sell?"В корзине":"+ Добавить" }
        <div className="cost_count">{}</div>
        </button>
      </div>
    </div>
  )
}