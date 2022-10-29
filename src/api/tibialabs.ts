import { apiTibiaLabs } from "./api";

interface iRashid {
  data: string;
}

export const getRashid = async () => {
  const { data } = await apiTibiaLabs.get<iRashid>("/rashid/city");
  return data;
};

export const getDreamScarBoss = async () => {
  const { data } = await apiTibiaLabs.get<iRashid>("/dreamscar/name");
  return data;
};
