import React from 'react';
import './Workout.css';
import Exercise from './Exercise';
import ExerciseTarget from './ExerciseTarget';

const Workout = ({exerciseTargets, exercises}) => {


    //from exerciseTarget get exerciseId, then link to exerciseName in exercises

    //filter exercises by exercise_Id, return exercise.name

    // const mapExerciseTarget = exerciseTargets.map(exerciseTarget => {
    //     exerciseTarget.exercise_Id;
    // });

    const mapExercise = () => exerciseTargets.map(exerciseTarget => {
        exercises.filter(exercise => {
            exercise.includes(exerciseTarget.id)
            return (
                <Exercise exercise={exercise} />
            )
        })
    })
        
    // const mapExercise = exercises.map(exercise => {

    //     // if(exercise.id === exerciseTargets.exercise_Id) {
    //         return(
    //             <Exercise id={exercise.id}/>
    //         )
    //     // }

    // })

    // const filteredExercise = (exercise_Id) => exercises.filter(exercises => {
        
    // })
    // () => {
    //     if (targetExercise.exercise_Id === exercise.id){
    //         return exercises.filter(exercise => {
    //             return exercise.name
    //         })
    //     }
    // }
    
    // const exerciseName = (exerciseTargets, {mapExercise}) => {
    //     if(exerciseTargets.exercise_Id === {mapExercise}) {
    //         return {exercise.name}
    //     }
            

    // }

    
    return (
        <>
        {mapExercise}

        {/* {exerciseName(exerciseTargets, exercises)} 
        {exercises.map(exercise => {if(exercise.id === exerciseName(exerciseTargets)) return <div> {exercise.name} </div>})}
        {exerciseTargets.map(exerciseTarget => <div> Sets {exerciseTarget.sets}</div>)}
        {exerciseTargets.map(exerciseTarget => <div> Reps {exerciseTarget.reps}</div>)}
        {exerciseTargets.map(exerciseTarget => <div> Time {exerciseTarget.time}</div>)}
        {exerciseTargets.map(exerciseTarget => <div> Distance {exerciseTarget.distance}</div>)}
        {exerciseTargets.map(exerciseTarget => <div> Weight {exerciseTarget.weight}</div>)} */}
        </>
    )
}


export default Workout;
