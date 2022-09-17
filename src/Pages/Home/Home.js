import React from 'react'
import Header from "../../Components/Header/Header"
import Brands from "../../Components/Brands/Brands"
import Activities from "../../Components/Activities/Activities"
import Custom from "../../Components/Custom/Custom"
import Pricing from "../../Components/Pricing/Pricing"
import BMI from "../../Components/BMI/BMI"
import Footer from "../../Components/Footer/Footer"
// import "./Home.scss"
const Home = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <Brands />
                <Activities />
                <Custom />
                <Pricing />
                <BMI />
            </div>
            <Footer />
        </div>
    )
}

export default Home