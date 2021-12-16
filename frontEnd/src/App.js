import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from "./Pages/HomePage"
import MyStatsContainer from "./containers/MyStatsContainer"
import ProteinTrackerPage from "./Pages/ProteinTrackerPage"
import MyWorkoutsPage from "./Pages/MyWorkoutsPage"
import Navbar from "./components/Navbar"
import WorkoutPage from './Pages/WorkoutPage';
import StartWorkoutPage from './Pages/StartWorkoutPage';
import './Styles/HomePage.css'
import NewWorkoutContainer from './containers/NewWorkoutContainer'
import EditWorkoutPage from './Pages/EditWorkoutPage';
import Footer from "./components/Footer"


function App() {
  
  return (
  <BrowserRouter>
    <div className="pageColor">
      <Navbar />


      <Routes>
        <Route path = "/" element={<HomePage/>} />
        <Route path = "/MyStatsPage" element={<MyStatsContainer/>} />
        <Route path = "/ProteinTrackerPage" element={<ProteinTrackerPage/>} />
        <Route path = "/MyWorkoutsPage" element={<MyWorkoutsPage/>} />
        <Route path= "/NewWorkoutPage" element={<NewWorkoutContainer/>} />
        <Route path = "/WorkoutPage/:id" element={<WorkoutPage/>} />
        <Route path = "/StartWorkoutPage/:id" element={<StartWorkoutPage/>} />
        <Route path = "/EditWorkoutPage/:id" element={<EditWorkoutPage/>} />

      </Routes>
    </div>
    <div>
    <Footer />
    </div>
    </BrowserRouter>
    
  );
  
}

export default App;
