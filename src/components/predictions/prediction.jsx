// Import Component 
import AddMobilePredictionButton from "./addmobilepreditionbutton";
import AddPredictionButton from "./addpredictionbutton";
import PredictionFilter from "./predictionfilter/filter";
import PredictionList from "./predictionList";
import EmptyPost from "../posts/emptypost";
import SkeletonPredictions from "../skeletons/skeletonpredictions";

// Import hooks
import { usePredictionContext } from "../../hooks/prediction/usepredictioncontext";
import { useEffect } from "react";
import useFetchPredictions from "../../hooks/prediction/usefetchpredictions";


const Prediction = () => {
   const { isLoading, source, fetchPredictions } = useFetchPredictions();
   const { predictions } = usePredictionContext();

    useEffect(() => {
        fetchPredictions();
        return ()=> source.cancel('Predictions Unmounted')
    }, []);

    return ( 
        <>
            <PredictionFilter/>
            <AddMobilePredictionButton />
            {isLoading ? 
                <div className='predictions-list w-full flex flex-wrap justify-between'>
                     { [1,2,3,4].map(i => (<SkeletonPredictions key={i}/>)) }
                 </div>
            : null}
            {predictions && predictions.length > 0 ? <PredictionList data={predictions}/> : <EmptyPost/>}
            <AddPredictionButton/>
        </>
       
    );
}
 
export default Prediction;
