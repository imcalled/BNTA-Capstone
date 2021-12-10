import ExerciseDropdownSearch from "./ExerciseDropdownSearch";
import Exercise from "./Exercise";

const ExerciseList = ({allExercises, dropSelect}) => {
    const ExerciseComponent = allExercises.map(exercise => {
        return (
            <Exercise exercise={exercise} dropSelect={dropSelect}/>
        )});

    return(
    <>
        {ExerciseComponent}
    </>
    )
}
export default ExerciseList;