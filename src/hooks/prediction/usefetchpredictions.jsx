import { useState } from "react";
import predictionService from "../../services/prediction";
import Predictions from "../../models/predictions/predictions";
import { usePredictionContext } from "./usepredictioncontext";
import { warning } from "../../components/common/toast/toast";
import axios from "axios";

const useFetchPredictions = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { dispatch } = usePredictionContext();

  const source = axios.CancelToken.source();

  const fetchPredictions = async () => {
    setIsLoading(true);
    setError(false);
    try {
      const res = await predictionService.getPredictions(source.token);
      if (!res) throw new Error("Error fetching predictions");
      const predictions = await res.map((prediction) =>
        new Predictions().fromJson(prediction)
      );
      setIsLoading(false);
      dispatch({
        type: "GET_ALL_PREDICTIONS",
        payload: predictions.sort((a, b) => b.id - a.id),
      });
    } catch (error) {
      if (error.code !== "ERR_CANCELED") {
        setIsLoading(false);
        setError(error);
        warning(error.message);
      }
    }
  };

  return { isLoading, error, source, fetchPredictions };
};

export default useFetchPredictions;
