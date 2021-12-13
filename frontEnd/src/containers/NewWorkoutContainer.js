import { useState, useEffect } from "react";
import ExerciseDropdownSearch from "../components/ExerciseDropdownSearch";
import ExerciseList from "../components/ExerciseList";
import ExerciseCard from "../components/ExerciseCard";
const NewWorkoutContainer = () => {
    
    const[allExercises, setAllExercises] = useState([]);
    const [selectedExercise, setSelectedExercise] = useState(null);
    const [DropSelect, setDropSelect]=useState(null);

    const getSelectedExercise =()=>{
        if(DropSelect){
        fetch(`http://localhost:8080/api/v1/exercises/id/${DropSelect}`)
        .then(response => response.json())
        .then(data => setSelectedExercise(data));
        console.log(selectedExercise);
        }
    }

    useEffect(getSelectedExercise, [DropSelect]);


    const updateDrop=(event) => {
        setDropSelect(event.target.value);
    }

    const getAllExercises = () => {
        fetch("http://localhost:8080/api/v1/exercises")
            .then(response => response.json())
            .then(data => setAllExercises(data))
    }

    useEffect(getAllExercises, []);

    const x = ()=> {    if(selectedExercise){
        <ExerciseCard exercise={selectedExercise}/>}
        else{<p>loading...</p>}
    }

    return (
        allExercises.length > 0
        ?
        <>
        <p>NavBar</p> 
        <p>New Workout Page</p>
        <ExerciseDropdownSearch allExercises = {allExercises} updateDrop={updateDrop}/>
        {x}

        {/* <ExerciseList allExercises={allExercises}/> */}
        </>
        :
        <p>Loading...</p>
    )
}
export default NewWorkoutContainer;