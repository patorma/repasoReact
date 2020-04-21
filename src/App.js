import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [stateCar, setStateCar] = useState(false);
  const encenderApagar = () => {
    // actualizar el estado con setStateCar
    // con ! le digo que mando lo contrario del estado
    setStateCar(!stateCar);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>El cooche esta: {stateCar ? "Encendido" : "Apagado"}</h3>
        <button onClick={encenderApagar}>Encender / Apagar</button>
      </header>
    </div>
  );
}

export default App;
