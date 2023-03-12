// import asset image 
import moon from '../assets/images/splash/moon.svg'

// import component 
import SignupForm from "../components/authforms/signupform";
import StarBackground from "../components/backgrounds/starbackground";

const Signup = () => {
    return (
        <StarBackground>
            <div className="h-screen w-[85%] sm:w-auto flex flex-col justify-between py-8 sm:p-0">
                <SignupForm />
                <img className="hidden w-5/6 self-center sm:block" src={moon} alt=""/>
            </div>   
       </StarBackground> 
     ); 
}

export default Signup;