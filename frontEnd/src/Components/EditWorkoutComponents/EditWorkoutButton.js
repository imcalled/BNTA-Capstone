import { Link } from "react-router-dom";
import editIcon from "../Icons/edit.png";
import './Workout.css';

const EditWorkoutButton = ({workoutId, editWorkout}) => {

    return(
        <>
            <Link to={{ pathname: `/EditWorkoutPage/${workoutId}` }}>
                <button className="edit-workout-button" onClick = {() =>editWorkout(workoutId)}><img src={editIcon} alt="a play icon" className="edit-workout-icon" align="center"/>Edit Workout</button>
            </Link>
        </>
    )
}

export default EditWorkoutButton;