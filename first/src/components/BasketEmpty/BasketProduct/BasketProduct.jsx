import React, { useEffect } from "react";
import { useState } from "react";
import "./BasketProduct.scss"
export function BasketProduct({ title, price, img,setSum,sum,setCountMenu,countMenu,index,productBys,setProductsBuy}) {
    let [TT,setTT] = useState(+localStorage.getItem(`TT${index}`) || 1)
    let [PP,setPP] = useState(+localStorage.getItem(`PP${index}`) ||price)
    useEffect( ()=>{
        localStorage.setItem(`TT${index}`,TT)
        localStorage.setItem(`PP${index}`,PP)
    })
    return (
        <div class="cart__item">
            <div class="cart__item-img">
                <img src={img} alt="" />
            </div>
            <div class="cart__item-info">
                <h3>{title}</h3>
            </div>
            <div class="cart__item-count">
                <div class="button button--outline button--circle cart__item-count-minus" onClick={()=>{
                     if(TT-1==0)setProductsBuy(productBys.filter(item => item.index!=index));
                     setTT(TT==0?0:TT-1)
                     setPP(PP==0?0:PP-=price)
                     setSum(sum==0?0:sum-=price)
                     setCountMenu(countMenu==0?0:countMenu-=1)
                     }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#EB5A1E"></path>
                    </svg>

                </div>
                <b>{TT}</b>
                <div class="button button--outline button--circle cart__item-count-plus" onClick={()=>
                {
                    setTT(++TT)
                    setPP(PP+=price)
                    setSum(sum+=price)
                    setCountMenu(countMenu+=1)}}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" fill="#EB5A1E"></path>
                        <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#EB5A1E"></path>
                    </svg>

                </div>
            </div>
            <div class="cart__item-price">
                <b>{PP} ₽</b>
            </div>
            <div class="cart__item-remove" onClick={() => {
                localStorage.clear()
                setProductsBuy(productBys.filter(item => item.index!=index))
                setSum(sum==0?0:sum-=PP)
                setCountMenu(countMenu==0?0:countMenu-=TT)
                }}>
                <div class="button button--outline button--circle"> 
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" fill="#EB5A1E"></path>
                        <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#EB5A1E"></path>
                    </svg>

                </div>
            </div>
        </div>
    )
}