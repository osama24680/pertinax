import React from 'react'
import "./Navbar.scss"
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/"><div className="logo">   pertina<span>X</span></div></Link>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li>Program</li>
                <li>Choose us</li>
                <li>Pricing</li>
                <li>Register Now</li>
            </ul>
        </div>
    )
}

export default Navbar
