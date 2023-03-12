// import asset image
import moon from "../assets/images/splash/moon.svg";

// import component
import StarBackground from "../components/backgrounds/starbackground";

const VerifyEmail = () => {
  return (
    <StarBackground>
      <div className="full-container">
        <div className="h-screen w-[85%] sm:w-auto flex flex-col justify-between px-4 py-8 sm:p-0">
          <div className="text-white text-center sm:px-40 flex flex-col justify-evenly flex-1">
            <p className="font-buttons text-primary font-bold text-xl">
              MoonRider
            </p>
            <h2 className="text-white font-buttons text-3xl font-extrabold">
              Verify Email
            </h2>
            <form className="-mt-20 sm:-mt-10" action="">
              <div className="relative">
                <input
                  className="auth-input placeholder-transparent peer"
                  type="text"
                  placeholder="example@mail.com"
                  required
                />
                <label className="float-label transition-all">
                  8 Digit Code
                </label>
              </div>
              <button className="bg-primary font-buttons text-black text-lg font-bold w-full rounded-full py-3 mt-5">
                Submit
              </button>
            </form>

            <div>
              <p className="text-xs text-greyTextSecondary">
                {" "}
                Cancel Process?{" "}
                <span className="text-primary">Back to Login</span>
              </p>
            </div>
          </div>
          <img
            className="hidden w-5/6 self-center sm:block"
            src={moon}
            alt=""
          />
        </div>
      </div>
    </StarBackground>
  );
};
export default VerifyEmail;
