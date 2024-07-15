import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify/dist'

const initialState = {
  authPass: [
    { fullname: 'Tests', email: 'test@test.com', password: 'Password12345%' },
  ],
  isLoading: false,
  user: {},
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    createNewUser: (state, action) => {
      const { fullname, email, password } = action.payload
      state.authPass.map((item) => {
        if (item.email === email) {
          return toast.error('User already exist')
        } else {
          return state.authPass.push({ fullname, email, password })
        }
      })
    },
    loggedInUser: (state, action) => {
      const { email, password } = action.payload
      const user =
        state.authPass[0].user === email &&
        state.authPass[0].password === password
      if (user) {
        state.user = {
          userName: state.authPass[0].fullname,
          userEmail: state.authPass[0].email,
        }
      }
      return
      // state.authPass.find((user, i) => {
      //   if (user.email === email) {
      //     state.user = {
      //       userName: state.authPass[i].fullname,
      //       userEmail: state.authPass[i].email,
      //     };

      //     return true; // stop searching
      //   }
      //   return null;
      // });
    },
  },

  extraReducers: (builder) => {},
})

export const { createNewUser, loggedInUser } = authSlice.actions
export default authSlice.reducer
