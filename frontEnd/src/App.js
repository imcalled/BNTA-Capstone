import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from "./Pages/HomePage"
import MyStatsPage from "./Pages/MyStatsPage"
import ProteinTrackerPage from "./Pages/ProteinTrackerPage"
import MyWorkoutsPage from "./Pages/MyWorkoutsPage"
import Navbar from "./Components/Navbar"
import WorkoutPage from './Pages/WorkoutPage';
import StartWorkoutPage from './Pages/StartWorkoutPage';


function App() {
  
  return (
  <BrowserRouter>
    <div>
      <Navbar />


      <Routes>
        <Route path = "/" element={<HomePage/>} />
        <Route path = "/MyStatsPage" element={<MyStatsPage/>} />
        <Route path = "/ProteinTrackerPage" element={<ProteinTrackerPage/>} />
        <Route path = "/MyWorkoutsPage" element={<MyWorkoutsPage/>} />
        <Route path = "/WorkoutPage/:id" element={<WorkoutPage/>} />
        <Route path = "/StartWorkoutPage/:id" element={<StartWorkoutPage/>} />
      </Routes>
    </div>
    </BrowserRouter>
    
  );
  
}

export default App;
