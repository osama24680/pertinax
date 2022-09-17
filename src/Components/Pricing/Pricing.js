import React from 'react'
import "./Pricing.scss"
import HeadingText from "../HeadingText/HeadingText"
import basic from "../../assets/plans/pricing1.png"
import premium from "../../assets/plans/pricing2.png"
import diamond from "../../assets/plans/pricing3.png"
import { UilCheckCircle } from '@iconscout/react-unicons'
import {Link } from "react-router-dom"
const Pricing = () => {
    return (
        <div className="pricing">
            <HeadingText greenText={"Pricing"} shadowText={"Our"} whiteText={"Special Plans"} />
            <div className="package__planes">
                <div className="package">
                    <h3>Free Package</h3>
                    <h2>$0</h2>
                    <div className="features">
                        <p><UilCheckCircle />Make Your Own Plane</p>
                    </div>
                    <Link to="/Trainings"><div className="buttonPackage"> <button>Start Now</button></div></Link>
                </div>
                <div className="package">
                    <div className="imgPackage"><img src={basic} alt="" /></div>
                    <h3>Basic Package</h3>
                    <h2>$120</h2>
                    <div className="features">
                        <p><UilCheckCircle />Specific Private Plan</p>
                        <p><UilCheckCircle />Flexibilty With Diets</p>
                        <p><UilCheckCircle />Access To All Materials</p>
                        <p><UilCheckCircle />A Call With your Coach Every Weak</p>
                        <p><UilCheckCircle />10% Discount On All The Supplements</p>
                    </div>
                    <div className="buttonPackage"> <button>Purchase Now</button></div>
                </div>
                {/* ##### */}
                <div className="package premiumPackage">
                    <div className="imgPackage"><img src={premium} alt="" /></div>
                    <h3>Premium Package</h3>
                    <h2>$230</h2>
                    <div className="features">
                        <p><UilCheckCircle />Specific Private Plan</p>
                        <p><UilCheckCircle />Flexibilty With Diets</p>
                        <p><UilCheckCircle />Access To All Materials</p>
                        <p><UilCheckCircle />A Call With your Coach 5 d/w</p>
                        <p><UilCheckCircle />15% Discount On All The Supplements</p>
                        <p><UilCheckCircle />10% Discount On Our Brands Gym</p>
                    </div>
                    <div className="buttonPackage"> <button>Purchase Now</button></div>
                </div>
                {/* ##### */}
                <div className="package">
                    <div className="imgPackage"><img src={diamond} alt="" /></div>
                    <h3>Diamond Package</h3>
                    <h2>$350</h2>
                    <div className="features">
                        <p><UilCheckCircle />Specific Private Plan</p>
                        <p><UilCheckCircle />Flexibilty With Diets</p>
                        <p><UilCheckCircle />Access To All Materials</p>
                        <p><UilCheckCircle />A Call With your Coach any time</p>
                        <p><UilCheckCircle />Get Advices From All of Our Team</p>
                        <p><UilCheckCircle />Join Our Community On Discource</p>
                        <p><UilCheckCircle />25% Discount On All The Supplements</p>
                        <p><UilCheckCircle />20% Discount On Our Brands Gym</p>
                    </div>
                    <div className="buttonPackage"> <button>Purchase Now</button></div>
                </div>
            </div>
        </div>
    )
}

export default Pricing
