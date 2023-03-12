import { useState } from "react";
import postService from "../../services/post";
import { warning, success } from "../../components/common/toast/toast";
import CreatePost from "../../models/posts/createpost";

const useCreatePost = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isUploaded, setIsUploaded] = useState(false);
    const [error, setError] = useState(null);

   const createPost = async (description) => {
        const post = {
            "type": "normal",
            "description": description ,
            "content":{
                "audio":"",
                "vidoe":"",
            },
            "commenting":true
        }
        const newPost = new CreatePost().toJson(post);
        setIsLoading(true);
        setIsUploaded(false);
        setError(null);
        try {
            const res = await postService.createPost(newPost);
            if(!res) throw new Error("Error creating post");
            setIsLoading(false);
            setIsUploaded(true)
            success("Post created successfully");
        } catch (error) {
            setIsLoading(false);
            setError(error);
            warning(error.message);
        }
   }
    return { isLoading, error, isUploaded, createPost };
}

export default useCreatePost;