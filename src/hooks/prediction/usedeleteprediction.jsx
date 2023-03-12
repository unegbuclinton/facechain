import { useState} from "react";
import { warning, success } from "../../components/common/toast/toast";
import predictionService from "../../services/prediction";


const useDeletePrediction = ()=>{
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);
    const deletePrediction = async (id) => {
        setIsLoading(true);
        setIsDeleted(false);
        setError(null);
        try {
            const res = await predictionService.deletePrediction(id);
            if (!res) { 
                setIsLoading(false);
                setIsDeleted(true)
                success("Prediction deleted successfully");
            }else{
                throw new Error("Error deleting prediction");
            }
        } catch (error) {
            setIsDeleted(false)
            setIsLoading(false);
            setError(error);
            warning(error.message);
        }
    };

    return { isLoading, error, isDeleted, deletePrediction };
}

export default useDeletePrediction;
