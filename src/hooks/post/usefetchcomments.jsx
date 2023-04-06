import { useState, useEffect } from "react";
import Comment from "../../models/comment";
import { warning } from "../../components/common/toast/toast";
import postService from "../../services/post";

const useFetchComments = (id) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [comments, setComments] = useState([]);
  const fetchComments = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await postService.getComments(id);
      if (!res) throw new Error("Error fetching comments");
      const commentsList = await res.map((comment) =>
        new Comment().fromJson(comment)
      );
      setIsLoading(false);
      setComments(commentsList);
    } catch (error) {
      setIsLoading(false);
      setError(error);
      warning(error.message);
    }
  };

  useEffect(() => {
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isLoading, error, comments, fetchComments };
};

export default useFetchComments;
