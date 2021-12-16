
import ExerciseTargetCard from "./ExerciseTargetCard"
import { useEffect } from "react/cjs/react.development"

//an array of the exerciseTargetLists
const NewExerciseTargetList = ({newExerciseTargetList, deleteCard}) => {
    
    // const exerciseTarget = console.log("object:", (Object.values(newExerciseTargetList))[0][0]);
    
    const exerciseTargets = newExerciseTargetList.map(exerciseTarget => {
        return (
            <ExerciseTargetCard exercise={exerciseTarget} deleteCard={deleteCard}/>
        )
    });

    return (
        // newExerciseTargetList.length > 0
        // ?
        <>
        {exerciseTargets}
        </>
        // :
        // <>
        // <p>Loading...</p>
        // </>
    )
}
export default NewExerciseTargetList;