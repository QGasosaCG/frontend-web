import api from "./api";

export const getAllFuels = async () => {
  const fuels = api.get("/fuels");
  return fuels;
};
