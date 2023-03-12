// import Dependency 
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import Assets Images 
import greenLogo from '../assets/images/splash/green-logo.svg'
import largeStars from '../assets/images/splash/large-stars.svg'
import moon from '../assets/images/splash/moon.svg'

// import Components 
import StarBackground from "../components/backgrounds/starbackground";

const SplashScreen = () => {
   const navigate = useNavigate()

   useEffect(()=>{
      setTimeout(() => {
         navigate("/login")
      }, 2000);
   }, [navigate])

  return (
         <StarBackground>
            <div className="flex flex-col justify-between overflow-hidden">
               <div className="flex flex-col relative justify-center m-auto">
                  <img className="self-center absolute" src={greenLogo} alt="green logo" />
                  <img className="self-center" src={largeStars} alt="large star" />
               </div>
               <div>
                  <img className="sm:w-5/6 sm:m-auto max-w-4xl" src={moon} alt="" />
               </div>
            </div>
         </StarBackground>
   );
}
 
export default SplashScreen;