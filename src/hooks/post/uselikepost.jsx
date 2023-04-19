import { useState } from "react";
import { warning } from "../../components/common/toast/toast";
import postService from "../../services/post";

const useLikePost = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const likePost = async (id) => {
    setIsLoading(true);
    setError(null);
    setIsLiked(false);
    try {
      const res = await postService.likePost(id);
      if (!res) throw new Error("Error Liking Post");
      setIsLoading(false);
      setIsLiked(true);
      setError(null);
    } catch (error) {
      setIsLoading(false);
      setError(error);
      warning(error.message);
    }
  };

  return { isLoading, error, isLiked, likePost };
};

export default useLikePost;
