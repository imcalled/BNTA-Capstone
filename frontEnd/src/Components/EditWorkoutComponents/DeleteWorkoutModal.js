import { useNavigate } from "react-router-dom";

const DeleteWorkoutModal = () => {

    let navigate = useNavigate();

    const goMyWorkouts = () => {
        navigate("/MyWorkoutsPage")
    }

    // const goStartWorkout = () => {
    //     navigate("/StartWorkoutPage")
    // }

    return (
        <div className="modal-wrapper">
            <div className="modal-container">
                <div className="modal-title">
                    <h2>Success!</h2>
                    {/* <button className="modal-close" onClick={() => close(false)}> X </button> */}
                </div>
                <div className="modal-content">
                    <p>
                        Workout has been deleted
                    </p>
                    <button className="modal-redirect-My-Workouts" onClick={goMyWorkouts}>Back to My Workouts</button>
                    {/* <button className="modal-redirect-start-workouts" onClick={() => goStartWorkout}>Start Workout</button> */}
                </div>
            </div>
        </div>
    )
}

export default DeleteWorkoutModal;
