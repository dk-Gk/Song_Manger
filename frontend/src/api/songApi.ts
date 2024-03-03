import axios from 'axios';
import { Song } from '../models/song';

const BASE_URL = 'http://localhost:5000/api/songs';

axios.defaults.withCredentials = true;
export const requestGetSongs = async () => {
  const response = await axios.get(`${BASE_URL}/`);
  return response.data;
};

export const requestGetALLSongs = async () => {
  const response = await axios.get(`${BASE_URL}/all`);
  return response.data;
};

export const requestCreateSong = async (newSong: Partial<Song>) => {
  const response = await axios.post(`${BASE_URL}/`, newSong);
  return response.data;
};

export const requestUpdateSong = async (updatedSong: Partial<Song>) => {
  const response = await axios.put(`${BASE_URL}/${updatedSong._id}`, updatedSong);
  return response.data;
};

export const requestDeleteSong = async (songId: string) => {
  const response = await axios.delete(`${BASE_URL}/${songId}`);
  return response.data;
};

export const requestGetStatistics = async () => {
  const response = await axios.get(`${BASE_URL}/statistics`);
  return response.data;
};