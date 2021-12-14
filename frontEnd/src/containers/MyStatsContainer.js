import {useState, useEffect} from 'react';
import ExerciseDropdownSearch from '../components/ExerciseDropdownSearch';
import Graph from '../components/Graph';


const MyStatsContainer =()=>{
    const[allExercises, setAllExercises] = useState([]);
    const [valuesToGraph, setValuesToGraph]=useState([]);
    const [DropSelect, setDropSelect]=useState(null);
    const [exerciseType,setExerciseType]=useState(null);

    const getValuesToGraph=()=>{
        if(DropSelect){
        fetch(`http://localhost:8080/api/v1/data/${DropSelect}`)
        .then(response => response.json())
        .then(data => setValuesToGraph(data));
        }
    }

    const getExerciseType= () =>{
        if(DropSelect){
            fetch(`http://localhost:8080/api/v1/exercises/id/${DropSelect}`)
            .then(response=>response.json())
            .then(data=>data.map(exercise=>exercise.type))
            .then(data=>setExerciseType(data))
        }
    }

    useEffect(getValuesToGraph, [DropSelect]);
    useEffect(getExerciseType, [DropSelect]);

    const updateDrop=(event) => {
        setDropSelect(event.target.value);
    }

    const getAllExercises = () => {
        fetch("http://localhost:8080/api/v1/exercises")
            .then(response => response.json())
            .then(data => setAllExercises(data))
    }

    useEffect(getAllExercises, []);


    return (
        allExercises.length > 0
        ?
        <>

        <p>My Stats Page</p>

        <ExerciseDropdownSearch allExercises = {allExercises} dropSelect={DropSelect} updateDrop={updateDrop}/>
        <Graph valuesToGraph={valuesToGraph} exerciseType={exerciseType}/>

        </>
        :
        <p>Loading...</p>
    )
}

export default MyStatsContainer;
