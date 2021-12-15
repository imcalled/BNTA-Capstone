import React from 'react';
import Workout from './Workout';
import { useNavigate } from "react-router-dom";
import WorkoutButton from './WorkoutButton';
import { Link } from "react-router-dom";

const WorkoutsList= ({workouts}) => {
    let navigate = useNavigate()

    const goWorkout = (id) =>{
        navigate("/WorkoutPage")
    }

    const workoutComponents = workouts.map(workout => {
        return(
            <WorkoutButton workout={workout} goWorkout={goWorkout}/>
            
        )
    })

    return (
        <>
            <h1>
            My workouts
            </h1>

            {workoutComponents}

            <Link to={{ pathname:"/NewWorkoutPage"}}><button className="advanced-button">Create Custom Workout</button></Link>
            
            <section className="Workout-List">

            </section>
        </>
    )
}
export default WorkoutsList;

