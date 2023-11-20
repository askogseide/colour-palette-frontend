import './App.css';
import { Route, Routes, Link } from "react-router-dom";
import {useState, useEffect} from 'react';
import {Deploy} from './components/deploy/Deploy';

import Homepage from "./pages/Homepage";
import CreatePalette from "./pages/CreatePalette";
import SavedPalettes from "./pages/SavedPalettes";

import styles from "./App.css";

function App() {
  const [state, setState] = useState({});

  useEffect(() => {
    fetch("/test").then(response => {
      if(response.status === 200){
        return response.json()
      }
    }).then(data => setState(data))
    .then(error => console.log("error " + error))
  }, [])

  return (
    <div className="App">

      <header className="NavigationBar-header">
        <div>Palette Creator</div>
        <ul>
          <li className="App-link">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/createpalette">Create Palette</Link>
          </li>
          <li>
            <Link to="/savedpalettes">Saved Palettes</Link>
          </li>
        </ul>
      </header>
      

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/createpalette" element={<CreatePalette />} />
        <Route path="/savedpalettes" element={<SavedPalettes />} />
      </Routes>
    (False && <div className="App">
      <Deploy prop={state}/>
    </div>)
    </div>
  );
}

export default App;
