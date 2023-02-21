import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';


type AuthState = {
    token: string;
    user: any;
    isAuthenticated: boolean;
};

const initialState: AuthState = {
    token: "",
    user: {},
    isAuthenticated: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        login: (state, action: PayloadAction<AuthState>) => {
            state.token = action.payload.token;
            state.user = action.payload.user;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.token = "";
            state.user = {};
            state.isAuthenticated = false;
        }
    },
});

export const { login, logout } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;

export const authReducer = authSlice.reducer;