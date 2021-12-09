import { useState, useEffect } from "react";
import ExerciseDropdownSearch from "../components/ExercisesDropdown";

const NewWorkoutContainer = () => {

    const[allExercises, setAllExercises] = useState([]);

    const getAllExercises = () => {
        fetch("https://localhost:3000/api/v1/exercises")
            .then(response => response.json)
            .then(data => setAllExercises(data))
    }

    return (
        <>
        <p>NavBar</p> 
        <p>New Workout Page</p>
        <ExerciseDropdownSearch allExercises = {allExercises}/>
        </>
    )
}
export default NewWorkoutContainer;