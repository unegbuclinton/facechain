import { useState } from "react";
import postService from "../../services/post";
import { warning, success } from "../../components/common/toast/toast";
import CreatePost from "../../models/posts/createpost";

const useUpdatePost = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isUploaded, setIsUploaded] = useState(false);
    const [error, setError] = useState(null);
    const updatePost = async (description, id) => {
        const post = {
            "type": "normal",
            "description": description,
            "content":{
                "audio":"",
                "vidoe":"",
            },
            "commenting":true
        }
        const postUpdate = new CreatePost().toJson(post);
        setIsLoading(true);
        setIsUploaded(false);
        setError(null);
        try {
            const res = await postService.updatePost(id, postUpdate);
            if (!res) {
                setIsLoading(false);
                setIsUploaded(true)
                success("Post updated successfully");
            }else{
                throw new Error("Error updating post");
            } 
        } catch (error) {
            setIsUploaded(false)
            setIsLoading(false);
            setError(error);
            warning(error.message);
        }
    }
    return { isLoading, error, isUploaded, setIsUploaded, updatePost };
}
 
export default useUpdatePost;