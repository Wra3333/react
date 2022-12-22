import React from "react";
import { BasketEmpty } from "../components/BasketEmpty/BasketEmpty";
import { BasketFuul } from "../components/BasketEmpty/BasketFuul";
import { Link } from "react-router-dom";
export function Basket({productBys,setCountMenu,countMenu,sum,setSum,search,setProductsBuy}){
    return(
        <>
    <div className="basket">
    <div className="container container--cart">
    {productBys==false?<BasketEmpty/>:<BasketFuul productBys={productBys} setProductsBuy={setProductsBuy}setSum={setSum} setCountMenu={setCountMenu} countMenu={countMenu} sum={sum} search={search} />}
    </div>
    </div>
        </>
    )
}