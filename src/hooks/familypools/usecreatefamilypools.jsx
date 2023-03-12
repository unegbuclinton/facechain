import { useState } from "react";
import familyPoolService from "../../services/familypools";
import { warning, success } from "../../components/common/toast/toast";
import CreateFamilyPool from "../../models/familypools/createfamilypool";

const useCreateFamilyPool = () =>{
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null);

    const createFamilyPool = async (poolData) =>{

        const newPool = new CreateFamilyPool().toJson(poolData)
        setIsLoading(true);
        setError(null);

        try {
            const res = await familyPoolService.createPoola(newPool)
            if(!res) throw new Error('Error creating Family Pool')
            setIsLoading(false)
            setError(null)
            success("Pool created successfully");
        } catch (error) {
            setIsLoading(false);
            setError(error);
            warning(error.message);
       
        }

    }

    return {isLoading, error, createFamilyPool}
}

export default useCreateFamilyPool;