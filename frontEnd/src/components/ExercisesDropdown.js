import {Dropdown} from 'semantic-ui-react'

const ExerciseDropdownSearch = ({allExercises}) => {

const ExerciseDropdownSearchSelection = () => (
  <Dropdown placeholder='Select Exercise'
    fluid
    search
    selection
    options={allExercises}
    />
)

    return(
        <div >
            <h3>Add new exercise:</h3>
            {ExerciseDropdownSearchSelection()}
        </div>
    )
}
export default ExerciseDropdownSearch;