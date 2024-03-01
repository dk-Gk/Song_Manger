import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../models/user';


// Define the initial state
interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;
}
const storedUserInfo = localStorage.getItem('userInfo');

const initialState: AuthState = {
    user: storedUserInfo !== null ? JSON.parse(storedUserInfo) : null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
};

// Create a slice
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // setCredentials(state, action) {
        //     state.userInfo = action.payload;
        //     localStorage.setItem('uerInfo', JSON.stringify(action.payload));
        // },
        registerStart(state, action:PayloadAction<Partial<User>>) {
            state.isLoading = true;
            state.error = null;
        },
        registerSuccess(state, action: PayloadAction<User>) {
            state.isLoading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        registerFailure(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },

        updateUserStart(state) {
            state.isLoading = true;
            state.error = null;
        },
        updateUserSuccess(state, action: PayloadAction<User>) {
            state.isLoading = false;
            state.user = action.payload;
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
            localStorage.setItem('userInfo', JSON.stringify(action.payload));
            console.log("from lohin succes ", localStorage.getItem('userInfo') );
        },
        loginFailure(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        logout(state) {
            state.isLoading = true;
            state.error = null;
        },
        logoutSuccess(state) {
            state.isLoading = false;
            state.isAuthenticated = false;
            state.user = null;
            localStorage.removeItem('userInfo');
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
    logout,
    logoutSuccess,
    logoutFailure,
    registerStart,
    registerSuccess,
    registerFailure,
    updateUserStart,
    updateUserSuccess,
    updateUserFailure, } = authSlice.actions;

export default authSlice.reducer;





// import { createSlice } from "@reduxjs/toolkit"

// type Auth = {
//     _id: string,
//     name: string,
//     email: string,
// }

// type authState = {
//     userInfo: Auth[]
// }

// const initialState: authState = {
//     userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : []
// }

// const authSlice = createSlice({
//     name: 'auth',
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