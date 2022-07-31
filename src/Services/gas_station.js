import api from "./api";

export const getAllGasStations = async () => {
  const gasStations = await api.get("/gas_station");
  return gasStations;
};
