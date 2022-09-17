import React, { useState, useEffect } from 'react'
import "./Trainings.scss"
import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { exerciseOptions, fetchData } from "../../Components/Utils/fetchData";
import gym from "../../assets/gym3.png"
import Muscles from '../../Components/Muscles/Muscles';
const Trainings = () => {
    const [bodyCategory, setBodyCategory] = useState('all');
    const [search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState([]);

    const fetchExercisesData = async () => {
        const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
        setBodyParts(['all', ...bodyPartsData]);
        window.scrollTo(0, 0);
    };


    useEffect(() => {
        // fetchExercisesData();
    }, [])


    const responsive = {
        0: {
            items: 2,
        },
        512: {
            items: 3,
        },
        1024: {
            items: 5,
        },
    };

    const handleDragStart = (e) => e.preventDefault();
    const items = bodyParts.map((part) => (
        <div className="carouselItem" onClick={() => setBodyCategory(part)}>
            <img src={gym} alt={bodyParts} onDragStart={handleDragStart} />
            <p>{part}</p>
        </div>
    ))

    return (
        <>
            <Navbar />
            <div className="Trainings">
                <h2>Make Your Own Exercises</h2>
                <div className="searchExercies">
                    <input type="text" placeholder="search by muscle or equipment" onChange={(e) => setSearch(e.target.value.toLowerCase())} />
                    <button>Search</button>
                </div>

                <div className="AliceCarouselDiv">
                    <AliceCarousel
                        mouseTracking
                        infinite
                        disableDotsControls
                        disableButtonsControls
                        responsive={responsive}
                        items={items}
                        autoPlay
                    />
                </div>
                <h3>Trainings</h3>
                <Muscles bodyCategory={bodyCategory} search={search} />
            </div>
            <Footer />
        </>

    )
}

export default Trainings
