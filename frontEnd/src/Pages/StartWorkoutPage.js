import '../Components/WorkoutComponents/StartWorkoutPage.css';
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import CurrentExercise from "../Components/WorkoutComponents/CurrentExercise";
import ExerciseCard from '../Components/ExerciseCard';
import RecordForm from '../Components/WorkoutComponents/RecordForm';
import Timer from '../Components/WorkoutComponents/Timer';

const StartWorkoutPage = () => {

    const {id} = useParams();
    const [exercises,setExercises] = useState([]);
    const [currentExercise, setCurrentExercise] = useState([]);
    const [nextExercise, setNextExercise] = useState(0);
    const {initialMinute} = 0
    const {initialSeconds} = 0

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




    return(
        <>
            <div className="preset-beginner-title">
                <h1>Preset Beginner</h1>
            </div>

            <div className="start-workout-page-container">
                

                <div className="beginner-current-exercise">
                    <h1>Current Exercise</h1>
                    <ExerciseCard exercise={exercises} />
                </div>

                <div>
                    <RecordForm />
                </div>

                <div>
                    <Timer/>
                </div>

            </div>


            <button onClick={counter}>Next Workout</button>

        </>
    )

}

export default StartWorkoutPage;