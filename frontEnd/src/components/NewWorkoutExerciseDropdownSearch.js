
import ExerciseList from './ExerciseList';

const ExerciseDropdownSearch = ({allExercises, dropSelect, updateDrop, handleNewExercise}) => {

    const exerciseOptions = allExercises.map(exercise => {
        return <option value={exercise.id}>{exercise.name}</option>
    });

    return(
        <div class="ExerciseDropDownSearch">
            <form onSubmit={handleNewExercise}>
                <select onChange={updateDrop}>
                {exerciseOptions}
                </select>
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}
export default ExerciseDropdownSearch;