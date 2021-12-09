import Workout from "../components/Workout"
import { useState, useEffect } from "react";
import { useParams } from "react-router";

const WorkoutPage = (props) => {

    const {id} = useParams();
    const [exerciseTargets,setExerciseTargets] = useState([])

    const getExerciseTargetsOfWorkout = () => {
        fetch(`http://localhost:8080/api/v1/exerciseTargets/workout/id/${id}`)
        .then(response => response.json())
        .then(data => setExerciseTargets(data))
    }

    useEffect(getExerciseTargetsOfWorkout, []);

    return(
        <>
        <Workout exerciseTargets = {exerciseTargets}/>
        
        {/* {exerciseTargets.map(exerciseTarget => <div>{exerciseTarget.exercise_Id}</div>)} */}
        </>
    )

}

export default WorkoutPage;