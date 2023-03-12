import { useState} from "react";
import { warning, success } from "../../components/common/toast/toast";
import postService from "../../services/post";


const useDeletePost = ()=>{
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);
    const deletePost = async (id) => {
        setIsLoading(true);
        setIsDeleted(false);
        setError(null);
        try {
            const res = await postService.deletePost(id);
            if (!res) { 
                setIsLoading(false);
                setIsDeleted(true)
                success("Post deleted successfully");
            }else{
                throw new Error("Error deleting posts");
            }
        } catch (error) {
            setIsDeleted(false)
            setIsLoading(false);
            setError(error);
            warning(error.message);
        }
    };

    return { isLoading, error, isDeleted, deletePost };
}

export default useDeletePost;
