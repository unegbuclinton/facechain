/**import dependencies */
import { useState } from "react";
import { warning} from "../../components/common/toast/toast";

/**import network services */
import predictionService from "../../services/prediction";

/**Import Models */
import CreateComment from "../../models/comments/createcomment";

const useCreateComment = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

   const createComment = async (id, description) => {
        const comment = {
            "content": description
        }
        const newComment = new CreateComment().toJson(comment);
        setIsLoading(true);
        setError(null);
        try {
            const res = await predictionService.createComment(id, newComment);
            if(!res) throw new Error("Error creating Comment");
            setIsLoading(false);
            window.location.reload(false);
        } catch (error) {
            setIsLoading(false);
            setError(error);
            warning(error.message);
        }
   }
    return { isLoading, error, createComment};
}

export default useCreateComment;