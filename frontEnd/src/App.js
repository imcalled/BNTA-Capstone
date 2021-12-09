
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from "./Pages/HomePage"
import MyStatsPage from "./Pages/MyStatsPage"
import ProteinTrackerPage from "./Pages/ProteinTrackerPage"
import WorkoutsPage from "./Pages/WorkoutsPage"
import Navbar from "./Components/Navbar"


function App() {
  
  return (
  <BrowserRouter>
    <div>
      <Navbar />
      <Routes>
        <Route path = "/" element={<HomePage/>} />
        <Route path = "/MyStatsPage" element={<MyStatsPage/>} />
        <Route path = "/ProteinTrackerPage" element={<ProteinTrackerPage/>} />
        <Route path = "/WorkoutsPage" element={<WorkoutsPage/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
  
}

export default App;
