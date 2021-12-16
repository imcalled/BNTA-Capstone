import '../components/WorkoutComponents/StartWorkoutPage.css';
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ExerciseCard from '../components/ExerciseCard';
import RecordForm from '../components/WorkoutComponents/RecordForm';
import Timer from '../components/WorkoutComponents/Timer';
import '../components/WorkoutComponents/StartWorkoutPage.css';
import Slider from '@mui/material/Slider';
import FinishedWorkoutModal from '../components/WorkoutComponents/FinishedWorkoutModal';

const StartWorkoutPage = () => {
    const {id} = useParams();
    const [exercisesOfWorkout, setExercisesOfWorkout] = useState([]);
    const [exercise, setExercise] = useState([]);
    const [nextExercise, setNextExercise] = useState(0);
    const [finishWorkout, setFinishWorkout] = useState("Next Exercise");
    const [modal, setModal] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);



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

    const resetTimer = () => {
        setSeconds(0);
        setIsActive(false);

    }

    useEffect(getExerciseByWorkoutId, [nextExercise]);


    // const reset = () => {
    //     setSeconds(0);
    //     setIsActive(false);
    // }

    const counter = () => {


        if(nextExercise < exercisesOfWorkout.length-1) {
            setNextExercise(nextExercise + 1);
        }

        if(nextExercise === exercisesOfWorkout.length - 2) {
            changeText("Finish Workout")
        }
        if(nextExercise === exercisesOfWorkout.length - 1) {
            setModal(true)
        }

        console.log(nextExercise)
        setSeconds(0);
        setIsActive(true);
        
    };
    
    useEffect(resetTimer,[counter])
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

    const nextButton = <button className="finish-workout-button"onClick={counter}>{finishWorkout}</button> 

    const changeText = (text) => {
        setFinishWorkout(text)
    }


    return(
        <>
            <div className="preset-beginner-title">
                <h1>Workout Routine:</h1>
                <div className="slider-container">
                <div className="slider">
                <Slider
        defaultValue={1}
        value={nextExercise+1}
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
                        <h1 className="beginner-current-exercise-title">Current Exercise</h1>
                        <ExerciseCard exercise={exercise} />
                    </div>

                    <div>
                        <RecordForm exercise={exercise} onAddExerciseDataPoint = {onAddExerciseDataPoint}/>
                    </div>    

                    <div className="rest-timer-wrapper">
                        <h1 className="rest-timer-title"></h1>
                        <Timer/>
                    </div>

            </div>


            <div className="finish-workout-button-wrapper">
                {nextButton}
                {modal && <FinishedWorkoutModal close={setModal}/>}
            </div>
        
        </>
    )

}


export default StartWorkoutPage;