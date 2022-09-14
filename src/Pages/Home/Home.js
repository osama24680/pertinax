import React from 'react'
import Header from "../../Components/Header/Header"
import Brands from "../../Components/Brands/Brands"
import Activities from "../../Components/Activities/Activities"
import Custom from "../../Components/Custom/Custom"
// import "./Home.scss"
const Home = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <Brands />
                <Activities />
                <Custom />
            </div>

        </div>
    )
}

export default Home