const ExerciseDropdownSearch = ({allExercises, dropSelect, updateDrop}) => {

    const exerciseOptions = allExercises.map(exercise => {
        return <option key = {exercise.id} value={exercise.id}>{exercise.name}</option>
    });

// console.log(allExercises.map(exercise => exercise.name));

    return(
        <div class="ExerciseDropDownSearch">

        <form>
        <select onChange={updateDrop}>
            <option label="Select an exercise"/>
            {exerciseOptions}
        </select>
        </form>


        </div>
    )
}

export default ExerciseDropdownSearch;