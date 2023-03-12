// import asset image 
import moon from '../assets/images/splash/moon.svg'

// import component 
import OnBoardingSlider from "../components/onboardingslider/onboardingslider";
import StarBackground from "../components/backgrounds/starbackground";

const OnBoardingScreen = () => {
    return (
            <StarBackground>
                <div className="full-container">
                    <div className="h-screen flex flex-col justify-between px-4 py-8 sm:p-0">
                        <OnBoardingSlider />
                        <img className="hidden w-5/6 self-center sm:block" src={moon} alt="" />
                    </div>   
                </div> 
            </StarBackground>    
    );
}
 
export default OnBoardingScreen;