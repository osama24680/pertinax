import React from 'react'
import "./Header.scss"
import headerGround from "../../assets/headerGround.mp4"
import { UilArrowRight } from '@iconscout/react-unicons'
import Navbar from "../Navbar/Navbar"
import homeWorkout from "../../assets/home-img.png"
const Header = () => {
    return (
        <div className="header">
            <video autoPlay muted loop >
                <source src={headerGround} type="video/mp4" />
            </video>
            <div className="layer__header">
                <Navbar />
                <div className="header__content">
                    <div className="header__content-leftSide">
                        <h2>Feed Your Mind</h2>
                        <h1>Shape Your Body</h1>
                        <p> Here we will help you to shape and build your ideal
                            body and live your life to the fullest.
                        </p>
                        <div className="start__button">
                            <button>Get Started</button>
                            <UilArrowRight />
                        </div>

                    </div>
                    <div className="header__content-rightSide">
                        <img src={homeWorkout} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
