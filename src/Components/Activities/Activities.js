import React from 'react'
import "./Activities.scss"
import dumbbel from "../../assets/activities/dumbbel.png"
import yoga from "../../assets/activities/yoga.png"
import cardio from "../../assets/activities/cardio.png"
import HeadingText from "../HeadingText/HeadingText"
const Activities = () => {
    return (
        <div className="activities">
            <HeadingText greenText={"Our Activities"} shadowText={"Build Your"} whiteText={"Best Body"} />
            <div className="activity_types">
                <div className="type">
                    <div> <img src={dumbbel} alt="" /></div>
                    <h4>Flex Muscles</h4>
                    <p>Creating tension that's temporarily making the muscle
                        fibers smaller or contracted.
                    </p>
                </div>
                <div className="type">
                    <div> <img src={cardio} alt="" /></div>
                    <h4>Cardio Exercise</h4>
                    <p>Exercise your heart rate up and keeps it
                        up for a prolonged period of time.
                    </p>
                </div>
                <div className="type">
                    <div> <img src={yoga} alt="" /></div>
                    <h4>Basic Yoga</h4>
                    <p>Diaphragmatic this is the most common breathing
                        technique you'll find in yoga.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Activities