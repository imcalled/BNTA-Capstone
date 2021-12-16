import React from 'react';
import Workout from './Workout';
import { useNavigate } from "react-router-dom";
import WorkoutButton from './WorkoutButton';
import "../Styles/MyWorkoutsPage.css"
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
            <div className="container__button_primary">
            {workoutComponents}

            <Link to={{ pathname:"/NewWorkoutPage"}}><button className="button__primary_alt">Create Custom Workout</button></Link>
            
            <section className="Workout-List">

            </section>
            </div>
        </>
    )
}
export default WorkoutsList;

