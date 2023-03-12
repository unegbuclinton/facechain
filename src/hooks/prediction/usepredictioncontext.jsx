import { PredictionContext } from "../../context/predictioncontext";
import { useContext } from "react";


export const usePredictionContext = () => {
    const context = useContext(PredictionContext);
    if (!context) {
      throw new Error(
        "usePredictionContext must be used within a PredictionContextProvider"
      );
    }
  
    return context;
  };
  