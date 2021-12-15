import '../components/WorkoutComponents/StartWorkoutPage.css';
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ExerciseCard from '../components/ExerciseCard';
import RecordForm from '../components/WorkoutComponents/RecordForm';
import Timer from '../components/WorkoutComponents/Timer';
import '../components/WorkoutComponents/StartWorkoutPage.css';
import Slider from '@mui/material/Slider';

const StartWorkoutPage = () => {
    const {id} = useParams();
    const [exercisesOfWorkout, setExercisesOfWorkout] = useState([]);
    const [exercise, setExercise] = useState([]);
    // const [currentExercise, setCurrentExercise] = useState([]);
    const [nextExercise, setNextExercise] = useState(0);
    // const {initialMinute} = 0
    // const {initialSeconds} = 0

    let exerciseCount = 0;

    const getAllExercisesByWorkoutId = () => {
        fetch(`http://localhost:8080/api/v1/exercises/workout/id/${id}`)
        .then(response => response.json())
        .then(data => setExercisesOfWorkout(data))
    }
    
    useEffect(getAllExercisesByWorkoutId, []);

    const getExerciseByWorkoutId = () => {
        fetch(`http://localhost:8080/api/v1/exercises/workout/id/${id}`)
        .then(response => response.json())
        .then(data => setExercise(data[nextExercise]))
    }

    useEffect(getExerciseByWorkoutId, [nextExercise]);

    const counter = () => {

        if(nextExercise < exercisesOfWorkout.length-1) {
            setNextExercise(nextExercise + 1);
        }
        console.log(nextExercise)
    };
    // construct a new object from exercisedp

    const onAddExerciseDataPoint = (newExerciseDataPoint) => {
        // const new object = create object that matches backend, map the object 
    fetch("http://localhost:8080/api/v1/data/record", {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newExerciseDataPoint)
    })
    .then(data => console.log(data))
}


    return(
        <>
            <div className="preset-beginner-title">
                <h1>Workout Routine:</h1>
                <div className="slider-container">
                <div className="slider">
                <Slider
        defaultValue={1}
        step={1}
        marks
        min={1}
        max={exercisesOfWorkout.length}
        valueLabelDisplay="auto"
      />
      </div>
      </div>
            </div>

            <div className="start-workout-page-container">

                <div className="beginner-current-exercise">
                    <h1>Current Exercise</h1>
                    <ExerciseCard exercise={exercise} />
                </div>

                <div>
                    <RecordForm exercise={exercise} onAddExerciseDataPoint = {onAddExerciseDataPoint}/>
                </div>

                <div>
                    <Timer/>
                </div>

            </div>


            <button className = "next-workout-button" onClick={counter}>Next Workout</button>

        </>
    )

}

export default StartWorkoutPage;