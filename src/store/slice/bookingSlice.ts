import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

import { IShop, IBenefits } from '../../index.d';

type BookingState = {
    shop: IShop|null;
    benefit: IBenefits|null;
    date: Date|null;
    time: string;
    comment: string;
};

const initialState: BookingState = {
    shop: null,
    benefit: null,
    date: null,
    time: "",
    comment: "",
};

export const bookingSlice = createSlice({
    name: 'booking',
    initialState: initialState,
    reducers: {
        setShop: (state, action: PayloadAction<IShop>) => {
            state.shop = action.payload;
        },
        setBenefit: (state, action: PayloadAction<IBenefits>) => {
            state.benefit = action.payload;
        },
        setDate: (state, action: PayloadAction<Date|null>) => {
            state.date = action.payload;
        },
        setTime: (state, action: PayloadAction<string>) => {
            state.time = action.payload;
        },
        setComment: (state, action: PayloadAction<string>) => {
            state.comment = action.payload;
        },
        resetBooking: (state) => {
            state.shop = null;
            state.benefit = null;
            state.date = null;
            state.time = "";
            state.comment = "";
        }
    },
});

export const { setShop, setBenefit, setDate, setTime, setComment, resetBooking } = bookingSlice.actions;
export const selectBooking = (state: RootState) => state.booking;

export const bookingReducer = bookingSlice.reducer;
