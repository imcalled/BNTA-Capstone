import { useState, useEffect } from "react";
import ExerciseDropdownSearch from "../components/ExerciseDropdownSearch";
import ExerciseCardList from "../components/ExerciseCardList";
import ExerciseCard from "../components/ExerciseTargetCard";
import ExerciseTargetForm from "../components/ExerciseTargetForm";
import NewExerciseTargetList from "../components/NewExerciseTargetList";

const NewWorkoutContainer = () => {
    
    const[allExercises, setAllExercises] = useState([]);
    const[selectedExercise, setSelectedExercise] = useState(null);
    const[DropSelect, setDropSelect]=useState(null);
    const[exerciseTarget, setExerciseTarget] = useState(null);
    const[newExerciseTargetList, setNewExerciseTargetList] = useState([]);
    const[workoutName, setWorkoutName] = useState([]);
    // const[workoutId, setWorkoutId] = useState("");
    const[visibleSaveButton, setVisibleSaveButton] = useState(false);

    const getSelectedExercise =()=>{
        if(DropSelect){
        fetch(`http://localhost:8080/api/v1/exercises/id/${DropSelect}`)
        .then(response => response.json())
        .then(data => setSelectedExercise(data));
        }
    }

    useEffect(getSelectedExercise, [DropSelect]);

    const updateDrop=(event) => {
        setDropSelect(event.target.value);
    }

    const getAllExercises = () => {
        fetch("http://localhost:8080/api/v1/exercises")
            .then(response => response.json())
            .then(data => setAllExercises(data))
    }

    useEffect(getAllExercises, []);

    const getAllExerciseTargets = () => {
        fetch("http://localhost:8080/api/v1/exerciseTargets")
            .then(response => response.json())
            .then(data => setExerciseTarget(data))
            .then(console.log(exerciseTarget))
    }

    const onAddExerciseTarget = (newExerciseTarget) => {
        // console.log(newExerciseTarget);

        if(newExerciseTarget === newExerciseTargetList[newExerciseTargetList.length-1]) {
            console.log("same");
        }
        else{
            setNewExerciseTargetList([...newExerciseTargetList, newExerciseTarget]);
        }

        //add exercise target to a list of newWorkoutExerciseTargetsList
        
        // fetch("http://localhost:8080/api/v1/exerciseTargets", {
        //     method: "POST",
        //     headers: {
        //         'Content-type': 'application/json'
        //     },
        //     body: JSON.stringify(newExerciseTarget)
        // })
        // .then(() => getAllExerciseTargets());
    }

    const deleteCard = (id) => {
        const card = newExerciseTargetList.filter(exercise => {
            return (
                exercise.exercise_Id !== id
        )
    })
        setNewExerciseTargetList(card);
    }

    const handleWorkoutName = (event) => {
        setWorkoutName(event.target.value);
    }

    // const workoutNameForm = () => {
    //     return (
    //         <form>
    //             <label>Workout Name:
    //                 <input type="text" onChange={handleWorkoutName}/>
    //             </label>
    //         </form>
    //     )
    // }

    const getWorkoutId = () => {
        return fetch("http://localhost:8080/api/v1/workout")
                .then(response => response.json())
                .then(data => data.filter(workout => {
                    console.log("workout: ", workout);
                    return (
                        workout.name == workoutName
                    )
                }))
                .then(workout => {return(workout[0].id)})
    }

    const saveWorkout = () => {
        //create new workout object, post it, get workoutId
        const newWorkout = {
            "name": workoutName
        }

        fetch("http://localhost:8080/api/v1/workout", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newWorkout)
        })
        .then(() => getWorkoutId())
        //anonymous function, take nothing and call the function
        .then((workoutId) => {
            console.log("workoutId: ", workoutId);
            postExerciseTargets(workoutId)});
        
        //exerciseTarget object to match with database
        // postExerciseTargets();
    }

    const postExerciseTargets = (workoutId) => {
        newExerciseTargetList.map(exerciseTarget => {

        const newExerciseTarget = { 
            "exercise_Id": exerciseTarget.exercise_Id,
            "workout_Id": workoutId,
            "time": exerciseTarget.targetTime,
            "distance": exerciseTarget.targetDistance,
            "sets": exerciseTarget.targetSets,
            "reps": exerciseTarget.targetReps,
            "weight": exerciseTarget.targetWeight
        }

        fetch("http://localhost:8080/api/v1/exerciseTargets", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newExerciseTarget)
        })
        .then(data => console.log(data))  
    })
    getAllExerciseTargets();
}

    const saveButton = newExerciseTargetList.length > 0 ? <button onClick={saveWorkout}>Save</button> : null

    return (
        allExercises.length > 0
        ?
        <>
        <p>NavBar</p> 
        <p>New Workout Page</p>
            <form>
                <label>Workout Name:
                    <input type="text" onChange={handleWorkoutName}/>
                </label>
            </form>
        {/* {workoutNameForm} */}
        <ExerciseDropdownSearch allExercises = {allExercises} updateDrop={updateDrop}/>
        <ExerciseTargetForm exercise={selectedExercise} onAddExerciseTarget={onAddExerciseTarget}/>
        <NewExerciseTargetList newExerciseTargetList={newExerciseTargetList} deleteCard={deleteCard} />
        {saveButton}
        {/* <saveButton /> */}
        {/* <button onClick={saveWorkout}>Save</button> */}
        
        </>
        :
        <p>Loading...</p>
    )
}
export default NewWorkoutContainer;