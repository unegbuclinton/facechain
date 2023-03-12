import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  isLoading: false,
};

export const postSlice = createSlice({
  name: 'Userposts',
  initialState,
  reducers: {
    resetPost: () => initialState,
    createNewPost: (state, action) => {
      const { desc, image, video } = action.payload;
      const date = new Date();
      state.posts = [
        ...state.posts,
        { description: desc, img: image, video: video, date: date },
      ];
    },
  },

  extraReducers: (builder) => {},
});

export const { resetPost, createNewPost } = postSlice.actions;
export default postSlice.reducer;
