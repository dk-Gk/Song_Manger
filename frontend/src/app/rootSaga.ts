import { all } from 'redux-saga/effects';
import { watchSongs } from '../features/song/songSagas';
import { watchAuth } from '../features/auth/authSaga';


export default function* rootSaga() {
  yield all([
    watchSongs(),
    watchAuth(),
  ]);
}