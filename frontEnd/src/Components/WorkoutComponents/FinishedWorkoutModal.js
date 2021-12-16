import { useNavigate } from "react-router-dom";

const FinishedWorkoutModal = ({close}) => {

    let navigate = useNavigate();

    const goHomePage = () => {
        navigate("/");
      };

    return (
        <div className="modal-wrapper">
            <div className="modal-container">
                <div className="modal-title">
                    <h2>Workout Complete!</h2>
                    <button className="modal-close" onClick={goHomePage}> X </button>
                </div>
                <div>
                    <p>
                        woot! now go drink a protein shake 🥤
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FinishedWorkoutModal;
