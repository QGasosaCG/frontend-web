import React, { useEffect, useState } from "react";
import fiscal from "../../Assets/fiscal-icon.png";
import plus from "../../Assets/plus-icon.png";
import { useUserContext } from "../../Hooks/useUserContext";
import { getAllFuels } from "../../Services/fuel";
import { getAllGasStations } from "../../Services/gas_station";
import { GasStation } from "../GasStation";
import { PopUpGasStation } from "../PopUpGasStation";
import "./style.css";

export function GasStationNavigate() {
  const { addPosto, setAddPosto } = useUserContext(false);
  const [postos, setPostos] = useState([]);
  const [combustiveis, setCombustiveis] = useState([]);

  useEffect(() => {
    (async function () {
      const gasStationResponse = await getAllGasStations();
      const fuelsResponse = await getAllFuels();
      setCombustiveis(fuelsResponse.data);
      setPostos(gasStationResponse.data);
    })();
  }, []);

  function adicionaPosto(e) {
    e.preventDefault();
    setAddPosto(!addPosto);
  }

  return (
    <body className="body-gasStationNav">
      {postos.map((posto) => {
        return (
          <GasStation
            nome={posto.gasStation.name}
            endereco={posto.gasStation.address.street}
            combustiveis={posto.fuels}
          />
        );
      })}
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
