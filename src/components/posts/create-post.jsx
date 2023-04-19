/* import react dependencies */
import { useState } from "react";

/* import images */
import photoIcon from "../../assets/images/post/photoIcon.svg";
import videoIcon from "../../assets/images/post/videoIcon.svg";

/* import component */
import CreatPostModal from "./create-post-modal";

/* import styling */
import "./post.css";
import { useSelector } from "react-redux";

const CreatePost = () => {
  const {
    user: { userName },
  } = useSelector((state) => state.auth);

  const [createPostModal, setCreatePostModal] = useState(false);

  const openCreatePostModal = (value) => {
    setCreatePostModal(value);
  };

  return (
    <>
      {createPostModal && (
        <CreatPostModal createPostFunc={openCreatePostModal} />
      )}

      {/* create post web view */}
      <div className="post-card bg-darkGrey m-auto">
        <div className="profile-image">
          <div className="create-post-avater"></div>
        </div>
        <div
          className="bg-[#2f3033] p-4 rounded-md w-full"
          onClick={() => {
            openCreatePostModal(true);
          }}
        >
          <p className="text-[#7e838d]">{`What's on your mind ${userName}`}</p>
        </div>
        <div className="media-actions">
          <div
            className="media-action mb-4"
            onClick={() => {
              openCreatePostModal(true);
            }}
          >
            <img
              src={photoIcon}
              loading="lazy"
              alt=""
              className="media-action-icon"
            />
            <div>Photo</div>
          </div>

          <div
            className="media-action"
            onClick={() => {
              openCreatePostModal(true);
            }}
          >
            <img
              src={videoIcon}
              loading="lazy"
              alt=""
              className="media-action-icon"
            />
            <div>Video</div>
          </div>
        </div>
      </div>

      {/* create postmobile view */}

      <div className="w-full post-card mobile bg-darkGrey m-auto p-6">
        <div className="profile-image mobile">
          <div className="create-post-avater mobile"></div>
        </div>
        <div className="create-post-action-form mobile w-form">
          <div
            className="bg-[#2f3033] p-4 rounded-md w-full"
            onClick={openCreatePostModal}
          >
            <p className="text-[#7e838d] text-xs md:text-base ">
              What's on your mind
            </p>
          </div>
          <div className="flex mt-3">
            <div className="flex w-[48%] items-center">
              <img src={photoIcon} loading="lazy" alt="" className="w-6" />
              <p className="text-[#979797] ml-3 text-xs">Photo</p>
            </div>
            <div className="flex w-[48%] items-center">
              <img src={videoIcon} loading="lazy" alt="" className="w-6" />
              <p className="text-[#979797] ml-3 text-xs">Video</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
