import React, { useState, useEffect } from "react";
import "./App.css";
import { SmurfsContext } from "./contexts/SmurfsContext";
import SmurfList from './components/SmurfList';
import SmurfForm from './components/SmurfForm';
import axios from 'axios';

function App() {
    const [smurfs, setSmurfs] = useState([]);

    const addSmurf = item => {
      setSmurfs([...smurfs, item])
    }

    useEffect(() => {
      axios.get('http://localhost:3333/smurfs')
        .then(response => {
          console.log(response)
          setSmurfs(response.data);
        })
    }, [])


    return (
      <div className="App">
        <SmurfsContext.Provider value={{smurfs, addSmurf}}>
          <SmurfList smurfs={smurfs} />
          <SmurfForm addSmurf={addSmurf}/>
        </SmurfsContext.Provider>
      </div>
    );
}

export default App;
