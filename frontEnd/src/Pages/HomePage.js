import { useNavigate } from "react-router-dom";
import "../Styles/HomePage.css";
import calendarIcon from "../Icons/calendar.png";
import dumbbellIcon from "../Icons/dumbbell.png";
import trendIcon from "../Icons/trend.png";

const HomePage = () => {
  let navigate = useNavigate();

  const goWorkoutsPage = () => {
    navigate("/MyWorkoutsPage");
  };

  const goMyStatsPage = () => {
    navigate("/MyStatsPage");
  };

  const goProteinTrackerPage = () => {
    navigate("/ProteinTrackerPage");
  };

  return (
    <>
    <div className = "pageColor">

    
      <h1 className="pageTitle">My Dashboard</h1>
      <div className={"container__button_primary"}>
        <div>
          <button className={"button__primary"} onClick={goWorkoutsPage}>
            <img
              className="icon"
              src={dumbbellIcon}
              align="center"
              alt="Dumbbell"
            />
            My Workouts
          </button>
        </div>

        <button className={"button__primary"} onClick={goMyStatsPage}>
          <img className="icon" src={trendIcon} align="center" alt="Dumbbell" />
          My Stats
        </button>
        <button className={"button__primary"} onClick={goProteinTrackerPage}>
          <img
            className="icon"
            src={calendarIcon}
            align="center"
            alt="Dumbbell"
          />
          Protein Tracker
        </button>
      </div>
      </div>
    </>
  );
};

export default HomePage;
