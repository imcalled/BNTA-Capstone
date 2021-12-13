import { useState, useEffect } from "react";
import ExerciseDropdownSearch from "../components/ExerciseDropdownSearch";
import ExerciseList from "../components/ExerciseList";
import Exercise from "../components/Exercise";
import NewWorkoutExerciseDropdownSearch from "../components/NewWorkoutExerciseDropdownSearch"
import NewWorkoutExerciseList from "../components/NewWorkoutExerciseList";

const NewWorkoutContainer = () => {

    const[allExercises, setAllExercises] = useState([]);
    const [dropSelect, setDropSelect] = useState(null);
    const [selectedExercise, setSelectedExercise] = useState(null);

    const onSubmit = (event) => {
        if(dropSelect) {
            fetch(`http://localhost:8080/api/v1/exercises/id/${dropSelect}`)
            .then(response => response.json())
            .then(data => setSelectedExercise(data));
        }
        //get current id in drop select
        // getExerciseTargetById;
        //display selected exercise in table
        // console.log("selected: ", dropSelect);
        event.preventDefault();
    };

    // const getExerciseTargetById = (dropSelect) => {
        // if(dropSelect) {
        //     fetch(`http://localhost:8080/api/v1/data/${dropSelect}`)
        //     .then(response => response.json())
        //     .then(data => setSelectedExercise(data));
        // }
    // }

    // useEffect(getExerciseTargetById, [dropSelect]);

    const updateDrop=(event) => {
        setDropSelect(event.target.value);
    }
    
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
            <NewWorkoutExerciseDropdownSearch allExercises = {allExercises} updateDrop={updateDrop} onSubmit={onSubmit}/>
            <NewWorkoutExerciseList selectedExercise = {selectedExercise} />
        {/* <ExerciseList allExercises={allExercises}/> */}
        </>
        :
        <p>Loading...</p>
    )
}
export default NewWorkoutContainer;