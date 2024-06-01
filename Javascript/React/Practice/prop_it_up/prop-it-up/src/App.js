import logo from './logo.svg';
import PersonCard from './components/PersonCard';
import './App.css';


// const first_name =['doe','smith', 'fillmore','smith']
// const last_name = ['john','jane','jane','jane']
// const age = [45, 88, 50, 62]
// const hair_color = ['brown','black','brown','brown']
function App() {
  return (
    <>
    <PersonCard firstname={'Doe'} lastname={'john'} age={45} />
    <PersonCard firstname={'Smith'} lastname={'jane'} age={88}/>
    <PersonCard firstname={"Fillmore"} lastname={'jane'} age={50} />
    <PersonCard firstname={'Smith'} lastname={'jane'} age={62} />
    </>
  );
}

export default App;
