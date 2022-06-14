import logo from './logo.svg';
import Header from "./Components/Header/Header";
import ChangeControlDashboard from "./Components/ChangeControlDashboard/ChangeControlDashboard";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="appContainer">

        <ChangeControlDashboard/>
      </div>
    </div>
  );
}

export default App;
