import React, { useState } from "react";
import WorkoutsList from "../components/WorkoutsList";

const WorkoutsPage = () => {
    const [workout, setWorkouts] = useState([]);

  const getAllWorkouts = () => {
    fetch("http://localhost:8080/api/v1/workout")
    .then(response => response.json())
    .then(data => setWorkouts(data))
  }

  useEffect(getAllWorkouts, [])
  
    return(

        <>

            <WorkoutsList />

        </>


    )
}

export default WorkoutsPage;