import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [stateCar, setStateCar] = useState(false);
  const encenderApagar = () => {
    // actualizar el estado con setStateCar
    // con ! le digo que mando lo contrario del estado
    //setStateCar(!stateCar);
    // esto seria si pasamos esta funcion a otro componente y ese componente
    // no tuviera acceso al estado actual osea a la funcion que cambia el estado
    setStateCar((preValue) => !preValue); // mandamos lo contrario del valor actual
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
