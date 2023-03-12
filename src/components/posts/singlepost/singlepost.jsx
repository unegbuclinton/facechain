import { useParams } from "react-router-dom";
import PostCard from "../post-card";
import useFetchSinglePost from "../../../hooks/post/usefetchsinglepost";
import SkeletonPosts from "../../skeletons/skeletonposts";
import CommentBase from "../../common/comments/commentbase";

const SinglePost = () => {
    const {id} = useParams();
    const { isLoading, error, post } = useFetchSinglePost(id);
    return (
        <>
          {isLoading ? <SkeletonPosts /> : null}
          {post && <PostCard data={post} />} 
         
        </>
   );
}
 
export default SinglePost;