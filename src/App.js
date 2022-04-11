import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import FirstPage from './Firstpage';
import SecondPage from './Secondpage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<FirstPage/>}/>
          <Route path="/second"  element={<SecondPage/>}/>
        </Routes>

      </Router>
    </div>
  );
}

export default App;