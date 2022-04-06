import './App.css';
import {Comments, Posts, Users} from "./components";


function App() {
  return (
    <div className="App">
        <div>
            <Users/>
            <Posts/>
        </div>
        <div>
            <Comments/>
        </div>
    </div>
  );
}

export default App;
