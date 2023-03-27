// import asset image
import moon from "../assets/images/splash/moon.svg";

// import component
import StarBackground from "../components/backgrounds/starbackground";
import ForgotPasswordForm from "../components/authforms/forgotpasswordform";

const ForgotPassword = () => {
  return (
    <StarBackground>
      <div className="h-screen w-[85%] sm:w-auto flex flex-col justify-between px-4 py-8 sm:p-0">
        <ForgotPasswordForm />
        <img className="hidden w-5/6 self-center sm:block" src={moon} alt="" />
      </div>
    </StarBackground>
  );
};

export default ForgotPassword;
