import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../models/user';

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;
}
const storedUserInfo = localStorage.getItem('user');

const initialState: AuthState = {
    user: storedUserInfo !== null ? JSON.parse(storedUserInfo) : null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        registerStart(state, action:PayloadAction<Partial<User>>) {
            state.isLoading = true;
            state.error = null;
        },
        registerSuccess(state, action: PayloadAction<User>) {
            state.isLoading = false;
            state.isAuthenticated = true;
            state.error = null;
            state.user = action.payload;
        },
        registerFailure(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },

        updateUserStart(state, action: PayloadAction<User>) {
            state.isLoading = true;
            state.error = null;
        },
        updateUserSuccess(state, action: PayloadAction<User>) {
            state.isLoading = false;
            state.user = {...action.payload};
            state.error = null;
        },
        updateUserFailure(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        loginStart(state, action:PayloadAction<Partial<User>>) {
            state.isLoading = true;
            state.error = null;
        },
        loginSuccess(state, action) {
            state.isLoading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
            state.error = null;
        },
        loginFailure(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        logoutStart(state) {
            state.isLoading = true;
            state.error = null;
        },
        logoutSuccess(state) {
            state.isLoading = false;
            state.isAuthenticated = false;
            state.user = null;
            state.error = null;
        },
        logoutFailure(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const {
    loginStart,
    loginSuccess,
    loginFailure,
    logoutStart,
    logoutSuccess,
    logoutFailure,
    registerStart,
    registerSuccess,
    registerFailure,
    updateUserStart,
    updateUserSuccess,
    updateUserFailure, } = authSlice.actions;

export default authSlice.reducer;