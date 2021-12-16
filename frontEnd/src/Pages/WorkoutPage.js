import Workout from "../components/Workout"
import { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router";
import StartWorkoutButton from "../components/StartWorkoutButton";
import { useNavigate } from "react-router-dom";
import "../components/Workout.css"
import EditWorkoutButton from "../components/EditWorkoutButton";
import "../Styles/MyWorkoutsPage.css"

const WorkoutPage = () => {

    const {id} = useParams();
    const [exercises,setExercises] = useState([])
    const [name,setName] = useState([])



    const getExercisesByWorkoutId = () => {
        fetch(`http://localhost:8080/api/v1/exercises/workout/id/${id}`)
        .then(response => response.json())
        .then(data => setExercises(data))
    }

    const getWorkoutName = () => {
        fetch(`http://localhost:8080/api/v1/workout/id/${id}`)
        .then(response => response.json())
        .then(data => setName(data.name))
    }

    useEffect(getExercisesByWorkoutId, []);
    useEffect(getWorkoutName, []);

    let navigate = useNavigate();

    const goWorkout = () => {
        navigate("/StartWorkoutPage")
    }

    const editWorkout = () => {
        navigate("/EditWorkoutPage")
    }

    return(
        <>
            <h1 className="pageTitle">Workout Routine: {name}</h1>


        <div className="preset-beginner-exercises">
            <Workout exercises = {exercises}/>
        </div>

        <div className="start-workout-wrapper">
            <EditWorkoutButton workoutId={id} editWorkout={editWorkout}/>
            <StartWorkoutButton workoutId={id} goWorkout={goWorkout}/>
            
        </div>

        
        {/* {exerciseTargets.map(exerciseTarget => <div>{exerciseTarget.exercise_Id}</div>)} */}
        </>
    )

}

export default WorkoutPage;