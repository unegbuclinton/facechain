import { useState } from "react";
import AuthService from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { warning, success } from "../../components/common/toast/toast";

const useSignup = () => {
   const naviagte = useNavigate();
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);

   const signUp = async (fullname, email, username, password) => {
     
        setIsLoading(true);
        setError(null);
    
        try {
            const res = await AuthService.signup(fullname, email, username, password);
            if(!res) throw new Error("Error signing up");
            setIsLoading(false);
            naviagte("/login");
            success("Sign up successful please verify email");

        } catch (error) {
          if(error.response.status === 400){
               warning('User already exists');
           } else {
               warning("Error signing Up");
           }

            setIsLoading(false);
            setError(error);
        }
    
   }

    return { isLoading, error, signUp };

}
 
export default useSignup;