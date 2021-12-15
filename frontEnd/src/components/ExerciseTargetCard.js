import cardio from '../Icons/cardio.png'
import calisthenic from '../Icons/back-lever.png'
import { useEffect } from 'react/cjs/react.development'
import './Workout.css'
import bin from '../Icons/binIcon.png'

const ExerciseTargetCard = ({exercise, deleteCard}) => {

    const handleDelete = (event) => {
        console.log("id: ", exercise.exercise_Id);
        //delete the card with id
        event.preventDefault();
        deleteCard(exercise.exercise_Id);
    }
    
    const displayCard = () => {
        // console.log("card: ", exercise);
        if(exercise) {
                switch(exercise.exerciseType) {
                case "CALISTHENICS":
                    console.log("calisthenics");
                    return (
                    <>
                        <div className="calisthenics-workout">
                            <img className="calisthenics-image" src={calisthenic} />
                            
                            <div className="calisthenics-workout-container">
                                <p className="calisthenics-workout-name">{exercise.name}</p>

                            <div className="calisthenics-workout-targets">
                                <p>Sets: {exercise.targetReps}</p>
                                <p>Reps: {exercise.targetSets}</p>
                                <button onClick={handleDelete}>Delete
                                    {/* <image className="bin-icon" src={bin}/> */}
                                </button>
                            </div>

                        </div>
                    </div>
                    </>
                    )
                case "WEIGHTS":
                    console.log("weights");
                    return(
                    <div className="weights-workout">
                        <p className="weights-workout-name">{exercise.name}</p>
                        <p>Sets: {exercise.targetSets}</p>
                        <p>Reps: {exercise.targetReps}</p>
                        <p>Weights: {exercise.targetWeights}</p>
                        <button onClick={handleDelete}>Delete
                                    {/* <image className="bin-icon" src={bin}/> */}
                        </button>
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
                                    <p id="cardio-workout-time">Time: {exercise.targetTime}</p>
                                    <p id="cardio-workout-distance">Distance: {exercise.targetDistance}</p>
                                    <button onClick={handleDelete}>Delete
                                    {/* <image className="bin-icon" src={bin}/> */}
                                </button>
                                </div>
                            </div>
                        </div>
                    </>
                    )
                default: console.log("Unmatched exercise type")
            }
        }
    }

    useEffect(displayCard, [exercise]);

    return (
        <>
        {displayCard({exercise})}
        </>
    )
}

export default ExerciseTargetCard;