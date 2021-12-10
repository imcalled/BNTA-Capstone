import {Dropdown} from 'semantic-ui-react'
import ExerciseList from './ExerciseList';

const ExerciseDropdownSearch = ({allExercises}) => {

// console.log(allExercises.map(exercise => exercise.name));
const ExerciseDropdownSearchSelection = () => {
    const exerciseNames = allExercises.map(exercise => exercise.name);
  <Dropdown placeholder='Select Exercise'
    fluid
    search
    selection
    options={exerciseNames}
    />
}

    return(
        <div class="ExerciseDropDownSearch">
            <div>
                <h3>Add new exercise:</h3>
            </div>
            {/* {ExerciseDropdownSearchSelection()} */}

            <div>
                <select class="ui search dropdown">
                    {/* <option value="">Exercise</option> */}
                    <ExerciseList allExercises={allExercises}/>
                </select>
            </div>
        </div>
    )
}
export default ExerciseDropdownSearch;