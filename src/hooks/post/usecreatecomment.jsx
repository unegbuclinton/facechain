import { useState } from "react";
import postService from "../../services/post";
import { warning } from "../../components/common/toast/toast";
import CreateComment from "../../models/comments/createcomment";

const useCreateComment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const createComment = async (id, description) => {
    const comment = {
      content: description,
    };
    const newComment = new CreateComment().toJson(comment);
    setIsLoading(true);
    setError(null);
    try {
      const res = await postService.createComment(id, newComment);
      if (!res) throw new Error("Error creating post");
      setIsLoading(false);
      window.location.reload(false);
    } catch (error) {
      setIsLoading(false);
      setError(error);
      warning(error.message);
    }
  };
  return { isLoading, error, createComment };
};

export default useCreateComment;
