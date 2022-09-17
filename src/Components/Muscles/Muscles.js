import React, { useEffect, useState } from 'react'
import "./Muscles.scss"
import { exerciseOptions, fetchData } from "../Utils/fetchData";
import Loader from "../Loader/Loader";
import ExerciseCard from "../ExerciseCard/ExerciseCard";
import Pagination from '@mui/material/Pagination';

const Muscles = ({ bodyCategory, search }) => {

    const [exercises, setExercises] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    let exercisesPerPage = 12

    const fetchExercisesData = async () => {
       
        let exercisesDataArray = [];
        if (bodyCategory === 'all') {
            exercisesDataArray = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
        } else {
            exercisesDataArray = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyCategory}`, exerciseOptions);
        }
        setExercises(exercisesDataArray);
    };

    async function handleSearch() {
        window.scrollTo(0, 0);
        const exercisesDataArray = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
        const searchedExercises =exercisesDataArray.filter(item=>(
            item.name.toLowerCase().includes(search) ||
            item.target.toLowerCase().includes(search) ||
            item.equipment.toLowerCase().includes(search) ||
            item.bodyPart.toLowerCase().includes(search) 
        ))
        setExercises(searchedExercises)
    }

    useEffect(() => {
        // fetchExercisesData();
    }, [bodyCategory]);

    useEffect(() => {
        // handleSearch()
    }, [search]);

    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);


    const paginate = (event, value) => {
        setCurrentPage(value);

        window.scrollTo({ top: 200, behavior: 'smooth' });
    };

    if (!currentExercises.length) return <Loader />;

    return (
        <div className='muscles'>
            <div className="currentExercisesClass">
                {currentExercises.map((exercise, index) => (
                    <ExerciseCard key={index} exercise={exercise} />
                ))}
            </div>

            <div className="materialPagination">
                {exercises.length > 9 && (
                    <Pagination
                        color="success"
                        shape="rounded"
                        defaultPage={1}
                        count={Math.ceil(exercises.length / exercisesPerPage)}
                        page={currentPage}
                        onChange={paginate}
                        size="large"
                        variant="outlined"
                    />
                )}
            </div>
        </div>
    )
}

export default Muscles
