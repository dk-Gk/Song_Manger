import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Song } from '../../models/song';


interface SongState {
  songs: Song[];
  isLoading: boolean;
  error: string | null;
}

const initialState: SongState = {
  songs: [],
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
    createSongStart(state) {
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
    updateSongStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    updateSongSuccess(state, action: PayloadAction<Song>) {
      state.isLoading = false;
      const updatedIndex = state.songs.findIndex(song => song._id === action.payload._id);
      if (updatedIndex !== -1) {
        state.songs[updatedIndex] = action.payload;
      }
    },
    updateSongFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    deleteSongStart(state) {
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
  },
});

export const {
  getSongsStart,
  getSongsSuccess,
  getSongsFailure,
  createSongStart,
  createSongSuccess,
  createSongFailure,
  updateSongStart,
  updateSongSuccess,
  updateSongFailure,
  deleteSongStart,
  deleteSongSuccess,
  deleteSongFailure,
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