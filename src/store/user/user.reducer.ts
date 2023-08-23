import { createSlice } from "@reduxjs/toolkit";
import { User } from "firebase/auth"; // Adjust the import path accordingly
import { PayloadAction } from "@reduxjs/toolkit";
export interface userInterface {
  currentUser: User | null;
}

const initialState: userInterface = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setCurrentUser(state, action: PayloadAction<User | null>) {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
