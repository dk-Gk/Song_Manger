import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";
import { requestCreateSong, requestDeleteSong, requestGetALLSongs, requestGetSongs, requestGetStatistics, requestUpdateSong } from "../../api/songApi";
import { SongsInput } from "../../components/CreateUpdateSong";
import { Song, Statistics } from "../../models/song";
import { createSongFailure, createSongSuccess, deleteSongFailure, deleteSongSuccess, getAllSongsFailure, getAllSongsSuccess, getSongsFailure, getSongsSuccess, getStatisticsSuccess, updateSongFailure, updateSongSuccess } from "./songSlice";


export interface ApiError {
    message: string;
    response: {
      data: {
        message: string;
      }
    }
}

let errorMessage: string = 'An error occurred';

function* fetchSongsSaga() {
    try {
      const songs: Song[] = yield call(requestGetSongs);
      yield put(getSongsSuccess(songs));
    } catch (error) {
        errorMessage = (error as ApiError).response.data.message || errorMessage;
      yield put(getSongsFailure(errorMessage));
    }
  }

  function* fetchAllSongsSaga() {
    try {
      const songs: Song[] = yield call(requestGetALLSongs);
      yield put(getAllSongsSuccess(songs));
    } catch (error) {
        errorMessage = (error as ApiError).response.data.message || errorMessage;
      yield put(getAllSongsFailure(errorMessage));
    }
  }
  
  function* createSongSaga(action: PayloadAction<Partial<Song>>) {
    try {
      const newSong: Song = yield call(requestCreateSong, action.payload);
      yield put(createSongSuccess(newSong));
    } catch (error) {
         errorMessage = (error as ApiError).response.data.message || errorMessage;
      yield put(createSongFailure(errorMessage));
    }
  }
  
  function* updateSongSaga(action: PayloadAction<Partial<SongsInput>>) {
    try {
      const updatedSong: Song = yield call(requestUpdateSong, action.payload);
      yield put(updateSongSuccess(updatedSong));
    } catch (error) {
         errorMessage = (error as ApiError).response.data.message || errorMessage;
      yield put(updateSongFailure(errorMessage));
    }
  }
  
  function* deleteSongSaga(action: PayloadAction<string>) {
    try {
      yield call(requestDeleteSong, action.payload);
      yield put(deleteSongSuccess(action.payload));
    } catch (error) {
         errorMessage = (error as ApiError).response.data.message || errorMessage;
      yield put(deleteSongFailure(errorMessage));
    }
  }
  
  function* fetchStatisticsSaga() {
    try {
      const stat: Statistics = yield call(requestGetStatistics);
      yield put(getStatisticsSuccess(stat));
    } catch (error) {
        errorMessage = (error as ApiError).response.data.message || errorMessage;
      yield put(getAllSongsFailure(errorMessage));
    }
  }

  export function* watchSongs() {
    yield takeEvery('song/getSongsStart', fetchSongsSaga);
    yield takeEvery('song/getAllSongsStart', fetchAllSongsSaga);
    yield takeEvery('song/createSongStart', createSongSaga);
    yield takeEvery('song/updateSongStart', updateSongSaga);
    yield takeEvery('song/deleteSongStart', deleteSongSaga);
    yield takeEvery('song/getStatisticsStart', fetchStatisticsSaga);
  }
