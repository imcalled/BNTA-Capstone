import Workout from "../components/Workout"
import { useState, useEffect } from "react";
import { useParams } from "react-router";

const WorkoutPage = (props) => {

    const {id} = useParams();
    const [exerciseTargets,setExerciseTargets] = useState([]);
    const [exercises,setExercises] = useState([])

    const getExerciseTargetsOfWorkout = () => {
        fetch(`http://localhost:8080/api/v1/exerciseTargets/workout/id/${id}`)
        .then(response => response.json())
        .then(data => setExerciseTargets(data))
    }

    useEffect(getExerciseTargetsOfWorkout, []);

    const getExercisesById = () => {
        fetch(`http://localhost:8080/api/v1/exercises`)
        .then(response => response.json())
        .then(data => setExercises(data))
    }

    useEffect(getExercisesById, []);

    return(
        <>
        <div className="preset-beginner-title">
            <h1>Preset Beginner</h1>
        </div>

        <div>
            <Workout exerciseTargets = {exerciseTargets} exercises = {exercises}/>
        </div>

        
        {/* {exerciseTargets.map(exerciseTarget => <div>{exerciseTarget.exercise_Id}</div>)} */}
        </>
    )

}

export default WorkoutPage;