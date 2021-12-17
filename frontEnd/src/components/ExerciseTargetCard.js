import cardio from '../Icons/cardio.png'
import calisthenic from '../Icons/back-lever.png'
import { useEffect } from 'react/cjs/react.development'
import './Workout.css'

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
                                <button className="delete-exercise-button"  onClick={handleDelete}>Delete
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
                        <img className="weights-image2" src="https://www.vippng.com/png/detail/55-554509_dumbbells-clipart-svg-gym-weight-icon-png.png" />
                        <p className="weights-workout-name">{exercise.name}</p>
                        <div className="weight-issue">
                        <p>Sets: {exercise.targetSets}</p>
                        <p>Reps: {exercise.targetReps}</p>
                        <p>Weight: {exercise.targetWeights}</p>
                        <button className="delete-exercise-button" onClick={handleDelete}>Delete</button>
                        </div>
                       
                                    {/* <image className="bin-icon" src={bin}/> */}
                        
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
                                    <p>Time: {exercise.targetTime}mins</p>
                                    <p>Distance: {exercise.targetDistance}m</p>
                                    <button className="delete-exercise-button" onClick={handleDelete}>Delete
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