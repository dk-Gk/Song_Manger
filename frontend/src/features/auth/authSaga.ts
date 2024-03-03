import { takeLatest, call, put, all } from 'redux-saga/effects';
import { requestLogin, requestLogout, requestRegister, requestUpdateUser, } from '../../api/authApi';
import { loginStart, loginSuccess, loginFailure, logoutSuccess, logoutFailure, registerSuccess, registerStart, registerFailure, updateUserStart, updateUserSuccess, updateUserFailure, logoutStart} from './authSlice';
import { User } from '../../models/user';
import { ApiError } from '../song/songSagas';
import { PayloadAction } from '@reduxjs/toolkit';


let errorMessage: string = 'An error occurred';

function* registerSaga(action: PayloadAction<Partial<User>>) {
  try {
    const user: User = yield call(requestRegister, action.payload);
    yield put(registerSuccess(user));
  } catch (error) {
    console.log("the error", error)
    errorMessage = (error as ApiError).response.data.message || errorMessage;
    yield put(registerFailure(errorMessage));
  }
}

// Define saga for updating user information
function* updateUserSaga(action: PayloadAction<Partial<User>>) {
  try {
    const updatedUser: User = yield call(requestUpdateUser, action.payload);
    yield put(updateUserSuccess(updatedUser));
  } catch (error) {
    errorMessage = (error as ApiError).response.data.message || errorMessage;
    yield put(updateUserFailure(errorMessage));
  }
}

function* loginSaga(action: PayloadAction<Partial<User>>) {
  try {
    console.log("Hi from loginSaga");
    const user: User = yield call(requestLogin, action.payload);
    console.log("userdata = ", user)
    yield put(loginSuccess(user));
  } catch (error) {
    console.log("the error", error)
    errorMessage = (error as ApiError).response.data.message || errorMessage;
    yield put(loginFailure(errorMessage));
  }
}

function* logoutSaga() {
  try {
    yield call(requestLogout);
    yield put(logoutSuccess());
  } catch (error) {
    errorMessage = (error as ApiError).response.data.message || errorMessage;
    yield put(logoutFailure(errorMessage));
  }
}

export function* watchAuth() {
  yield all([
    takeLatest(loginStart.type, loginSaga),
    takeLatest(logoutStart.type, logoutSaga),
    takeLatest(registerStart.type, registerSaga),
    takeLatest(updateUserStart.type, updateUserSaga),
  ]);
}