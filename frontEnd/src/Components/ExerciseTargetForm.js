const ExerciseTargetForm = ({exerciseTarget}) => {

    return (
        <div>
            <form>
                <input type="text"></input>
            </form>
            <p>Exercise Id: {exerciseTarget.exercise_Id}</p>
            <p>Workout Id: {exerciseTarget.workout_Id}</p>
            <p>Time: {exerciseTarget.time}</p>
            <p>Weight{exerciseTarget.weight}</p>
            <p>Sets{exerciseTarget.sets}</p>
            <p>Reps{exerciseTarget.reps}</p>
        </div> 
    )
}

export default ExerciseTargetForm