import logo from './logo.svg';
import './App.css';
import Cycles from './hooks/Cycles';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Cycles></Cycles>
      </header>
    </div>
  );
}

export default App;
