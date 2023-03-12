import { useState} from "react";
import { warning} from "../../components/common/toast/toast";
import riderService from "../../services/riders";

const useFollowRider = () => {
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [isFollowed, setIsFollowed] = useState(false);

    const followRider = async (id) => {
        setIsLoading(true);
        setError(null);
        setIsFollowed(false);
        try {
            const res = await riderService.followRider(id);
            if (!res) throw new Error("Error Following Rider");
            setIsLoading(false);
            setIsFollowed(true);
            setError(null);
        } catch (error) {
            setIsLoading(false);
            setError(error);
            warning(error.message);
        }
    }

	return { isLoading, error, isFollowed, followRider };
};

export default useFollowRider;
