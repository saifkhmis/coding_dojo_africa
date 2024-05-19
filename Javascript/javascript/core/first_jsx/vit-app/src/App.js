import logo from './logo.svg';
import './App.css';

function App() {
  const one =['learn react','climb mt. everest', 'run a marathon','feed the dogs']
  const [first,sec,the,fin]=one;
  return (
    <div className="App">
      <h1>HELLO DOJO !</h1>
      <div>
Things I need to do :
        <ul>
          <li>{first}</li>
          <li>{sec}</li>
          <li>{the}</li>
          <li>{fin}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
