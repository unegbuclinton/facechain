import { useState, useEffect } from "react";
import { warning, success } from "../../components/common/toast/toast";
import postService from "../../services/post";
import Like from "../../models/likes/like";

const useFetchLikes = (id) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [likes, setLikes] = useState([]);
    const fetchLikes = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const res = await postService.getLikes(id);
            if (!res) throw new Error("Error fetching likes");
            const likeList = await res.map((like) => new Like().fromJson(like));
            setIsLoading(false);
            setLikes(likeList);
        } catch (error) {
            console.log(error)
            setIsLoading(false);
            setError(error);
            warning(error.message);
        }
    };

    return { likes , fetchLikes};
};

export default useFetchLikes;
