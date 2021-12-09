import React from 'react';
import './Workout.css';

const Workout = () => {
    return (
        <div className="all-buttons">
            <div className="button-1">
                <button className="beginner-button"> Preset Workout </button>
            </div>

            <div className="button-2">
                <button className="intermediate-button"> Intermediate Workout </button>
            </div>

            <div className="button-3">
                <button className="advanced-button"> Advanced Workout </button>
            </div>

            <div className="button-4">
                <button className="add-workout-button"> Add Workout </button>
            </div>


        </div>
    )



}

export default Workout;
