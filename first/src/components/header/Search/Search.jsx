import React from "react";
import { useState } from "react";
import serh from "./img/searh.svg"
import "./search.scss"
export function Search({search,setSerch}) {
  return(
    <label className="search">
    <img src={serh} alt="" height={20} width={20} className="search__icon"/>
  <input type="search" placeholder="Поиск..." className="search__input" value={search} onChange={(e) => setSerch(e.target.value)}/>
    </label>
  )
}
