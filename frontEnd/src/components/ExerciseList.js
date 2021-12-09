import ExerciseDropdownSearch from "./ExerciseDropdownSearch";
import Exercise from "./Exercise";

const ExerciseList = ({allExercises}) => {
    const ExerciseComponent = allExercises.map(exercise => {
        return (
            <Exercise exercise={exercise} />
        )});

    return(
    <>
        {ExerciseComponent}
    </>
    )
}
export default ExerciseList;