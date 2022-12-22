import React from "react";
import "./skeleton.scss"
export function Skeleton() {
  return (
    <div className="skeleton">
      <div className="skeleton__card loading">
      </div>
      <div className="skeleton__title loading">
      </div>
      <div className="skeleton__menu"> 
      <span className="skeleton__price loading"></span>
        <div className="skeleton__cost loading">
        </div>
      </div>
    </div>
  )
}