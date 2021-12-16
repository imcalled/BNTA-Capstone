import React from 'react'
import { useState, useEffect } from 'react';
import './StartWorkoutPage.css';

const RecordForm = ({exercise, onAddExerciseDataPoint}) => {

    const[sets, setSets] = useState("");
    const[reps, setReps] = useState("");
    const[weights, setWeights] = useState("");
    const[time, setTime] = useState("");
    const[distance, setDistance] = useState("");
    const[date, setDate] = useState("") 

    const handleSetsChange = (event) => {
        setSets(event.target.value);
    }

    const handleDateChange = (event) => {
           setDate(event.target.value)
       } 

    const handleDateChangeToday = () => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2,'0');
        var mm = String(today.getMonth() +1).padStart(2,'0');
        var yyyy = today.getFullYear();

        today = yyyy + '-' + mm + '-' + dd;
        console.log(String(today));
        setDate(String(today));
    }

    const handleRepsChange = (event) => {
        setReps(event.target.value);
    }

    const handleWeightsChange = (event) => {
        setWeights(event.target.value);
    }

    const handleTimeChange = (event) => {
        setTime(event.target.value);
    }

    const handleDistanceChange = (event) => {
        setDistance(event.target.value);
    }

    const handleSubmitTarget = (event) => {
        event.preventDefault();

        const newExerciseDataPoint = {
            "exerciseID": exercise.exercise_Id,
            "name": exercise.name,
            "date": date, 
            "timeAchieved": time,
            "distanceAchieved": distance,
            "setsAchieved": sets,
            "repsAchieved": reps,
            "weightAchieved": weights
        }

        onAddExerciseDataPoint(newExerciseDataPoint);
        setDate("") 
        setSets("");
        setReps("");
        setWeights("");
        setTime("");
        setDistance("");
    }


    //TODO: Enter numbers only!
    //TODO: For weights enter lb/kg
    const displayForm = () => {
        // console.log(exercise);
        if(exercise) {
                switch(exercise.exerciseType) {
                case "CALISTHENICS":
                    // console.log("calisthenics");
                    return (
                    <>
                        <div className="calisthenics-data">
                            
                            <div className="calisthenics-data-container">
                                <p className="calisthenics-data-name">{exercise.name}</p>

                                <div className="calisthenics-data-targets">
                                    <form className="record-form-wrapper"onSubmit={handleSubmitTarget}>
                                        <label>Date:
                                        <div className = "container__date">
                                            <input value={date} type="text" placeholder = "yyyy-mm-dd" onChange={handleDateChange}/>
                                            <button onClick={handleDateChangeToday}>Use Today's Date</button>
                                        </div>
                                        </label>
                                        <label>Sets Achieved:
                                            <input type="text" placeholder = "enter sets completed" onChange={handleSetsChange}/>
                                        </label>
                                        <label>Reps Achieved:
                                            <input type="text" placeholder = "enter reps completed" onChange={handleRepsChange}/>
                                        </label>
                                        <input type="submit" value="Add"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </>
                    )
                case "WEIGHTS":
                    // console.log("weights");
                    return(
                    <div className="weights-data">

                    <div className="weights-data-container">
                        <p className="weights-data-name">{exercise.name}</p>

                        <div className="weights-data-targets">
                                <form className="record-form-wrapper"onSubmit={handleSubmitTarget}>
                                    <label>Date:
                                        <div className = "container__date">
                                            <input value={date} type="text" placeholder = "yyyy-mm-dd" onChange={handleDateChange}/>
                                            <button type="button" onClick={handleDateChangeToday}>Use Today's Date</button>
                                        </div>
                                    </label>
                                    
                                    <label>Sets Achieved:
                                        <input type="text" placeholder = "enter sets completed" onChange={handleSetsChange}/>
                                    </label>
                                    <label>Reps Achievced:
                                        <input type="text" placeholder = "enter reps completed" onChange={handleRepsChange}/>
                                    </label>
                                    <label>Weights Achievced:
                                        <input type="text" placeholder = "enter weights completed" onChange={handleWeightsChange}/>
                                    </label>
                                    <input type="submit" value="Add"/>
                                </form>
                            </div>
                        </div>
                    </div>
                    )
                case "CARDIO":
                    // console.log("cardio")
                    return(
                    <>
                        <div className="cardio-data">
                            <div className="cardio-data-container">
                                <p className="cardio-data-name">{exercise.name}</p>

                                <div className="cardio-data-targets">
                                    <form className="record-form-wrapper" onSubmit={handleSubmitTarget}>
                                        <label>Date:
                                        <div className = "container__date">
                                            <input value={date} type="text" placeholder = "yyyy-mm-dd" onChange={handleDateChange}/>
                                            <button type="button" onClick={handleDateChangeToday}>Use Today's Date</button>
                                        </div>
                                        </label>
                                        <label>Time Achieved:
                                            <input type="text" placeholder = "enter duration" onChange={handleTimeChange}/>
                                        </label>
                                        <label>Distance Achieved:
                                            <input type="text" placeholder = "enter distance achieved" onChange={handleDistanceChange}/>
                                        </label>
                                        <input type="submit" value="Add"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </>
                    )
                default: console.log("Unmatched exercise type")
            }
        }
    }

    useEffect(displayForm, [exercise]);

    return (
        <>
        <h1 className="review-form-name">Review Form</h1>
        <div className="review-form-data">
            {displayForm({exercise})}
        </div>
        </>
    )

}

export default RecordForm;
