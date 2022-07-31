import React from "react";
import "./style.css";
import plus from "../../Assets/plus-icon.png";
import fiscal from "../../Assets/fiscal-icon.png";
import { GasStation } from "../GasStation";
import { PopUpGasStation } from "../PopUpGasStation";
import { useUserContext } from "../../Hooks/useUserContext";

export function GasStationNavigate() {
  const { addPosto, setAddPosto } = useUserContext(false);

  function adicionaPosto(e) {
    e.preventDefault();
    setAddPosto(!addPosto);
  }
  return (
    <body className="body-gasStationNav">
      {/* <GasStation/> */}{" "}
      {/* componente quebrado e quebrando  o button abaixo*/}
      <div class="gasStationNav-final-container">
        <div class="gasStationNav-note-container">
          <img src={fiscal} alt="Card"></img>
        </div>
        <button
          onClick={adicionaPosto}
          admin={addPosto}
          class="gasStationNav-add-fuel-station-container"
        >
          <img src={plus} alt="Card"></img>
          <h2>Adicionar Posto</h2>
        </button>
      </div>
      <div>{addPosto ? <PopUpGasStation /> : <div />}</div>
    </body>
  );
}
