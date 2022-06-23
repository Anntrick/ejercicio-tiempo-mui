import React from "react";
import { NavLink } from "react-router-dom"
import "./Header.css"

const Header = props => {
    return (
        <div className="Header">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/tiempo">El tiempo</NavLink>
        </div>
    )
}

export default Header 