import React from 'react';
import { Link } from 'react-router-dom';
import "./ExerciseCard.scss"
const ExerciseCard = ({ exercise }) => (
    <div className="ExerciseCard">
        <Link to={`/ExerciseDetails/${exercise.id}`}>
            <img src={exercise.gifUrl} alt={exercise.name} />
            <div className="ExerciseButtons">
                <button >{exercise.bodyPart} </button>
                <button >{exercise.target} </button>
            </div>
            <p> {exercise.name}</p>
        </Link>
    </div>
);

export default ExerciseCard;
