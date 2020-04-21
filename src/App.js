import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [stateCar, setStateCar] = useState(false);
  // se crea otro estado
  // va a contar las veces que el usuario le da click al boton
  const [contar, setContar] = useState(0);

  // esto se ejecuta cuando contar se modifique
  useEffect(() => {
    console.log("Total: " + contar);
  }, [contar]); // en [] van las variables que detecte cuando se actualiza para volverse a ejecutarse
  const encenderApagar = () => {
    // actualizar el estado con setStateCar
    // con ! le digo que mando lo contrario del estado
    //setStateCar(!stateCar);
    // esto seria si pasamos esta funcion a otro componente y ese componente
    // no tuviera acceso al estado actual osea a la funcion que cambia el estado
    setStateCar((preValue) => !preValue); // mandamos lo contrario del valor actual
    setContar(contar + 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>El coche esta: {stateCar ? "Encendido" : "Apagado"}</h3>
        <h4>Clicks: {contar}</h4>
        <button onClick={encenderApagar}>Encender / Apagar</button>
      </header>
    </div>
  );
}

export default App;
