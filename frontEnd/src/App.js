
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from "./Pages/HomePage"
import MyStatsPage from "./Pages/MyStatsPage"
import ProteinTrackerPage from "./Pages/ProteinTrackerPage"
import WorkoutsPage from "./Pages/WorkoutsPage"
import WorkoutPage from './Pages/WorkoutPage';

function App() {
  
  return (
  <BrowserRouter>
    <div>
      <Routes>
        <Route path = "/" element={<HomePage/>} />
        <Route path = "/MyStatsPage" element={<MyStatsPage/>} />
        <Route path = "/ProteinTrackerPage" element={<ProteinTrackerPage/>} />
        <Route path = "/WorkoutsPage" element={<WorkoutsPage/>} />
        <Route path = "/WorkoutPage/:id" element={<WorkoutPage/>} />
      </Routes>
    </div>
    </BrowserRouter>
    
  );
  
}

export default App;
