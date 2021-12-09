import React from 'react';
import './Workout.css';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Workout = ({exerciseTargets}) => {
    
    return (
        <>
        <p>Hello I am here</p>
        <p>{exerciseTargets}</p>
        {exerciseTargets.map(exerciseTarget => <div>{exerciseTarget.exercise_Id}</div>)}
        {exerciseTargets.map(exerciseTarget => <div>{exerciseTarget.workout_Id}</div>)}
        </>
    )

}


export default Workout;
