import React from 'react';
import './Workout.css';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const WorkoutButton = ({workout, goWorkout}) => {
    
    const [exerciseTargets,setExerciseTargets] = useState([])

    
    const getExerciseTargets = () =>{

    }
    return (
        <>
        <Link to={{ pathname: `/WorkoutPage/${workout.id}` }}>
        {/* <div className="all-buttons"> */}
            
            <button class = "workout-routine-button" onClick = {()=>goWorkout(workout.id)}>{workout.name}</button>

            {/* <div className="button-1">
                <button onClick = {getExerciseTargets(id)} className="beginner-button"> Beginner Workout </button>
            </div> */}
        {/* </div> */}
        </Link>
        </>
        
    )



}

export default WorkoutButton;
