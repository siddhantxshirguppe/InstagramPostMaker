import React from "react";
import header_logo from "../images/header_logo.jpeg";

import "./style.css"
export default function Header() 
{
    return(
        <div>
        <header className="header">
        <img className ="header_logo" src={header_logo} />
        <h4 className="header_title">Instagram captioner</h4>
        <h2 className="header_subtitle">Get popular fast!</h2>
        </header>
        </div>
    )
}