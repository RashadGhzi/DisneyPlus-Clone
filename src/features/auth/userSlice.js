import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  name: "",
  email: "",
  photoUrl: "",
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photoUrl = action.payload.photoUrl;
    },

    setSignOutState: (state) => {
      state.name = "";
      state.email = "";
      state.photoUrl = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserLoginDetails, setSignOutState } = authSlice.actions;

export default authSlice.reducer;
export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectPhotoUrl = (state) => state.user.photoUrl;
