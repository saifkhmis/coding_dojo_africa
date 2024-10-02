import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName={"Doe"} lastName={"Jane"} age={45} HairColor={"Black"}/>
      <PersonCard firstName={"Smith"} lastName={"John"} age={88} HairColor={"Brown"}/>
      <PersonCard firstName={"Fillmore"} lastName={"Millard"} age={50} HairColor={"Brown"}/>
      <PersonCard firstName={"Smith"} lastName={"Maria"} age={62} HairColor={"Brown"} />
    </div>
  );
}

export default App;
