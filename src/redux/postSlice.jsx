import { createSlice } from "@reduxjs/toolkit";
import postImg from "../assets/images/post/cryptoIm.jpg";
import postImg1 from "../assets/images/post/crptop.jpg";

const initialState = {
  posts: [
    {
      fullname: "Sam Gregory",
      updated_at: new Date("2023-02-19T12:59-0500"),
      user_id: "788488",
      description:
        " Chainlink has released a beta of Chainlink Functions, a platform which will allow smart contracts to connect to any Web2 APIs. Functions will allow Web3 developers to more effectively leverage and utilize existing Web2 infrastructure - something that has been missing so far in Web3..",
      img: postImg,
      comment: "15",
    },
    {
      fullname: "Unegbu Kingsley",
      updated_at: new Date("2023-02-19T12:59-0500"),
      user_id: "788488",
      description:
        "  The country’s Insurance Regulatory and Development Authority of India (IRDAI) confirmed it would explore using blockchain and Web3 technologies to improve its insurance sector..",
      img: postImg1,
      comment: "15",
    },
    {
      fullname: "John Simonie",
      updated_at: new Date("2023-02-19T12:59-0500"),
      user_id: "788488",
      description:
        "  The country’s Insurance Regulatory and Development Authority of India (IRDAI) confirmed it would explore using blockchain and Web3 technologies to improve its insurance sector..",
      img: postImg1,
      comment: "15",
    },
  ],
  authPass: [{ email: "test@test.com", password: "password12345" }],
  isLoading: false,
};

export const postSlice = createSlice({
  name: "Userposts",
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
