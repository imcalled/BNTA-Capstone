import React from 'react';
import './Workout.css';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const StartWorkoutButton = ({workoutId, goWorkout}) => {
    
    const [exerciseTargets,setExerciseTargets] = useState([])

    
    const getExerciseTargets = () =>{

    }
    return (
        <>
        <Link to={{ pathname: `/StartWorkoutPage/${workoutId}` }}>
        {/* <div className="all-buttons"> */}
            
            <button onClick = {()=>goWorkout(workoutId)}>Go to this workout</button>

            {/* <div className="button-1">
                <button onClick = {getExerciseTargets(id)} className="beginner-button"> Beginner Workout </button>
            </div> */}
        {/* </div> */}
        </Link>
        </>
        
    )



}

export default StartWorkoutButton;