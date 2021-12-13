const NewWorkoutExerciseList = ({selectedExercise}) => {

    const displayExercise = () => {
        if(selectedExercise) {
        <p>{`${selectedExercise}`}</p>
        } else (
            <p>loading...</p>
        )
}

    return(
        {displayExercise}
    )
}

export default NewWorkoutExerciseList