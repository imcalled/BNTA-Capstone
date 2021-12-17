import { Link } from "react-router-dom";
import backIcon from "../Icons/back.png"
import './Workout.css';

const EditWorkoutButton = ({goMyWorkouts}) => {

    return(
        <>
            <Link to={{ pathname: `/MyWorkoutsPage` }}>
                <button className="back-button" onClick = {() =>goMyWorkouts()}><img src={backIcon} alt="a back arrow icon" className="edit-workout-icon" align="center"/>Back</button>
            </Link>
        </>
    )
}

export default EditWorkoutButton;