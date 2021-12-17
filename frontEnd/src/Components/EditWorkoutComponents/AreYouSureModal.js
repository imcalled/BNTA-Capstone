import { useNavigate } from "react-router-dom";

const AreYouSureModal = ({deleteWorkout, close}) => {

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
                    <h2>Attention</h2>
                    {/* <button className="modal-close" onClick={() => close(false)}> X </button> */}
                </div>
                <div className="modal-content">
                    <p>
                        Are you sure you want to delete the workout?
                    </p>
                    <div className="modal-buttons">
                        <button className="modal-redirect-My-Workouts" onClick={deleteWorkout}>Yes</button>
                        <button className="modal-redirect-My-Workouts" onClick={close}>No</button>
                    </div>
                    {/* <button className="modal-redirect-start-workouts" onClick={() => goStartWorkout}>Start Workout</button> */}
                </div>
            </div>
        </div>
    )
}

export default AreYouSureModal;
