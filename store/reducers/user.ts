import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserSlice } from "../../@types";
import type { RootState } from "../store";


const initialState: UserSlice = {
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, payload: PayloadAction<UserSlice>) => {
      let data = payload.payload
      console.log(data);
      
      state.email = data.email
      state.user = data.user
      state.auth = data.auth
    },
  },
});

export const { login } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;
