/* import image */
import comment from "../../../assets/images/post/comment.svg";

const Comment = ({ comments }) => {
  return (
    <div className="flex items-end cursor-pointer lg:mx-10 ml-5">
      <div className="mr-2">
        <img src={comment} alt="" className="w-4 md:w-auto" />
      </div>
      <div>
        {comments ? (
          <p>
            {comments.length} {comments.length > 1 ? "Comments" : "Comment"}
          </p>
        ) : (
          <p> Comments</p>
        )}
      </div>
    </div>
  );
};

export default Comment;
