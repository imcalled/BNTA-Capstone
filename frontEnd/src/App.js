import './App.css';
import NewWorkoutContainer from './containers/NewWorkoutContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <NewWorkoutContainer />
      {/* <BrowserRouter/> */}
    </div>
  );
  
}

export default App;
