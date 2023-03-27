import { useState, useEffect } from "react";
import Predictions from "../../models/predictions/predictions";
import { warning } from "../../components/common/toast/toast";
import predictionService from "../../services/prediction";

const useFetchSinglePrediction = (id) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const fetchPrediction = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await predictionService.getPrediction(id);
      if (!res) throw new Error("Error fetching prediction");
      const predictions = await new Predictions().fromJson(res);
      setIsLoading(false);
      setPrediction(predictions);
    } catch (error) {
      setIsLoading(false);
      setError(error);
      warning(error.message);
    }
  };

  useEffect(() => {
    fetchPrediction();
  });

  return { isLoading, error, prediction };
};

export default useFetchSinglePrediction;
