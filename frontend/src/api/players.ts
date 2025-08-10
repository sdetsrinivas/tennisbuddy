import axiosClient from "./axiosClient";

export interface Player {
  id: number;
  name: string;
  rating: number;
}

export const getPlayers = async (): Promise<Player[]> => {
  const res = await axiosClient.get<Player[]>("/players");
  return res.data;
};