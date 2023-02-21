import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type SearchState = {
    category: string;
    place: string;
    date?: Date;
};

const initialState: SearchState = {
    category: "",
    place: "",
    date: undefined,
};

export const searchSlice = createSlice({
    name: "search",
    initialState: initialState,
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload;
        },
        setPlace: (state, action) => {
            state.place = action.payload;
        },
        setDate: (state, action) => {
            state.date = action.payload;
        },
        resetSearch: (state) => {
            state.category = "";
            state.place = "";
            state.date = undefined;
        }
    },
});

export const { setCategory, setPlace, setDate, resetSearch } = searchSlice.actions;
export const selectSearch = (state: RootState) => state.search;

export const searchReducer = searchSlice.reducer;

