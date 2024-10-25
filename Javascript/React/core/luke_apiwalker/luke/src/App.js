import {  Routes, Route } from 'react-router-dom';
import DisplayPlanets from './components/DisplayPlanets';
import DisplayPeople from './components/DisplayPeople';
import Search from './components/Search';
function App() {
  return (
    <div className="App">
      <Search/>
      <Routes>
        <Route path="/people/:peopleId" element={<DisplayPeople/>} />
        <Route path="/planets/:planetsId" element={<DisplayPlanets/>}/>
      </Routes>
    </div>
  );
}

export default App;
