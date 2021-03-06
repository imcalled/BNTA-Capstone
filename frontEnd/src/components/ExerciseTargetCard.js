import cardio from '../Icons/cardio.png'
import calisthenic from '../Icons/back-lever.png'
import weights from '../Icons/weights.png'
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
                switch (exercise.exerciseType) {
                  case "CALISTHENICS":
                    return (
                      <>
                        <div className="calisthenics-workout">
                          <img className="calisthenics-image" src={calisthenic}/>

                          <div className="calisthenics-workout-container">
                            <p className="calisthenics-workout-name">
                              {exercise.name}
                            </p>

                            <div className="calisthenics-workout-targets">
                              <p>Sets: {exercise.targetReps}</p>
                              <p>Reps: {exercise.targetSets}</p>
                              
                            </div>
                            <button
                                className="delete-exercise-button"
                                onClick={handleDelete}
                              >
                                Delete
                                {/* <image className="bin-icon" src={bin}/> */}
                              </button>
                          </div>
                        </div>
                      </>
                    );
                  case "WEIGHTS":
                    console.log("weights");
                    return (
                      <div className="weights-workout">
                        <img className="calisthenics-image" src={weights} />
                        <div className = "weights-workout-container">
                        <p className="weights-workout-name">{exercise.name}</p>
                        <div className="weight-issue">
                          <p>Sets: {exercise.targetSets}</p>
                          <p>Reps: {exercise.targetReps}</p>
                          <p>Weight: {exercise.targetWeights}</p>
                          
                        </div>
                        <button
                            className="delete-exercise-button"
                            onClick={handleDelete}
                          >
                            Delete
                          </button>
                        {/* <image className="bin-icon" src={bin}/> */}
                      </div>
                      </div>
                    );
                  case "CARDIO":
                    // console.log("cardio")
                    return (
                      <>
                        <div className="cardio-workout">
                          <img className="cardio-image" src={cardio} />

                          <div className="cardio-workout-container">
                            <p className="cardio-workout-name">
                              {exercise.name}
                            </p>

                            <div className="cardio-workout-targets">
                              <p>Time: {exercise.targetTime}mins</p>
                              <p>Distance: {exercise.targetDistance}m</p>
                            </div>
                            <button
                              className="delete-exercise-button"
                              onClick={handleDelete}
                            >
                              Delete
                              {/* <image className="bin-icon" src={bin}/> */}
                            </button>
                          </div>
                        </div>
                      </>
                    );
                  default:
                    console.log("Unmatched exercise type");
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