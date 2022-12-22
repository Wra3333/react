import React from "react";
import "./bg-categories.scss"
let list = [{name:"все", img:"img/icon/combo.png"},
  {name:"бургеры",img:"img/icon/burger.png"},
  {name:"закуски",img:"img/icon/snack.png"},
  {name:"хот-доги",img:"img/icon/hot-dog.png"},
  {name:"пиццы",img:"img/icon/pizza.png"},
  {name:"cок",img:"img/icon/juice.png"}
];

export function Categories({actite,setActive}){
  let listItems = list.map( (item,i) => <li key={i} onClick={()=>setActive(i)} className={i==actite?"bg-categ_active":null}><img src={item.img} alt="item-name" className="bg-categ__img"/>{item.name}</li>)
  return (
    <div className="bg-categ page__bg-categ">
        <ul className="bg-categ__row" >
        {listItems}
      </ul>  
    </div>
  )
}