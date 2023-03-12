import { useState } from "react"
import predictionService from "../../services/prediction"
import CreatePredictions from "../../models/predictions/createpredictions"
import { warning, success } from "../../components/common/toast/toast"

const useCreatePrediction = () =>{
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const [isUploaded, setIsUploaded] = useState(false)

    const createPrediction = async (prediction)=>{
        const newPrediction = new CreatePredictions().toJson(prediction)
        setIsLoading(true)
        setError(false)
        setIsUploaded(false)
        try{
            const res = await predictionService.createPrediction(newPrediction)
            if(!res) throw new Error("Error creating prediction")
            setIsLoading(false)
            setIsUploaded(true)
            success("Prediction created successfully")
        }catch(error){
            setIsLoading(false)
            setError(error)
            warning(error.message)
        }
    }

    return {isLoading, error, isUploaded, setIsUploaded, createPrediction}
}

export default useCreatePrediction