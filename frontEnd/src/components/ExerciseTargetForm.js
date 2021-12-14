import cardio from '../Icons/cardio.png';
import calisthenic from '../Icons/back-lever.png';
import weights from '../Icons/dumbbell.png';
import { useState, useEffect } from 'react/cjs/react.development';
import './Workout.css'

const ExerciseTargetForm = ({exercise, onAddExerciseTarget}) => {

    const[sets, setSets] = useState("");
    const[reps, setReps] = useState("");
    const[weights, setWeights] = useState("");
    const[time, setTime] = useState("");
    const[distance, setDistance] = useState("");
    const newExerciseTarget = "";

    const handleSetsChange = (event) => {
        setSets(event.target.value);
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

        // const oldExerciseTarget = newExerciseTarget;

        const newExerciseTarget = {
            "exercise_Id": exercise.id,
            "exerciseType": exercise.exerciseType,
            "name": exercise.name,
            "targetTime": time,
            "targetDistance": distance,
            "targetSets": sets,
            "targetReps": reps,
            "targetWeight": weights
        }

        // if(oldExerciseTarget === newExerciseTarget) {
        //     console.log("same");
        // }
        // else {
        onAddExerciseTarget(newExerciseTarget);

        setSets("");
        setReps("");
        setWeights("");
        setTime("");
        setDistance("");
        // }
    
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
                        <div className="calisthenics-workout">
                            <img className="calisthenics-image" src={calisthenic} />
                            
                            <div className="calisthenics-workout-container">
                                <p className="calisthenics-workout-name">{exercise.name}</p>

                                <div className="calisthenics-workout-targets">
                                    <form onSubmit={handleSubmitTarget}>
                                        <label>Sets:
                                            <input type="number" onChange={handleSetsChange}/>
                                        </label>
                                        <label>Reps:
                                            <input type="number" onChange={handleRepsChange}/>
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
                    <div className="weights-workout">
                        <img className="calisthenics-image" src={weights} />

                    <div className="calisthenics-workout-container">
                        <p className="weights-workout-name">{exercise.name}</p>

                        <div className="calisthenics-workout-targets">
                                <form onSubmit={handleSubmitTarget}>
                                    <label>Sets:
                                        <input type="number" onChange={handleSetsChange}/>
                                    </label>
                                    <label>Reps:
                                        <input type="number" onChange={handleRepsChange}/>
                                    </label>
                                    <label>Weight(kg):
                                        <input type="number" onChange={handleWeightsChange}/>
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
                        <div className="cardio-workout">
                            <img className="cardio-image" src={cardio}/>    

                            <div className="cardio-workout-container">
                                <p className="cardio-workout-name">{exercise.name}</p>

                                <div className="cardio-workout-targets">
                                    <form onSubmit={handleSubmitTarget}>
                                        <label>Time:
                                            <input type="number" onChange={handleTimeChange}/>
                                        </label>
                                        <label>Distance:
                                            <input type="number" onChange={handleDistanceChange}/>
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
        {displayForm({exercise})}
        </>
    )

}
export default ExerciseTargetForm;