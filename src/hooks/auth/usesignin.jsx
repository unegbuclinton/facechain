import { useEffect, useState } from "react";
import { warning } from "../../components/common/toast/toast";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/auth";

import { useAuthContext } from "./useauthcontext";

const useSignin = () => {
  const navigate = useNavigate();
  const [isAborted, setIsAborted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const signIn = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await AuthService.login(email, password);

      if (!res) throw new Error("Error signing in");

      setIsLoading(false);

      dispatch({ type: "LOGIN", payload: res.data });

      navigate("/home");

      if (!isAborted) {
        setIsLoading(false);
        setError(null);
      }
    } catch (error) {
      if (!isAborted) {
        console.log(error)
        // set error message according to status code
        if (error.response.status === 404) {
          warning("Email or Password is incorrect");
        } else {
          warning("Error signing in");
        }
        setIsLoading(false);
        setError(error.message);
      }
    }
  };

  useEffect(() => {
    return () => {
      setIsAborted(true);
    };
  }, []);

  return { isLoading, error, signIn };
};

export default useSignin;
