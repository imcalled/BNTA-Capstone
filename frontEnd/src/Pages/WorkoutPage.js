import Workout from "../components/Workout"
import { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router";
import StartWorkoutButton from "../components/StartWorkoutButton";
import { useNavigate } from "react-router-dom";
import "../components/Workout.css"
import EditWorkoutButton from "../components/EditWorkoutButton";

const WorkoutPage = () => {

    const {id} = useParams();
    const [exercises,setExercises] = useState([])



    const getExercisesByWorkoutId = () => {
        fetch(`http://localhost:8080/api/v1/exercises/workout/id/${id}`)
        .then(response => response.json())
        .then(data => setExercises(data))
    }

    useEffect(getExercisesByWorkoutId, []);

    let navigate = useNavigate();

    const goWorkout = () => {
        navigate("/StartWorkoutPage")
    }

    const editWorkout = () => {
        navigate("/EditWorkoutPage")
    }

    return(
        <>
        <div className="preset-beginner-title">
            <h1>Workout Routine:</h1>
        </div>

        <div className="preset-beginner-exercises">
            <Workout exercises = {exercises}/>
        </div>

        <div className="start-workout-wrapper">
            <StartWorkoutButton workoutId={id} goWorkout={goWorkout}/>
            <EditWorkoutButton workoutId={id} editWorkout={editWorkout}/>
        </div>

        
        {/* {exerciseTargets.map(exerciseTarget => <div>{exerciseTarget.exercise_Id}</div>)} */}
        </>
    )

}

export default WorkoutPage;