import { useParams } from "react-router-dom";
import useFetchSinglePrediction from "../../../hooks/prediction/usefetchsingleprediction";
import SkeletonSinglePrediction from "../../skeletons/skeletonsingleprediction";
import PredictionCard from "./predictioncard";


const SinglePrediction = () => {
    const {id} = useParams();
    const { isLoading, prediction } = useFetchSinglePrediction(id)
    return (
        <>
          {isLoading ? <SkeletonSinglePrediction /> : null}
          {prediction && <PredictionCard prediction={prediction}/>}
         
        </>
   );
}
 
export default SinglePrediction;