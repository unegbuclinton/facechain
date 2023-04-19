import { useState, useEffect } from "react";
import Post from "../../models/posts/post";
import { warning } from "../../components/common/toast/toast";
import postService from "../../services/post";

const useFetchSinglePost = (id) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [post, setPost] = useState(null);
  const fetchPosts = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await postService.getSinglePost(id);
      if (!res) throw new Error("Error fetching post");
      const posta = await new Post().fromJson(res);
      setIsLoading(false);
      setPost(posta);
    } catch (error) {
      setIsLoading(false);
      setError(error);
      warning(error.message);
    }
  };

  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isLoading, error, post };
};

export default useFetchSinglePost;
