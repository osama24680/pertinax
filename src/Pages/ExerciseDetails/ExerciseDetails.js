import React, { useState, useEffect } from 'react'
import "./ExerciseDetails.scss"
import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"
import ExerciseCard from "../../Components/ExerciseCard/ExerciseCard"

import { exerciseOptions, fetchData, youtubeOptions } from "../../Components/Utils/fetchData";
import BodyPartImage from '../../assets/icons/body-part.png';
import TargetImage from '../../assets/icons/target.png';
import EquipmentImage from '../../assets/icons/equipment.png';
import { useParams } from 'react-router-dom'
const ExerciseDetails = () => {

    const [exercise, setExercise] = useState({});
    const [exerciseVideos, setExerciseVideos] = useState([]);
    const [similarExercises, setSimilarExercises] = useState([]);

    let { id } = useParams()
    console.log(id)
    async function getExercise() {
        window.scrollTo(0, 0);
        const exercisesDataObject = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, exerciseOptions);
        setExercise(exercisesDataObject)

        const exerciseVideosArray = await fetchData(`https://youtube-search-and-download.p.rapidapi.com/search?query=${exercisesDataObject.name} exercise`, youtubeOptions);
        setExerciseVideos(exerciseVideosArray.contents);

        const similarExercisesArray = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/target/${exercisesDataObject.target}`, exerciseOptions);
        setSimilarExercises(similarExercisesArray);
    }

    const extraDetail = [
        {
            icon: BodyPartImage,
            name: exercise.bodyPart,
        },
        {
            icon: TargetImage,
            name: exercise.target,
        },
        {
            icon: EquipmentImage,
            name: exercise.equipment,
        },
    ];

    useEffect(() => {
        // getExercise()
    }, [id])
    return (
        <>
            <Navbar />
            <div className="ExerciseDetails">
                <h2>Exercise: <span>{exercise.name}</span></h2>
                <div className="muscle__section">
                    <div className="muscle__section-img">
                        <img src={exercise.gifUrl} alt="" />
                    </div>
                    <div className="muscle__section-data">
                        {extraDetail.map(item => (
                            <div>
                                <img src={item.icon} alt="" />
                                <p>{item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <h2>Watch exercise videos for: <span>{exercise.name}</span></h2>
                <div className="videos__section">
                    {exerciseVideos.slice(0, 6).map((item, index) => (
                        <a
                            href={`https://www.youtube.com/watch?v=${item.video.videoId}ّ`}
                            rel="noreferrer"
                            key={index}
                            target="_blank"
                        >
                            <img src={item.video.thumbnails[0].url} alt="" />
                            <p> {item.video.title}</p>
                        </a>
                    ))}
                </div>
                <h2>Similar exercise for: <span>{exercise.name}</span></h2>
                <div className="similar__section">
                    {similarExercises.slice(0, 6).map((similar, index) => (
                        <ExerciseCard exercise={similar} key={index} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ExerciseDetails
