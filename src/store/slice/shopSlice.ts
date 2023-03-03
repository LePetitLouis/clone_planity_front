import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';


type ShopState = {
  fistName: string,
  lastName: string,
  phone: string,
  email: string,
  password: string,
  name: string,
  address: string,
  city: string,
  country: string,
  zip_code: string,
  description: string,
  id_kind: number[],
};

const initialState: ShopState = {
  fistName: "",
  lastName: "",
  phone: "",
  email: "",
  password: "",
  name: "",
  address: "",
  city: "",
  country: "",
  zip_code: "",
  description: "",
  id_kind: [],
};

export const shopSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        registerShop: (state, action: PayloadAction<ShopState>) => {
          state.fistName = action.payload.fistName,
          state.lastName = action.payload.lastName,
          state.phone = action.payload.phone,
          state.email = action.payload.email,
          state.password = action.payload.password,
          state.name = action.payload.name,
          state.address = action.payload.address,
          state.city = action.payload.city,
          state.country = action.payload.country,
          state.zip_code = action.payload.zip_code,
          state.description = action.payload.description,
          state.id_kind = action.payload.id_kind
        }
    },
});

export const { registerShop } = shopSlice.actions;
export const selectAuth = (state: RootState) => state.auth;

export const authReducer = shopSlice.reducer;