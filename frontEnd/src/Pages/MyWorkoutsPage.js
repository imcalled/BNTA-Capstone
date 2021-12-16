import React, { useState, useEffect } from "react";
import WorkoutsList from "../components/WorkoutsList"
import "../Styles/MyWorkoutsPage.css"
import { Link } from "react-router-dom";


const MyWorkoutsPage = () => {
  const [workouts, setWorkouts] = useState([]);
  // const [exerciseTargets, setExerciseTargets] = useState([]);

  const getAllWorkouts = () => {
    fetch("http://localhost:8080/api/v1/workout")
    .then(response => response.json())
    .then(data => setWorkouts(data))
  }
  
  useEffect(getAllWorkouts, [])
  // useEffect(getAllExerciseTargets, [])
  
    return(

        <>
        <h1 className="pageTitle">My Workouts</h1>
          <WorkoutsList workouts = {workouts} />
          

          
        </>


    )
}

export default MyWorkoutsPage;