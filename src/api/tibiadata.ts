import { apiTibiaData } from "./api";

export const getCreatures = async () => {
  const response = await apiTibiaData.get("/creatures");
  return response.data;
};

export const getBoss = async () => {
  const response = await apiTibiaData.get("/boostablebosses");
  return response.data;
};
