import React from 'react'
import "./Navbar.scss"
const Navbar = () => {
    return (
        <nav>
            <div className="logo">pertina<span>X</span></div>
            <ul>
                <li>Home</li>
                <li>Program</li>
                <li>Choose us</li>
                <li>Pricing</li>
                <li>Register Now</li>
            </ul>
        </nav>
    )
}

export default Navbar
