// import asset image
import moon from '../assets/images/splash/moon.svg'

// import component 
import StarBackground from "../components/backgrounds/starbackground";
import SubmitOtpForm from "../components/authforms/submitotpform";

const SubmitOtp = () => {
    return (
        <StarBackground>
            <div className="full-container">
                <div className="h-screen w-[85%] sm:w-auto flex flex-col justify-between px-4 py-8 sm:p-0">
                    <SubmitOtpForm />
                    <img className="hidden w-5/6 self-center sm:block" src={moon} alt="" />
                </div>   
            </div> 
       </StarBackground> 
     ); 
}
export default SubmitOtp;
