
import ExerciseList from './ExerciseList';

const ExerciseDropdownSearch = ({allExercises, dropSelect, updateDrop}) => {



// console.log(allExercises.map(exercise => exercise.name));

    return(
        <div class="ExerciseDropDownSearch">

        <form>
        <select onChange={updateDrop}>
        <ExerciseList allExercises={allExercises} dropSelect ={dropSelect}/>
        </select>

        </form>


        </div>
    )
}
export default ExerciseDropdownSearch;