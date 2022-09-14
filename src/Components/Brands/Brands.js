import React from 'react'
import "./Brands.scss"
import logo1 from "../../assets/brands/logo1.png"
import addidas from "../../assets/brands/addidas.png"
import logo2 from "../../assets/brands/logo2.png"
import logo3 from "../../assets/brands/logo3.png"
import nike from "../../assets/brands/nike.png"
import puma from "../../assets/brands/puma.png"

const Brands = () => {
    return (
        <div className="container">
            <div className="brands">
                <div><img src={addidas} alt="" /></div>
                <div><img src={logo1} alt="" /></div>
                <div><img src={nike} alt="" /></div>
                <div><img src={logo3} alt="" /></div>
                <div><img src={puma} alt="" /></div>
                <div><img src={logo2} alt="" /></div>
            </div>
        </div>
    )
}

export default Brands
