import authHeader from "./auth-header";
import axios from "axios";


const predictionService = {
    getPrediction: async (id) => {
        return await axios
            .get(`http://ec2-23-20-75-75.compute-1.amazonaws.com/signals/${id}`, {
                headers: authHeader(),
            })
            .then((res) => {
                return res.data;
            });
    },
    getPredictions: async () => {
        return await axios
            .get(`http://ec2-23-20-75-75.compute-1.amazonaws.com/signals`, {
                headers: authHeader(),
            })
            .then((res) => {
                return res.data;
            });
    },
    createPrediction: async (prediction) => {
        return await axios
            .post(`http://ec2-23-20-75-75.compute-1.amazonaws.com/signals`, prediction, {
                headers: authHeader(),
            })
            .then((res) => {
                return res.data;
            });
    },
    deletePrediction: async (id) => {
        return await axios
            .delete(`http://ec2-23-20-75-75.compute-1.amazonaws.com/signals/${id}`, {
                headers: authHeader(),
            })
            .then((res) => {
                return res.data;
            });
    },
    getComments: async (id) => {
        return await axios
        .get(`http://ec2-23-20-75-75.compute-1.amazonaws.com/comments/${id}`, {
            headers: authHeader(),
        })
        .then((res) => {
            return res.data;
        });
    },
    createComment: async(id, comment) => {
        return await axios
        .put(`http://ec2-23-20-75-75.compute-1.amazonaws.com/comments/${id}`, comment, {
            headers: authHeader(),
        })
        .then((res) => {
            return res.data;
        });
    }
}

export default predictionService;