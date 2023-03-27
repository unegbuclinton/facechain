// Import Dependency
import {
  faEye,
  faEyeSlash,
  faCheck,
  faSpinner,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

// Import Asset Images
import googleIcon from "../../assets/images/login/google-icon.svg";

// Import Styling
import "./auth.css";

//import helper functions
import passwordStrength from "./passwordstrength";

//Import Components
import ValidatorPill from "./validatorpill";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { createNewUser } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [show, setShow] = useState(false);
  const [minLength, setMinLength] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [number, setNumber] = useState(false);
  const [special, setSpecial] = useState(false);
  const [showPills, setShowPills] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [password, setPassword] = useState("");
  const [fullname, setFullNames] = useState("");
  const [email, setEmail] = useState("");

  // know if all checkPassword requirements are met
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const checkPasswordStrength = (e) => {
    passwordStrength.minlength.test(e.target.value)
      ? setMinLength(true)
      : setMinLength(false);
    passwordStrength.upper.test(e.target.value)
      ? setUpperCase(true)
      : setUpperCase(false);
    passwordStrength.lower.test(e.target.value)
      ? setLowerCase(true)
      : setLowerCase(false);
    passwordStrength.number.test(e.target.value)
      ? setNumber(true)
      : setNumber(false);
    passwordStrength.character.test(e.target.value)
      ? setSpecial(true)
      : setSpecial(false);

    if (minLength && upperCase && lowerCase && number && special) {
      return true;
    } else {
      return false;
    }
  };

  function submitForm(e) {
    e.preventDefault();
    // setIsLoading(true);
    if (fullname && email) {
      const data = {
        fullname: fullname,
        email: email,
        password: password,
      };
      if (password && checkPasswordStrength(e)) {
        dispatch(createNewUser(data));
        navigate("/login");
        // setIsLoading(false);
      }
    } else {
      toast.error("Please fill in all fields");
    }
  }

  const handleFocus = (e) => setShowPills(true);
  const toggleVisiblity = () => setShow(!show);

  return (
    <div className="text-white text-center w-full sm:w-96 mx-auto flex flex-col justify-evenly flex-1">
      <p className="font-buttons text-primary font-bold text-xl">MoonRider</p>
      <h2 className="text-white font-buttons text-3xl font-extrabold">
        Sign Up
      </h2>
      <form onSubmit={submitForm} className="auth-form">
        <div className="relative">
          <input
            className="auth-input placeholder-transparent peer"
            type="text"
            placeholder="Full Names"
            required
            value={fullname}
            onChange={(e) => setFullNames(e.target.value)}
          />
          <label className="float-label transition-all">Full Names</label>
        </div>
        <div className="relative">
          <input
            className="auth-input placeholder-transparent peer"
            type="text"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="float-label transition-all">Email</label>
        </div>
        {/* <div className="relative">
          <input
            className="auth-input placeholder-transparent peer"
            type="text"
            placeholder="Username"
            value={username}
            required
            onChange={(e) => setUserName(e.target.value)}
          />
          <label className="float-label transition-all">Username</label>
        </div> */}
        <div
          className={`${
            showPills ? "pills-container" : "pills-container hide-pills"
          }`}
        >
          <ValidatorPill requirement={minLength} title="Min 8 characters" />
          <ValidatorPill requirement={upperCase} title="Uppercase letter" />
          <ValidatorPill requirement={lowerCase} title="Lowercase letter" />
          <ValidatorPill requirement={number} title="Number" />
          <ValidatorPill requirement={special} title="Special character" />
        </div>
        <div className={`${showPills ? "mt-2" : ""} relative`}>
          <input
            className="auth-input placeholder-transparent peer"
            type={show ? "text" : "password"}
            placeholder="example@mail.com"
            onChange={(e) => {
              checkPasswordStrength(e);
              setPassword(e.target.value);
            }}
            onFocus={handleFocus}
            required
          />
          <label className="float-label transition-all">Password</label>
          <FontAwesomeIcon
            icon={show ? faEyeSlash : faEye}
            className="absolute cursor-pointer right-5 top-4"
            onClick={toggleVisiblity}
          />
        </div>
        <button
          type="submit"
          className="bg-primary font-buttons text-black text-lg font-bold w-full rounded-full py-3 mt-5"
        >
          {isLoading ? (
            <FontAwesomeIcon
              icon={faSpinner}
              className=" cursor-pointer fa-spin fa-pulse"
            />
          ) : (
            "Sign Up"
          )}
        </button>
      </form>
      <div className="flex flex-row justify-between items-center text-greyTextSecondary my-4">
        <hr className="w-1/3 border-t border-gray-500" />
        <p className="text-xs">Or Sign up with</p>
        <hr className="w-1/3 border-t border-gray-500" />
      </div>
      <div>
        <button
          className="text-sm text-white sm:text-lg w-full border px-10 rounded-full flex flex-row justify-center py-3"
          disabled
        >
          <img className="self-center mr-5" src={googleIcon} alt="" />
          Sign up with Google
        </button>
      </div>

      <div>
        <p className="text-xs text-greyTextSecondary">
          {" "}
          Already an account?
          <Link to="/Login">
            {" "}
            <span className="text-primary">Sign in</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
