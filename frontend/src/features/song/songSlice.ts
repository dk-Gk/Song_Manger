import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Song, Statistics } from '../../models/song';
import { SongsInput } from '../../components/TestCreateUpdateSong';


interface SongState {
  songs: Song[];
  AllSongs: Song[];
  statistics: Statistics | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: SongState = {
  songs: [],
  AllSongs: [],
  statistics: null,
  isLoading: false,
  error: null,
};


const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    getSongsStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    getSongsSuccess(state, action: PayloadAction<Song[]>) {
      state.isLoading = false;
      state.songs = action.payload;
    },
    getSongsFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    getAllSongsStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    getAllSongsSuccess(state, action: PayloadAction<Song[]>) {
      state.isLoading = false;
      state.AllSongs = action.payload;
    },
    getAllSongsFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    createSongStart(state, action:PayloadAction<Partial<Song>>) {
      state.isLoading = true;
      state.error = null;
    },
    createSongSuccess(state, action: PayloadAction<Song>) {
      state.isLoading = false;
      state.songs.push(action.payload);
    },
    createSongFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    updateSongStart(state, action: PayloadAction<Song>) {
      state.isLoading = true;
      state.error = null;
    },
    updateSongSuccess(state, action: PayloadAction<Song>) {
      state.isLoading = false;
      const updatedIndex = state.songs.findIndex(song => song._id === action.payload._id);
      console.log('updatesong, updateIndex= ',updatedIndex);
      if (updatedIndex !== -1) {
        state.songs[updatedIndex] = action.payload;
      }
    },
    updateSongFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    deleteSongStart(state, action: PayloadAction<string>) {
      state.isLoading = true;
      state.error = null;
    },
    deleteSongSuccess(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.songs = state.songs.filter(song => song._id !== action.payload);
    },
    deleteSongFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    getStatisticsStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    getStatisticsSuccess(state, action: PayloadAction<Statistics>) {
      state.isLoading = false;
      state.statistics = action.payload;
    },
    getStatisticsFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getSongsStart,
  getSongsSuccess,
  getSongsFailure,
  getAllSongsStart,
  getAllSongsSuccess,
  getAllSongsFailure,
  createSongStart,
  createSongSuccess,
  createSongFailure,
  updateSongStart,
  updateSongSuccess,
  updateSongFailure,
  deleteSongStart,
  deleteSongSuccess,
  deleteSongFailure,
  getStatisticsStart,
  getStatisticsSuccess,
  getStatisticsFailure,
} = songSlice.actions;

export default songSlice.reducer;




// import { createSlice } from '@reduxjs/toolkit'

// type Song = {
//     title: string
//     artist: string
//     album: string
//     genre: string
//     songUrl: string
// }

// type songState = {
//     songs: Song[],
//     isLoading: boolean,
//     error: string 
// }

// const initialState: songState = {
//     songs: [],
//     isLoading: false,
//     error: ''
// }

// const songSlice = createSlice({
//     name: 'song',
//     initialState,
//     reducers: {
//         getSongsFetch: (state) => {
//             state.isLoading = true;
//         },
//         getSongsSuccess: (state, action) => {
//             state.isLoading = false;
//             state.songs = action.payload;
//             state.error = '';
//         },
//         getSongsFailure: (state, action) => {
//             state.isLoading = false;
//             state.songs = [];
//             state.error = "error occured";

//         }
//     }
// })

// export const { getSongsFetch, getSongsSuccess, getSongsFailure } = songSlice.actions

// export default songSlice.reducer