import React from "react";
import location from "../../Assets/location-icon.png";
import "./style.css";

export function GasStation() {
  return (
    <body>
      <div class="mid-container">
        <div class="card">
          <div class="top-info">
            <h4>2 notas fiscais</h4>
          </div>
          <h2>Posto São Luiz</h2>
          <p>Gasolina: R$ 7,05</p>
          <p>Etanol: R$ 7,05</p>
          <p>Díesel: R$ 7,05</p>
          <div class="location-container">
            <img src={location} alt="Card"></img>
            <h5>Avenida Rio Branco, 1502 - Bela Vista</h5>
          </div>
        </div>
      </div>
    </body>
  );
}
