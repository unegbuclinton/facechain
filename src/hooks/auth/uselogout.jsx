import { useAuthContext } from "./useauthcontext";
import { useEffect, useState } from "react";
import AuthService from "../../services/auth";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
    const naviagte = useNavigate();
    const [isAborted, setIsAborted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { dispatch } = useAuthContext();

    const logout = async () => {
        setIsLoading(true);
        setError(null);

        try {
            await AuthService.logout();

            dispatch({ type: "LOGOUT" });

            if(!isAborted){
               setIsLoading(false);
               setError(null);
               naviagte("/home");
            }
        } catch (error) {
            if(!isAborted){
                setError(error);
                setIsLoading(false);
            }
        }
    }

    useEffect(() => {
        return () => {
            setIsAborted(true);
        }
    }, [])

    return { isLoading, error, logout };
}