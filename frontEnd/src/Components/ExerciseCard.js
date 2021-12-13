import React from 'react';
import cardio from '../Icons/cardio.png';
import calisthenic from '../Icons/back-lever.png';

const ExerciseCard = ({exercise}) => {
    switch(exercise.exerciseType)
    {
        case "CALISTHENICS":
            return(
            <>
                <div className="calisthenics-workout">
                    <img className="calisthenics-image" src={calisthenic} />
                    
                    <div className="calisthenics-workout-container">
                        <p className="calisthenics-workout-name">{exercise.name}</p>

                    <div className="calisthenics-workout-targets">
                        <p>Sets: {exercise.targetReps}</p>
                        <p>Reps: {exercise.targetSets}</p>
                    </div>
                </div>
            </div>
            </>
            )
        case "WEIGHTS":
            return(
            <div className="weights-workout">
                <p className="weights-workout-name">{exercise.name}</p>
                <p>Sets: {exercise.targetSets}</p>
                <p>Reps: {exercise.targetReps}</p>
                <p>Weights: {exercise.targetWeights}</p>
            </div>
            )
        case "CARDIO":
            return(
            <>
                <div className="cardio-workout">
                    <img className="cardio-image" src={cardio}/>    

                    <div className="cardio-workout-container">
                        <p className="cardio-workout-name">{exercise.name}</p>

                        <div className="cardio-workout-targets">
                            <p id="cardio-workout-distance">Distance: {exercise.targetDistance}</p>
                            <p id="cardio-workout-time">Time: {exercise.targetTime}</p>
                        </div>
                    </div>
                </div>
            </>
            )
        default: console.log("Unmatched exercise type")
    }

    return (
        <>
            {ExerciseCard}


        {/* <p>Time: {exercise.targetTime}</p>
        <p>Distance: {exercise.targetDistance}</p>
        <p>Sets: {exercise.targetSets}</p>
        <p>Reps: {exercise.targetReps}</p>
        <p>Weight: {exercise.targetWeight}</p> */}
        </>

    )
}

export default ExerciseCard;
