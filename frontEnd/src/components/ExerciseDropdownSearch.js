
import ExerciseList from './ExerciseList';

const ExerciseDropdownSearch = ({allExercises, updateDrop}) => {

    const exerciseOptions = allExercises.map(exercise => {
        return <option value={exercise.id}>{exercise.name}</option>
    });

    return(
        <div class="ExerciseDropDownSearch">

        <form>
        <select onChange={updateDrop}>
            <option value="">Select exercise</option>
            {exerciseOptions}
        </select>

        </form>


        </div>
    )
}
export default ExerciseDropdownSearch;