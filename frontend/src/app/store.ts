import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import songReducer from '../features/song/songSlice'
import authReducer from '../features/auth/authSlice';
import rootSaga from './rootSaga';


// Create saga middleware
const saga = createSagaMiddleware();

// Configure the store
export const store = configureStore({
  reducer: {
    song: songReducer,
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ immutableCheck: false, serializableCheck: false, thunk: false }).concat(saga),
  devTools: process.env.NODE_ENV !== 'production',
});

// Run the root saga
saga.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch