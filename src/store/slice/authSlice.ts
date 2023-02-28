import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';


type AuthState = {
    token: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    role: string;
};

const initialState: AuthState = {
    token: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: ""
};

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        login: (state, action: PayloadAction<AuthState>) => {
            state.token = action.payload.token;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.email = action.payload.email;
            state.phone = action.payload.phone;
            state.role = action.payload.role;
        },
        logout: (state) => {
            state.token = "";
            state.firstName = "";
            state.lastName = "";
            state.email = "";
            state.phone = "";
            state.role = "";
        }
    },
});

export const { login, logout } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;

export const authReducer = authSlice.reducer;