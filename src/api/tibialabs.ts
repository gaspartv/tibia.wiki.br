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

export const getCharacterInfo = async (name: string) => {
  return await apiTibiaLabs.get(`/charinfo/${name}`);
};

export const getGuild = async (name: string) => {
  return await apiTibiaLabs.get(`/guildinfo/${name}`);
};

export const getServidor = async (name: string) => {
  return await apiTibiaLabs.get(`/worldinfo/${name}`);
};
