import { createSlice } from "@reduxjs/toolkit";

const storedUser = JSON.parse(localStorage.getItem("user"))
const initialState = {
   user: storedUser|| null,
};

const userSlice = createSlice({
   name: "user",
   initialState,

   reducers: {
      login: (state, action) => {
         state.user = action.payload;
         localStorage.setItem("user", JSON  .stringify(action.payload));
      },

      logout: (state) => {
         state.user = null;
         localStorage.removeItem("user");
      },

      updateProfilePic: (state, action) => {
         if (state.user) {
           state.user.profilePic = action.payload; 
           localStorage.setItem("user", JSON.stringify(state.user));
       }
      },

      setUserData: (state, action) => {
         state.userData = action.payload;
         localStorage.setItem("userData", JSON.stringify(action.payload));
     },
   },
});

export const { login, logout,updateProfilePic,setUserData } = userSlice.actions;
export default userSlice.reducer;
