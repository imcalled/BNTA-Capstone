import React from 'react'

const ExerciseCard = ({exercise}) => {
    switch(exercise.exerciseType)
    {
        case "CALISTHENICS":
            return(
            <>
            <p>{exercise.name}</p>
            <p>Sets: {exercise.targetReps}</p>
            <p>Reps: {exercise.targetSets}</p>
            </>
            )
        case "WEIGHTS":
            return(
            <>
            <p>{exercise.name}</p>
            <p>Sets: {exercise.targetSets}</p>
            <p>Reps: {exercise.targetReps}</p>
            <p>Weights: {exercise.targetWeights}</p>
            </>
            )
        case "CARDIO":
            return(
            <>
            <p>{exercise.name}</p>
            <p>Distance: {exercise.targetDistance}</p>
            <p>Time: {exercise.targetTime}</p>
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
