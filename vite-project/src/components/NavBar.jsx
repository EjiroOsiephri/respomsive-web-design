import React from 'react'
import Logo from "./images/logo.svg"
import "./scss/_NavBar.scss"

const NavBar = () => {
    return (
        <nav className="navbar">
            <img src={Logo} alt="" />
            <button> Try It Free</button>
        </nav>
    )
}

export default NavBar