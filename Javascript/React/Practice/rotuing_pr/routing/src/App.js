import logo from './logo.svg';
import './App.css';
import { Routes,Route,Link } from 'react-router-dom';
import FirstRoute from './components/FirstRoute';
import Number from './components/Number';
import Word from './components/Word';
import All from './components/All';
function App() {

  return (
    <div className="App">
      <h1><Link to="/First_Route">home</Link></h1>
      <h1><Link to="/4">Number </Link></h1>
      <h1><Link to="/hello">Word</Link></h1>
      <h1><Link to="/hello/blue/red">All</Link></h1>
  <Routes>
  <Route path="/First_Route" element={<FirstRoute/>} />
  <Route path="/:number" element={<Number/>} />
  <Route path="/:string" element={<Word/>} />
  <Route path="/:string/:color/:color" element={<All/>} />
  </Routes>
      
    </div>
  );
}

export default App;
