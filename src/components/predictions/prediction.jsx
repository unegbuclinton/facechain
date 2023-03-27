// Import Component
import AddMobilePredictionButton from "./addmobilepreditionbutton";
import AddPredictionButton from "./addpredictionbutton";
import PredictionFilter from "./predictionfilter/filter";
import EmptyPost from "../posts/emptypost";
import SkeletonPredictions from "../skeletons/skeletonpredictions";

// Import hooks

import { useState } from "react";
import { useEffect } from "react";
import PredictionList from "./predictionList";

const Prediction = () => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <PredictionFilter />
      <AddMobilePredictionButton />
      {isLoading ? (
        <div className="predictions-list w-full flex flex-wrap justify-between">
          {[1, 2, 3, 4].map((i) => (
            <SkeletonPredictions key={i} />
          ))}
        </div>
      ) : null}

      <PredictionList />

      {/* <EmptyPost /> */}

      <AddPredictionButton />
    </>
  );
};

export default Prediction;
