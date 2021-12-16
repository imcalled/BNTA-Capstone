import { useState, useEffect} from "react";
import ExerciseDropdownSearch from "../components/ExerciseDropdownSearch";
import ExerciseCardList from "../components/ExerciseCardList";
import ExerciseCard from "../components/ExerciseTargetCard";
import ExerciseTargetForm from "../components/ExerciseTargetForm";
import NewExerciseTargetList from "../components/NewExerciseTargetList";
import { useParams } from "react-router-dom";
import SaveWorkoutModal from "../components/EditWorkoutComponents/SaveWorkoutModal"
import EditWorkoutCSS from "../components/EditWorkoutComponents/EditWorkoutCSS.css"

const EditWorkoutPage = () => {

    const{id} = useParams();

    // const[exercises,setExercises] = useState([]);    
    const[allExercises, setAllExercises] = useState([]);
    const[selectedExercise, setSelectedExercise] = useState(null);
    const[DropSelect, setDropSelect]=useState(null);
    const[exerciseTarget, setExerciseTarget] = useState(null);
    const[newExerciseTargetList, setNewExerciseTargetList] = useState([]);
    const[workoutName, setWorkoutName] = useState("");
    const[modal, setModal] = useState(false);
    const[empty, setEmpty] = useState(false);

    const getWorkoutNameById = () => {
        return fetch("http://localhost:8080/api/v1/workout")
            .then(response => response.json())
            .then(data => data.filter(workout => {
                return (
                    workout.id == id
                )
            }))
            .then(workout => setWorkoutName(workout[0].name))
            .then(() => console.log(workoutName))
    }

    useEffect(getWorkoutNameById, []);

    const getExercisesByWorkoutId = () => {
        fetch(`http://localhost:8080/api/v1/exercises/workout/id/${id}`)
        .then(response => response.json())
        .then(data => {
            setNewExerciseTargetList(data)
        })
    }

    useEffect(getExercisesByWorkoutId, []);

    const getSelectedExercise = () =>{
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

        if(workoutName === "") {
            setEmpty(true);
            alert("Enter a workout name");
            window.scrollTo({
                top: 0, 
                behavior: 'smooth'
                /* you can also use 'auto' behaviour
                   in place of 'smooth' */
              });
        }

        if(newExerciseTargetList === []) {
            alert("Add exercises to your workout!");
            window.scrollTo({
                top: 0, 
                behavior: 'smooth'
                /* you can also use 'auto' behaviour
                   in place of 'smooth' */
              });
        }

        else {
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
                postExerciseTargets(workoutId)})
            .then(setModal(true))
            .then(successPopup());
            //pop up alert to say successful, redirect to 
        }
    }

    const successPopup = () => {
        {modal && <SaveWorkoutModal close={setModal}/>}
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
        <h1>Edit workout</h1>
            <form>
                <label>Workout Name:
                    <input className={empty ? "invalid" : "workoutName"} type="text" value={workoutName} onChange={handleWorkoutName}/>
                </label>
            </form>
        {/* {workoutNameForm} */}
        <ExerciseDropdownSearch allExercises = {allExercises} updateDrop={updateDrop}/>
        <ExerciseTargetForm exercise={selectedExercise} onAddExerciseTarget={onAddExerciseTarget}/>
        <NewExerciseTargetList newExerciseTargetList={newExerciseTargetList} deleteCard={deleteCard} />
        {saveButton}
        {modal && <SaveWorkoutModal close={setModal}/>}
        {/* <saveButton /> */}
        {/* <button onClick={saveWorkout}>Save</button> */}
        
        </>
        :
        <p>Loading...</p>
    )
}
export default EditWorkoutPage;