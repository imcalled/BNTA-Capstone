import { useState, useEffect } from "react";
import ExerciseDropdownSearch from "../components/ExerciseDropdownSearch";
import ExerciseList from "../components/ExerciseList";

const NewWorkoutContainer = () => {

    const[allExercises, setAllExercises] = useState([]);

    

    const getAllExercises = () => {
        fetch("http://localhost:8080/api/v1/exercises")
            .then(response => response.json())
            .then(data => setAllExercises(data))
    }

    useEffect(getAllExercises, []);

    return (
        allExercises.length > 0
        ?
        <>
        <p>NavBar</p> 
        <p>New Workout Page</p>
        <ExerciseDropdownSearch allExercises = {allExercises}/>
        {/* <ExerciseList allExercises={allExercises}/> */}
        </>
        :
        <p>Loading...</p>
    )
}
export default NewWorkoutContainer;