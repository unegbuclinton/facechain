// Import Dependency
import {
  faEye,
  faEyeSlash,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// Import Assts Images
import googleIcon from "../../assets/images/login/google-icon.svg";
import { loggedInUser } from "../../redux/authSlice";

const LoginForm = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [inputValues, setInputValues] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { authPass } = useSelector((state) => state.auth);
  function toggleVisiblity() {
    setShow((prevShow) => !prevShow);
  }

  const handleChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  function submitForm(e) {
    e.preventDefault();
    setIsLoading(true);
    if (!inputValues) return toast.error("Please fill in all fields");
    const { email, password } = inputValues;
    const authUser = authPass.find(
      (user) => user.email === email && user.password === password
    );
    if (authUser) {
      const data = { email, password };
      dispatch(loggedInUser(data));
      const timer = setTimeout(() => {
        setIsLoading(false);
        navigate("/home");
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      toast.error("Username/Password is not correct");
      setIsLoading(false);
    }
  }

  return (
    <div className="text-white text-center sm:px-40 flex flex-col justify-evenly flex-1">
      <p className="font-buttons text-primary font-bold text-xl">MoonRider</p>
      <h2 className="text-white font-buttons text-3xl font-extrabold">
        Log in
      </h2>
      <form action="" className="auth-form">
        <div className="relative">
          <input
            className="auth-input placeholder-transparent peer"
            name="email"
            type="text"
            placeholder="example@mail.com"
            required
            onChange={handleChange}
          />
          <label className="float-label transition-all">
            Email/Phone number
          </label>
        </div>
        <div className="relative">
          <input
            className="auth-input placeholder-transparent peer"
            name="password"
            type={show ? "text" : "password"}
            placeholder="example@mail.com"
            required
            onChange={handleChange}
          />
          <label className="float-label transition-all">Password</label>
          <FontAwesomeIcon
            icon={show ? faEyeSlash : faEye}
            className="absolute cursor-pointer right-5 top-4"
            onClick={toggleVisiblity}
          />
        </div>
        <Link to="/forgot-password">
          <p className="text-primary text-right mb-5 font-bold text-xs cursor-pointer">
            Forgot Password?
          </p>
        </Link>
        <button
          onClick={submitForm}
          className="bg-primary font-buttons text-black text-lg font-bold w-full rounded-full py-3"
        >
          {isLoading ? (
            <FontAwesomeIcon
              icon={faSpinner}
              className=" cursor-pointer fa-spin fa-pulse"
            />
          ) : (
            "Log In"
          )}
        </button>
      </form>
      <div className="flex flex-row justify-between items-center text-greyTextSecondary">
        <hr className="w-1/3 border-t border-gray-500" />
        <p className="text-xs">Or Sign in With</p>
        <hr className="w-1/3 border-t border-gray-500" />
      </div>
      <div>
        <button className="text-sm text-white sm:text-lg w-full border px-10 rounded-full flex flex-row justify-center py-3">
          <img className="self-center mr-5" src={googleIcon} alt="" />
          Sign in with Google
        </button>
      </div>

      <div>
        <p className="text-xs text-greyTextSecondary">
          {" "}
          Don't have an account?{" "}
          <Link to="/signup">
            <span className="text-primary cursor-pointer">Sign up</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
