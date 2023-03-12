import authHeader from "./auth-header";
import axios from "axios";


const postService = {
  getPosts: async (signal) => {
    return  axios
      .get(`http://ec2-23-20-75-75.compute-1.amazonaws.com/posts/all?filter[skip]=0`, {
        headers: authHeader(),
        cancelToken: signal
      })
      .then((res) => {
        return res.data;
      });
  },
  getSinglePost: async (id) => {
    return await axios
      .get(`http://ec2-23-20-75-75.compute-1.amazonaws.com/posts/${id}`, {
        headers: authHeader(),
      })
      .then((res) => {
        return res.data;
      });
  },
  createPost: async (post) => {
    return await axios
      .post(`http://ec2-23-20-75-75.compute-1.amazonaws.com/posts`, post, {
        headers: authHeader(),
      })
      .then((res) => {
        return res.data;
      });
  },
  updatePost: async (id, post) => {
    return await axios
      .put(
        `http://ec2-23-20-75-75.compute-1.amazonaws.com/posts/${id}`,
        post,
        {
          headers: authHeader(),
        }
      )
      .then((res) => {
        return res.data;
      });
  },
  likePost: async (id) => {
    return await axios
      .put(
        `http://ec2-23-20-75-75.compute-1.amazonaws.com/post/like/${id}`,
        "",
        {
          headers: authHeader(),
        }
      )
      .then((res) => {
        return res.data;
      });
  },
  getLikes: async(id) => {
    return await axios
      .get(`http://ec2-23-20-75-75.compute-1.amazonaws.com/post/likes/${id}`, {
        headers: authHeader(),
      })
      .then((res) => {
        return res.data;
      });
  },
  getComments: async (id) => {
    return await axios
        .get(`http://ec2-23-20-75-75.compute-1.amazonaws.com/comments/${id}`, {
            headers: authHeader(),
        })
        .then((res) => {
            return res.data;
        });
    },
  createComment: async(id, comment) => {
    return await axios
        .put(`http://ec2-23-20-75-75.compute-1.amazonaws.com/comments/${id}`, comment, {
            headers: authHeader(),
        })
        .then((res) => {
            return res.data;
        });
    },
  deletePost: async (id) => {
    return await axios
      .delete(`http://ec2-23-20-75-75.compute-1.amazonaws.com/post/${id}`, {
        headers: authHeader(),
      })
      .then((res) => {
        return res.data;
      });
  }
};

export default postService;
