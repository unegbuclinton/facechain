import { useParams } from "react-router-dom";
import PostCard from "../post-card";
import useFetchSinglePost from "../../../hooks/post/usefetchsinglepost";
import SkeletonPosts from "../../skeletons/skeletonposts";

const SinglePost = () => {
  const { id } = useParams();
  const { isLoading, post } = useFetchSinglePost(id);
  return (
    <>
      {isLoading ? <SkeletonPosts /> : null}
      {post && <PostCard data={post} />}
    </>
  );
};

export default SinglePost;
