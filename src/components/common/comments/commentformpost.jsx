import avatar from "../../../assets/images/header/avatar.jpg";
import useCreateComment from "../../../hooks/post/usecreatecomment";
import { useState } from "react";
import { warning } from "../toast/toast";

import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CommentFormPost = ({ post }) => {
  const { isLoading, createComment } = useCreateComment();
  const [description, setDescription] = useState("");

  const submitComment = () => {
    if (description !== "") {
      createComment(post.id, description);
      // action()
      // setDescription('')
    } else {
      warning("Please write a comment");
    }
  };
  return (
    <div
      className="mt-4 flex border-t-2
        border-grey26 pt-8"
    >
      <div className="mr-4">
        <img
          className="w-14 h-14 object-cover rounded-full flex-none"
          src={avatar}
          alt=""
        />
      </div>
      <div className="flex flex-col basis-full ">
        <textarea
          className="bg-[#2F3033] px-4 py-4 rounded-md"
          name=""
          id=""
          cols="20"
          rows="2"
          placeholder="Write your comment"
          onInput={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button className="bg-primary py-4 mt-4" onClick={submitComment}>
          {isLoading ? (
            <FontAwesomeIcon
              icon={faSpinner}
              className=" cursor-pointer fa-spin fa-pulse"
            />
          ) : (
            "Comment"
          )}
        </button>
      </div>
    </div>
  );
};

export default CommentFormPost;
