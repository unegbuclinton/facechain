import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* import react dependencies */
import { useEffect, useRef, useState } from 'react';

import useCreatePost from '../../hooks/post/usecreatepost';
import useFetchPosts from '../../hooks/post/usefetchpost';

/* import images */
import backIcon from '../../assets/images/post/backIcon.svg';
import closeModalIcon from '../../assets/images/post/closeModalIcon.svg';
import mediaCloseIcon from '../../assets/images/post/mediaCloseIcon.svg';
import photoIcon from '../../assets/images/post/photoIcon.svg';
import videoIcon from '../../assets/images/post/videoIcon.svg';

/* import styling */
import { useAuthContext } from '../../hooks/auth/useauthcontext';
import { warning } from '../common/toast/toast';
import './post.css';

const CreatePostModal = ({ createPostFunc }) => {
  const { user } = useAuthContext();
  const photoInput = useRef();
  const videoInput = useRef();
  const [hasPhoto, setHasPhoto] = useState(false);
  const [hasVideo, setHasVideo] = useState(false);
  const [hasText, setHasText] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [previewVideo, setPreviewVideo] = useState(null);
  const [description, setDescription] = useState('');
  const { fetchPosts } = useFetchPosts();

  const { isLoading, isUploaded, createPost } = useCreatePost();
  const closeCreatePostModal = () => {
    createPostFunc(false);
  };

  const openFile = () => {
    photoInput.current.click();
  };

  const openFile2 = () => {
    videoInput.current.click();
  };

  const deletePickedImage = () => {
    setPreviewImage(null);
    setHasPhoto(false);
  };
  const activateBtn = (e) => {
    if (e.target.value === '') {
      setHasText(false);
    } else {
      setHasText(true);
    }
  };

  const deletePickedVideo = () => {
    setPreviewVideo(null);
    setHasVideo(false);
  };

  const pickedFile = (e) => {
    const file = e.target.files[0];
    setPreviewImage(file);
    // previewFile(file);
  };

  // const previewFile = (file) => {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   console.log(reader.readAsDataURL(file));
  //   reader.onloadend = () => {
  //     setPreviewImage(reader.result);
  //     setHasPhoto(true);
  //   };
  // };

  const pickedFile2 = (e) => {
    // let file = e.target.files[0];
    // let blobURL = URL.createObjectURL(file);
    // console.log(blobURL);
    // setPreviewVideo(blobURL);
    // setHasVideo(true);
  };

  const submitPost = () => {
    if (hasText) {
      createPost(description);
    } else {
      warning('Please write something');
    }
  };

  useEffect(() => {
    if (isUploaded) {
      closeCreatePostModal();
      fetchPosts();
    }
    return () => {
      setPreviewImage(null);
      setPreviewVideo(null);
      setHasPhoto(false);
      setHasVideo(false);
      setDescription('');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUploaded, fetchPosts]);

  console.log(previewImage);
  return (
    <>
      {/* create post modal web view */}
      <div className="z-[200] create-post-modal" onClick={closeCreatePostModal}>
        <div className="create-post-card" onClick={(e) => e.stopPropagation()}>
          <div className="create-post-heading">
            <div className="div-block-2">Create A New Post</div>
            <div className="div-block cursor-pointer">
              <img
                onClick={closeCreatePostModal}
                src={closeModalIcon}
                loading="lazy"
                width="31"
                alt=""
              />
            </div>
          </div>
          <div className="post-card modal">
            <div className="profile-image modal mr-2">
              <div className="create-post-avater "></div>
            </div>
            <div className="create-post-action-form w-form">
              <textarea
                rows="6"
                placeholder="What’s on your mind?"
                className="create-post-action-input mb-4"
                onKeyUp={activateBtn}
                onInput={(e) => setDescription(e.target.value)}
              ></textarea>
              {previewImage != null ? (
                <div className="media-card mb-6">
                  <div
                    className="media-content"
                    // style={{ backgroundImage: `url(${previewImage})` }}
                  >
                    <img src={previewImage} alt="" />
                    <img
                      onClick={deletePickedImage}
                      src={mediaCloseIcon}
                      loading="lazy"
                      width="28"
                      alt=""
                      className="media-content-close"
                    />
                  </div>
                </div>
              ) : null}

              {previewVideo != null ? (
                <div className="media-card mb-6">
                  <div
                    className="media-content"
                    style={{ backgroundImage: `url(${previewVideo})` }}
                  >
                    <video src="previewVideo" width="320" height="240" controls>
                      {' '}
                      Your browser does not support the video tag.
                    </video>
                    <img
                      onClick={deletePickedVideo}
                      src={mediaCloseIcon}
                      loading="lazy"
                      width="28"
                      alt=""
                      className="media-content-close"
                    />
                  </div>
                </div>
              ) : null}

              <button
                className={
                  hasVideo || hasPhoto || hasText
                    ? 'create-post-modal-btn active-btn w-full'
                    : 'create-post-modal-btn w-full'
                }
                onClick={submitPost}
              >
                {' '}
                {isLoading ? (
                  <FontAwesomeIcon
                    icon={faSpinner}
                    className=" cursor-pointer fa-spin fa-pulse"
                  />
                ) : (
                  'Post'
                )}
              </button>
            </div>
            <div className="media-actions">
              <div
                onClick={openFile}
                className={
                  hasPhoto
                    ? 'media-action mb-4 active-media'
                    : 'media-action mb-4'
                }
              >
                <img
                  src={photoIcon}
                  loading="lazy"
                  alt=""
                  className="media-action-icon"
                />
                <div>Photo</div>
                <input
                  style={{ display: 'none' }}
                  type="file"
                  ref={photoInput}
                  accept="image/*"
                  onChange={pickedFile}
                />
              </div>
              <div
                onClick={openFile2}
                className={
                  hasVideo ? 'media-action active-media' : 'media-action'
                }
              >
                <img
                  src={videoIcon}
                  loading="lazy"
                  alt=""
                  className="media-action-icon"
                />
                <div>Video</div>
                <input
                  style={{ display: 'none' }}
                  type="file"
                  ref={videoInput}
                  accept="video/mp4,video/x-m4v,video/*"
                  onChange={pickedFile2}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* create post modal mobile view */}

      <div className="z-[200] create-post-mobile-modal">
        <div className="mobile-modal-heading">
          <div className="div-block-3">
            <img
              onClick={closeCreatePostModal}
              src={backIcon}
              loading="lazy"
              alt=""
              className="image"
            />
            <div className="text-block-2">Create Post</div>
          </div>
          <button className="text-block" onClick={submitPost}>
            {isLoading ? (
              <FontAwesomeIcon
                icon={faSpinner}
                className=" cursor-pointer fa-spin fa-pulse"
              />
            ) : (
              'POST'
            )}
          </button>
        </div>
        <div className="post-card create-post-mobile">
          <div className="profile-image create-post">
            <div className="create-post-avater create-post"></div>
            <div className="text-block-3">{user && user.fullname}</div>
          </div>
          <div className="create-post-action-form w-form">
            <form id="email-form">
              <textarea
                placeholder="What’s on your mind?"
                rows="12"
                className="create-post-action-input"
                onKeyUp={activateBtn}
                onInput={(e) => setDescription(e.target.value)}
              ></textarea>
            </form>
          </div>

          {previewImage != null ? (
            <div
              className="media-content mobile"
              style={{ backgroundImage: `url(${previewImage})` }}
            >
              <img
                onClick={deletePickedImage}
                src={mediaCloseIcon}
                loading="lazy"
                width="28"
                alt=""
                className="media-content-close"
              />
            </div>
          ) : null}

          {previewVideo != null ? (
            <div
              className="media-content mobile"
              style={{ backgroundImage: `url(${previewVideo})` }}
            >
              <video src="previewVideo" width="320" height="240" controls>
                {' '}
                Your browser does not support the video tag.
              </video>
              <img
                onClick={deletePickedVideo}
                src={mediaCloseIcon}
                loading="lazy"
                width="28"
                alt=""
                className="media-content-close"
              />
            </div>
          ) : null}
        </div>
        <div className="modal-actions-div">
          <div onClick={openFile} className="action-col-1">
            <img
              src={photoIcon}
              loading="lazy"
              alt=""
              className="media-action-icon"
            />
            <div>Photo</div>
            <input
              style={{ display: 'none' }}
              type="file"
              ref={photoInput}
              accept="image/*"
              onChange={pickedFile}
            />
          </div>
          <div onClick={openFile2} className="action-col-2">
            <img
              src={videoIcon}
              loading="lazy"
              alt=""
              className="media-action-icon"
            />
            <div>Video</div>
            <input
              style={{ display: 'none' }}
              type="file"
              ref={videoInput}
              accept="video/mp4,video/x-m4v,video/*"
              onChange={pickedFile2}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePostModal;
