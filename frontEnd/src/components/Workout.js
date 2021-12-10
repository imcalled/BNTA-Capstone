import React from 'react';
import './Workout.css';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Workout = ({exerciseTargets, exercises}) => {

    const exerciseName = (exerciseTargets, exercises) => {
        if(exerciseTargets.exercise_Id === exercises.id) {
            return exercises.map(exercise => <div> Id {exercise.name}</div>)
        }
    }
    
    return (
        <>
        <div> {exerciseName} </div>

        {exerciseTargets.map(exerciseTarget => <div> {exerciseName} </div>)}
        {exerciseTargets.map(exerciseTarget => <div> Sets {exerciseTarget.sets}</div>)}
        {exerciseTargets.map(exerciseTarget => <div> Reps {exerciseTarget.reps}</div>)}
        {exerciseTargets.map(exerciseTarget => <div> Time {exerciseTarget.time}</div>)}
        {exerciseTargets.map(exerciseTarget => <div> Distance {exerciseTarget.distance}</div>)}
        {exerciseTargets.map(exerciseTarget => <div> Weight {exerciseTarget.weight}</div>)}
        </>
    )
}


export default Workout;
