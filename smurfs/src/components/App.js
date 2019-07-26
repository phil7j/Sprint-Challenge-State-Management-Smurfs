import React, { useState } from "react";
import { SmurfContext } from './contexts';
import Smurfs from './Smurfs';
import "./App.css";
import { useSmurfsFetch } from './hooks/getSmurfs';
function App() {

   const [smurfs] = useSmurfsFetch('http://localhost:3333/smurfs', [])

   return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfContext.Provider value={smurfs}>
        <Smurfs />
        <Form />
        </SmurfContext.Provider>
      </div>
    );
  }


export default App;
