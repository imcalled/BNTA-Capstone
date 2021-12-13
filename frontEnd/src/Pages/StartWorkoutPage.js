import Workout from "../Components/Workout"
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import CurrentExercise from "../Components/WorkoutComponents/CurrentExercise";

const StartWorkoutPage = () => {

    const {id} = useParams();
    const [exercises,setExercises] = useState([]);
    const [currentExercise, setCurrentExercise] = useState([]);

    const getExercisesByWorkoutId = () => {
        fetch(`http://localhost:8080/api/v1/exercises/workout/id/${id}`)
        .then(response => response.json())
        .then(data => setExercises(data))

        .then(data => console.log(data))
    }

    useEffect(getExercisesByWorkoutId, []);

    const nextExercise = () => {

        setCurrentExercise(exercises[0])

    };

    useEffect(nextExercise, []);

    return(
        <>
        <div className="preset-beginner-title">
            <h1>Preset Beginner</h1>
        </div>

        <div>
            <CurrentExercise currentExercise={exercises[0]}/>
        </div>
        {/* {exerciseTargets.map(exerciseTarget => <div>{exerciseTarget.exercise_Id}</div>)} */}
        </>
    )

}

export default StartWorkoutPage;