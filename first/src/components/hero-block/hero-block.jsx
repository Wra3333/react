import React from "react"
import "./hero-block.scss"
import hero from "./img/pic.svg"

export function Hero(){
return(
<div class="hero-block">
    <div class="container">
        <div className="hero-block__row">
        <img src={hero} alt="hero-block" className="hero-block__img" id="browser"/>
        </div>
    </div>
  </div>
)
}