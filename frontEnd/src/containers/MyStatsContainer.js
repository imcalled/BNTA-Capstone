import {useState, useEffect} from 'react';
import ExerciseDropdownSearch from '../components/ExerciseDropdownSearch';
import Graph from '../components/Graph';


const MyStatsContainer =()=>{

    const[allExercises, setAllExercises] = useState([]);
    const [valuesToGraph, setValuesToGraph]=useState(null);
    const [DropSelect, setDropSelect]=useState(null);

    const getValuesToGraph=()=>{
        if(DropSelect){
        fetch(`http://localhost:8080/api/v1/data/${DropSelect}`)
        .then(response => response.json())
        .then(data => setValuesToGraph(data));
        }
    }

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


    return (
        allExercises.length > 0
        ?
        <>

        <p>My Stats Page</p>

        <ExerciseDropdownSearch allExercises = {allExercises} dropSelect={DropSelect} updateDrop={updateDrop}/>
        <Graph valuesToGraph={DropSelect}/>

        </>
        :
        <p>Loading...</p>
    )
}

export default MyStatsContainer;
// ////////////////////////////////////////////////////////////////////// 
// import {useState} from 'react';

// const MyStatsPage = ({exercise}) => {

//     const [valuesToGraph, setValuesToGraph]=useState([]);
//     const [DropSelect, setDropSelect]=useState(null);

//     const updateDrop=(event) => {
//         setDropSelect(event.target.value);
//     }
//         // useEffect(()=>{
//         //     getExerciseDataPointsByExerciseID();
//         // },[]);
            
//     console.log(valuesToGraph);
    
//     return(
//         <div>
//         <form onSubmit={onFormSubmit}>
//         <select onChange={updateDrop}>
//             {exercise.map(exercise => (
//             <option value={exercise.id} label={exercise.name}/>)
//             )}
//             <button value="Show" type="submit"></button>
           
//             </select>
           
//         </form>
        
//         </div>
//     )
// }

// export default MyStatsPage;
    





// }