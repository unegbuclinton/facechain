/**Import Hooks */
import { usePostContext } from "../../hooks/post/usepostcontext";
import useFollowRider from "../../hooks/riders/usefollowrider";

/**Import Dependencies */
import { useState } from "react";
import { warning } from "../common/toast/toast";

/** import helpers */
import copyToClipBoard from "../../helpers/clipboard";

const PublicPost = ({ id }) => {
  const { posts } = usePostContext();
  const [isCopied, setIsCopied] = useState(false);
  const { followRider } = useFollowRider();

  const handleCopyClick = () => {
    copyToClipBoard(posts[id].id, "post")
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      })
      .catch((err) => {
        warning("Failed to copy post link");
      });
  };

  // awaiting implementation and correction of endpoints
  const handleFollowClick = () => {
    followRider(posts[id].user_id);
  };

  return (
    <>
      <div className="app-card more w-full">
        <div
          className="border-b border-[#3E4047] py-3 cursor-pointer"
          onClick={handleFollowClick}
        >
          <p className="text-center">Follow this Rider </p>
        </div>
        <div className="border-b border-[#3E4047] py-3 cursor-pointer">
          <p className="text-red text-center">Block Rider</p>
        </div>
        <div
          className="border-b border-[#3E4047] py-3 cursor-pointer"
          onClick={handleCopyClick}
        >
          {isCopied ? (
            <p className="text-center text-primary">Copied to clipboard</p>
          ) : (
            <p className="text-center">Copy Link</p>
          )}
        </div>
        <div className="py-3 cursor-pointer">
          <p className="text-center">Report</p>
        </div>
      </div>
    </>
  );
};

export default PublicPost;
