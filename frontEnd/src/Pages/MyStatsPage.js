import {useState} from 'react';
const MyStatsPage = ({exercise}) => {

    const [valuesToGraph, setValuesToGraph]=useState([]);
    const [DropSelect, setDropSelect]=useState(null);

    const updateDrop=(event) => {
        setDropSelect(event.target.value);

    }

    const onFormSubmit = (event)=>{

        const getExerciseDataPointsByExerciseID = () => {
            fetch(`http://localhost:8080/api/v1/data/${DropSelect}`)
                .then(response => response.json())
                .then(data => setValuesToGraph(data));
        }


    }


    return(
        <div>
        <form onSubmit={onFormSubmit}>
        <select onChange={updateDrop}>
            {exercise.map(exercise => (

            <option value={exercise.id} label={exercise.name}/>)
            )}
           
            </select>
           
        </form>
        
        </div>
    )
}

export default MyStatsPage;