import React from "react";
import location from "../../Assets/location-icon.png";
import "./style.css";

export function GasStation({ nome, endereco, combustiveis }) {
  return (
    <body>
      <div class="mid-container">
        <div class="card">
          <div class="top-info">
            <h4>2 notas fiscais</h4>
          </div>
          <h2>{nome}</h2>
          {combustiveis.map((combustivel) => (
            <p>
              `${combustivel.name}: R$ ${combustivel.price}`
            </p>
          ))}
          {/* <p>Gasolina: R$ 7,05</p>
          <p>Etanol: R$ 7,05</p>
          <p>Díesel: R$ 7,05</p> */}
          <div class="location-container">
            <img src={location} alt="Card"></img>
            <h5>{endereco}</h5>
          </div>
        </div>
      </div>
    </body>
  );
}
