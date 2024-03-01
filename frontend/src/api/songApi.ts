import axios from 'axios';
import { Song } from '../models/song';

// Base URL of your backend server
const BASE_URL = 'http://your-backend-url/api';

// Function to fetch all songs
export const requestGetSongs = async () => {
  const response = await axios.get(`${BASE_URL}/songs`);
  return response.data;
};

// Function to create a new song
export const requestCreateSong = async (newSong: Partial<Song>) => {
  const response = await axios.post(`${BASE_URL}/songs`, newSong);
  return response.data;
};

// Function to update an existing song
export const requestUpdateSong = async (updatedSong: Song) => {
  const response = await axios.put(`${BASE_URL}/songs/${updatedSong._id}`, updatedSong);
  return response.data;
};

// Function to delete a song
export const requestDeleteSong = async (songId: string) => {
  const response = await axios.delete(`${BASE_URL}/songs/${songId}`);
  return response.data;
};



// import axios from 'axios'

// export function requestGetSong() {
//     return axios.request({
//         method: "get",
//         url: ""
//     })
// }