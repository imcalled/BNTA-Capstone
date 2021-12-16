import React from 'react';
import './Workout.css';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import playIcon from "../Icons/play-512.png"

const StartWorkoutButton = ({workoutId, goWorkout}) => {
    
    const [exerciseTargets,setExerciseTargets] = useState([])

    const getExerciseTargets = () =>{

    }
    return (
        <>
        <Link to={{ pathname: `/StartWorkoutPage/${workoutId}` }}>
        {/* <div className="all-buttons"> */}
            {/* currentExercise === exercises.length ? */}
            <button className="start-workout-button" onClick = {()=>goWorkout(workoutId)}><img src={playIcon} alt="a play icon" className="start-workout-icon" align="center"/>Start Workout</button>
            {/* : */}


            {/* <div className="button-1">
                <button onClick = {getExerciseTargets(id)} className="beginner-button"> Beginner Workout </button>
            </div> */}
        {/* </div> */}
        </Link>
        </>
        
    )



}

export default StartWorkoutButton;