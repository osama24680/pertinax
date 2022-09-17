import React from 'react'
import productImg from "../../assets/product-img.png"
import dumbbel from "../../assets/products/dumbbel.png"
import shoes from "../../assets/products/shoes.png"
import tshirt from "../../assets/products/tshirt.png"
import whey from "../../assets/products/whey.png"
import "././Custom.scss"
const Custom = () => {
    return (
        <div className="Custom">
            <div className="Custom__leftSide">
                <img src={productImg} alt="" />
                <div className="Custom__leftSide-triangle"></div>
            </div>
            <div className="Custom__rightSide">
                <div className="Custom__rightSide-product">
                    <img src={tshirt} alt="" />
                    <button>See All</button>
                </div>
                <div className="Custom__rightSide-product">
                    <img src={dumbbel} alt="" />
                    <button>See All</button>
                </div>
                <div className="Custom__rightSide-product">
                    <img src={whey} alt="" />
                    <button>See All</button>
                </div>
                <div className="Custom__rightSide-product">
                    <img src={shoes} alt="" />
                    <button>See All</button>
                </div>
            </div>

        </div>
    )
}

export default Custom