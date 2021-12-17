import ExerciseTargetCard from "./ExerciseTargetCard"
import { useEffect } from "react/cjs/react.development"
import "../Styles/MyWorkoutsPage.css"

//an array of the exerciseTargetLists
const NewExerciseTargetList = ({newExerciseTargetList, deleteCard}) => {
    
    // const exerciseTarget = console.log("object:", (Object.values(newExerciseTargetList))[0][0]);
    
    const exerciseTargets = newExerciseTargetList.map(exerciseTarget => {
        return (
            <ExerciseTargetCard exercise={exerciseTarget} deleteCard={deleteCard}/>
        )
    });

    return (
        <>
        
        {exerciseTargets}
    
        </>
    )
}
export default NewExerciseTargetList;