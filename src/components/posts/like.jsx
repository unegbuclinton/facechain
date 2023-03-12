/* import react dependencies */
import { useEffect, useState } from 'react';

/* import images */
import whiteHeart from '../../assets/images/post/heart.svg';
import greenHeart from '../../assets/images/post/heartgreen.svg';

/**import hooks */
import useLikePost from '../../hooks/post/uselikepost';

const Like = ({ post, postId }) => {
  const [like, setLike] = useState(false);
  const { likePost, error } = useLikePost();
  const [numberOfLikes, setNumberOfLikes] = useState(null);

  /* fetch likes on mount */
  useEffect(() => {
    // setLike(post?.likes?.some((i) => i.user_id === user.id));
    if (post?.likes) {
      setNumberOfLikes(post.likes.length);
    } else {
      setNumberOfLikes(0);
    }

    return () => {
      setLike(false);
      setNumberOfLikes(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post]);

  /* like post */
  function LikeAction() {
    likePost(postId);
    if (like !== true) {
      setNumberOfLikes(numberOfLikes + 1);
    } else {
      if (!numberOfLikes <= 0) setNumberOfLikes(numberOfLikes - 1);
    }
    setLike((prev) => !prev);
  }

  /* render like component count*/
  useEffect(() => {
    setTimeout(() => {
      if (error) {
        if (like === true) {
          if (numberOfLikes >= 1) {
            setNumberOfLikes(numberOfLikes - 1);
          }
        } else {
          setNumberOfLikes(numberOfLikes + 1);
        }
        setLike((prev) => !prev);
      }
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  return (
    <div
      className="flex items-center cursor-pointer lg:mx-10 ml-5 "
      onClick={LikeAction}
    >
      <div className="mr-1">
        <img
          src={!like ? whiteHeart : greenHeart}
          className="w-4 md:w-auto"
          alt=""
        />
      </div>

      <div className={`flex ${like ? 'text-primary' : null}`}>
        <p className="mr-1">{numberOfLikes === 0 ? ' ' : numberOfLikes}</p>
        <p>{numberOfLikes > 1 ? 'Likes' : 'Like'}</p>
      </div>
    </div>
  );
};

export default Like;
