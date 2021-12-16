import React from 'react';
import cardio from '../Icons/cardio.png';
import calisthenic from '../Icons/back-lever.png';
import weight from '../Icons/dumbbell.png';

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
                <img className = 'weight-image' src = "https://www.vippng.com/png/detail/55-554509_dumbbells-clipart-svg-gym-weight-icon-png.png" />
                <div className="weights-workout-container">
                    <p className="weights-workout-name">{exercise.name}</p>
                    <div className="cardio-workout-targets">
                        <p id = "weights-workout-sets">Sets: {exercise.targetSets}</p>
                        <p id = "weights-workout-reps"> Reps: {exercise.targetReps}</p>
                        <p id = "weights-workout-weights">Weight: {exercise.targetWeight}kg</p>
                 </div>
                </div>
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
                            <p id="cardio-workout-distance">Distance: {exercise.targetDistance}m</p>
                            <p id="cardio-workout-time">Time: {exercise.targetTime}mins</p>
                        </div>
                    </div>
                </div>
            </>
            )
        default: console.log("Unmatched exercise type")
    }

    return (
        <>
            <h1 className="beginner-current-exercise-title">Current Exercise</h1>
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
