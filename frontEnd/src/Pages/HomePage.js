import { useNavigate } from "react-router-dom";

const HomePage = () => {
  let navigate = useNavigate();

  const goWorkoutsPage = () => {
    navigate("/WorkoutsPage");
  };

  const goMyStatsPage = () => {
    navigate("/MyStatsPage");
  };

  const goProteinTrackerPage = () => {
    navigate("/ProteinTrackerPage");
  };

  return <>
  This is the homepage
  <button onClick={goWorkoutsPage}>My Workouts</button>
  <button onClick={goMyStatsPage}>My Stats</button>
  <button onClick={goProteinTrackerPage}>Protein Tracker</button>
  </>;
};

export default HomePage;
