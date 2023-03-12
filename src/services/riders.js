import authHeader from "./auth-header";
import axios from "axios";

const riderService = {
    followRider: async (id) => {
        return await axios
            .put(`http://ec2-23-20-75-75.compute-1.amazonaws.com/user/follow/${id}`, "", {
                headers: authHeader(),
            })
            .then((res) => {
                return res.data;
            });
    },
    getAllFolowers: async (id) => {
        return await axios
            .get(`http://ec2-23-20-75-75.compute-1.amazonaws.com/riders/${id}/followers`, {
                headers: authHeader(),
            })
            .then((res) => {
                return res.data;
            });
    },
    getAllFollowing: async (id) => {
        return await axios
            .get(`http://ec2-23-20-75-75.compute-1.amazonaws.com/riders/${id}/following`, {
                headers: authHeader(),
            })
            .then((res) => {
                return res.data;
            });
    }

}

export default riderService;