import avatar from "../../../assets/images/header/avatar.jpg";
import whiteHeart from "../../../assets/images/post/heart.svg";
import Moment from "react-moment";
const CommentCard = ({ comment }) => {
  const commentList = comment.map((comment, index) => {
    return (
      <div className="flex justify-between items-center mb-8" key={index}>
        <div className="flex">
          <div className="mr-4">
            <img
              className="w-14 h-14 object-cover rounded-full"
              src={avatar}
              alt=""
            />
          </div>
          <div>
            <p className="text-primary mb-1">{comment.user.fullname}</p>
            <p>{comment.content}</p>
            <p className="text-xs mt-3 text-[#BFBFC3]">
              <Moment fromNow>{comment.created_at}</Moment>
            </p>
          </div>
        </div>
        <div>
          <img src={whiteHeart} alt="" />
        </div>
      </div>
    );
  });

  return <>{commentList}</>;
};

export default CommentCard;
