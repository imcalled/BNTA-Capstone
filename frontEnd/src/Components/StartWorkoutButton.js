import React from 'react';
import './Workout.css';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const StartWorkoutButton = ({workoutId, goWorkout}) => {

    return (
        <>
        <Link to={{ pathname: `/StartWorkoutPage/${workoutId}` }}>
            <button className="start-workout-button" onClick = {()=>goWorkout(workoutId)}>Start Workout</button>
        </Link>
        </>
        
    )

}

export default StartWorkoutButton;