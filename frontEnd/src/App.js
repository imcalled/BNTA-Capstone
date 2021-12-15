import './App.css';
import NewWorkoutContainer from './containers/NewWorkoutContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MyStatsContainer from './containers/MyStatsContainer';

function App() {
  
  return (
    <div className="App">
      <NewWorkoutContainer />
      {/* <MyStatsContainer/> */}
      {/* <BrowserRouter/> */}
    </div>
  );
  
}

export default App;
