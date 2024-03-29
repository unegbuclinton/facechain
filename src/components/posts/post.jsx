/* import dependencies */
import { useEffect, useState } from "react";
import Moment from "react-moment";

import { Link } from "react-router-dom";

/* import components */
import Comment from "../common/comments/comment";
import Like from "./like";
import More from "./more";
import MoreMobile from "./more-mobile";

/* import data */
import avatar from "../../assets/images/header/avatar.jpg";

/* import styling */
import { useSelector } from "react-redux";
import "./post.css";
import SharePost from "./share/share";

const Post = () => {
  const { posts } = useSelector((state) => state.post);
  // check for resolution and set is mobile
  const [isMobile, setIsMobile] = useState(
    window.innerWidth >= 320 && window.innerWidth <= 768
  );

  useEffect(() => {
    setIsMobile(window.innerWidth >= 320 && window.innerWidth <= 768);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.innerWidth]);
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      {posts.map(({ description, img, video, date }, index) => (
        <div
          key={index}
          className="text-white bg-darkGrey m-auto px-5 md:px-10 py-6 rounded-xl mt-4 mb-5"
        >
          <div className="mb-5 flex justify-between">
            <div className="flex">
              <img
                className="w-12 h-12 object-cover rounded-full border-2 mx-2"
                src={avatar}
                alt=""
              />
              <div className="ml-2">
                <p className="text-sm md:text-base font-normal mb-1">
                  {user.userName}
                </p>
                <p className="text-xs font-medium text-greyTextSecondary">
                  <Moment fromNow>{date}</Moment>
                </p>
              </div>
            </div>
            <div className="w-[30%]">
              <div className="flex flex-col justify-end w-full ">
                {!isMobile && (
                  <More
                    user_id={index}
                    // action={startModal}
                    id={index}
                    // action2={startEditModal}
                  />
                )}
                {isMobile && <MoreMobile />}
              </div>
            </div>
          </div>
          <div className="mb-6">
            <p className="text-sm md:text-base">{description}</p>
          </div>
          {img && (
            <div className="w-full mb-6">
              <img className="w-full h-64 object-cover" src={img} alt="" />
            </div>
          )}
          <div className="border-t-4 border-grey26 pt-5 flex justify-between md:justify-center relative text-xs md:text-sm ">
            <Like />
            <Link to={`/post/${index}`}>
              <Comment />
            </Link>
            <SharePost />
          </div>
        </div>
      ))}
      {/* <DeleteModal ref={childRef} postid={postId} /> */}
      {/* <EditPostModal post={postData} ref={editRef} /> */}
    </>
  );
};

export default Post;
