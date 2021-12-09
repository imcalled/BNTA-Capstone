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

  return <>This is the homepage</>;
};

export default HomePage;