import React, { useState } from 'react'
import "./BMI.scss"
import HeadingText from '../HeadingText/HeadingText'
import calcImg from "../../assets/calculate-img.png"
const BMI = () => {
    const [getHeight, setGetHeight] = useState(0)
    const [getWeight, setGetWeight] = useState(0)
    const [BMI_Value, set_BMI_Value] = useState(".....")

    function handleBMI(e) {
        e.preventDefault()
        const height = getHeight / 100;
        const weight = getWeight;
        const calculated_BMI = (weight / (height * height))
        set_BMI_Value(calculated_BMI.toFixed(2))
    }
    return (
        <div className="BMI">
            <div className="BMI__leftSide">
                <HeadingText shadowText="Calculate" whiteText="Your BMI"></HeadingText>
                <p>The body mass index (BMI) calculator calculates
                    body mass index from your weight and height.</p>
                <form onSubmit={handleBMI}>
                    <div className="inputs">
                        <div className="Forminput">
                            <input type="number" placeholder="Height" onChange={(e) => setGetHeight(e.target.value)} />
                            <p>cm</p>
                        </div>
                        <div className="Forminput">
                            <input type="number" placeholder="Weight" onChange={(e) => setGetWeight(e.target.value)} />
                            <p>kg</p>
                        </div>
                    </div>

                    <button>Calculate Now</button>
                    <h3>{BMI_Value}</h3>
                </form>
            </div>
            <div className="BMI__rightSide">
                <img src={calcImg} alt=" " />
            </div>

        </div>
    )
}

export default BMI
