import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify/dist";

const initialState = {
  authPass: [
    { fullname: "Tests", email: "test@test.com", password: "Password12345%" },
  ],
  isLoading: false,
  user: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    createNewUser: (state, action) => {
      const { fullname, email, password } = action.payload;
      state.authPass.map((item) => {
        if (item.email === email) {
          return toast.error("User already exist");
        } else {
          return state.authPass.push({ fullname, email, password });
        }
      });
    },
    loggedInUser: (state, action) => {
      const { email } = action.payload;
      state.authPass.find((user, i) => {
        if (user.email === email) {
          state.user = {
            userName: state.authPass[i].fullname,
            userEmail: state.authPass[i].email,
          };

          return true; // stop searching
        }
        return null;
      });
    },
  },

  extraReducers: (builder) => {},
});

export const { createNewUser, loggedInUser } = authSlice.actions;
export default authSlice.reducer;
