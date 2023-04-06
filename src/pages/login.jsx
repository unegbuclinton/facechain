// import asset image
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import moon from "../assets/images/splash/moon.svg";

// import component
import LoginForm from "../components/authforms/loginform";
import StarBackground from "../components/backgrounds/starbackground";
import { resetPost } from "../redux/postSlice";

const Login = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetPost());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <StarBackground>
      <div className="h-screen w-[85%] sm:w-auto flex flex-col justify-between py-8 sm:p-0">
        <LoginForm />
        <img className="hidden w-5/6 self-center sm:block" src={moon} alt="" />
      </div>
    </StarBackground>
  );
};

export default Login;
