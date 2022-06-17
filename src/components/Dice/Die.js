import React from "react";
import "./Die.css"

const Die = ({ face , rolling }) => {
    return <i className={`die fa fa-dice-${face} ${rolling && "shaking"}`}></i>
}

export default Die;