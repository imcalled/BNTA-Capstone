import React from 'react';
import './StartWorkoutPage.css';

const CurrentExercise = ({currentExercise}) => {


    return (
        <div className ="beginner-current-exercise">
            <p className="beginner-current-exercise-name">{currentExercise.name}</p>
            <p>Distance: {currentExercise.targetDistance} m </p>
            <p>Time: {currentExercise.targetTime}</p>
        </div>
    )
}

export default CurrentExercise;