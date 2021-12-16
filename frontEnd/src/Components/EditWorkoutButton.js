import { Link } from "react-router-dom";

const EditWorkoutButton = ({workoutId, editWorkout}) => {

    return(
        <>
            <Link to={{ pathname: `/EditWorkoutPage/${workoutId}` }}>
                <button onClick = {() =>editWorkout(workoutId)}>Edit Workout</button>
            </Link>
        </>
    )
}

export default EditWorkoutButton;