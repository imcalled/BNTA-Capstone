import '../components/WorkoutComponents/StartWorkoutPage.css';
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ExerciseCard from '../components/ExerciseCard';
import RecordForm from '../components/WorkoutComponents/RecordForm';
import Timer from '../components/WorkoutComponents/Timer';
import '../components/WorkoutComponents/StartWorkoutPage.css'

const StartWorkoutPage = () => {
    const {id} = useParams();
    const [exercises,setExercises] = useState([]);
    // const [currentExercise, setCurrentExercise] = useState([]);
    const [nextExercise, setNextExercise] = useState(0);
    // const {initialMinute} = 0
    // const {initialSeconds} = 0

    let exerciseCount = 0;

    const getExercisesByWorkoutId = () => {
        fetch(`http://localhost:8080/api/v1/exercises/workout/id/${id}`)
        .then(response => response.json())
        .then(data => setExercises(data[nextExercise]))
    }

    useEffect(getExercisesByWorkoutId, [nextExercise]);

    const counter = () => {

        if(nextExercise < 2) {
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
            </div>

            <div className="start-workout-page-container">
                

                <div className="beginner-current-exercise">
                    <h1>Current Exercise</h1>
                    <ExerciseCard exercise={exercises} />
                </div>

                <div>
                    <RecordForm exercise={exercises} onAddExerciseDataPoint = {onAddExerciseDataPoint}/>
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