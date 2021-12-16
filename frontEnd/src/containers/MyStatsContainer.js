import {useState, useEffect} from 'react';
import ExerciseDropdownSearch from '../components/ExerciseDropdownSearch';
import Graph from '../components/Graph';
import '../Styles/MyStatsPage.css';


const MyStatsContainer =()=>{
    const [allExercises, setAllExercises] = useState([]);
    const [valuesToGraph, setValuesToGraph]=useState([]);
    const [DropSelect, setDropSelect]=useState(null);
    const [exerciseType,setExerciseType]=useState();

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
            .then(exercise=>exercise.exerciseType)
            .then(data=>setExerciseType(data))
        }
    }
    useEffect(getExerciseType, [DropSelect]);
    useEffect(getValuesToGraph, [DropSelect]);


    const updateDrop=(event) => {
        setDropSelect(event.target.value);
    }

    const getAllExercises = () => {
        fetch("http://localhost:8080/api/v1/exercises")
            .then(response => response.json())
            .then(data => setAllExercises(data))
    }

    useEffect(getAllExercises, []);


    return allExercises.length > 0 ? (
      <>
        <h1 className="pageTitle">My Stats Page</h1>
        
          <ExerciseDropdownSearch
            allExercises={allExercises}
            dropSelect={DropSelect}
            updateDrop={updateDrop}
          />
          <div className="container__graph">
          <Graph valuesToGraph={valuesToGraph} exerciseType={exerciseType} />
        </div>
      </>
    ) : (
      <p>Loading...</p>
    );
}

export default MyStatsContainer;
