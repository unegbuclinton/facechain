import authHeader from "./auth-header";
import axios from "axios";

const familyPoolService = {
    createFamilyPool: async (newPool) => {
        return await axios
            .post(`http://ec2-18-212-167-226.compute-1.amazonaws.com/pool`, newPool, {
                headers: authHeader(),
            })
            .then((res) => {
                return res.data;
            });
    },
}

export default familyPoolService;
