// Import Dependency 
import { Link } from 'react-router-dom';

// Import Styling 
import './auth.css';

const SubmitOtpForm = () => {
   
    return (
        <div className="text-white text-center sm:px-40 flex flex-col justify-evenly flex-1">
            <p className='font-buttons text-primary font-bold text-xl'>MoonRider</p>
            <h2 className="text-white font-buttons text-3xl font-extrabold">Submit Code</h2>
            <form className="-mt-20 sm:-mt-10" action="">
                <div className="relative">
                     <input className="auth-input placeholder-transparent peer" type="text" placeholder="example@mail.com" required/>
                     <label className="float-label transition-all">8 Digit Code</label>
                </div>
                <Link to="/Login"><button className="bg-primary font-buttons text-black text-lg font-bold w-full rounded-full py-3 mt-5">Submit</button></Link>
            </form>

            <div>
              <p className='text-xs text-greyTextSecondary'> Cancel Process? <Link to="/Login"> <span className="text-primary">Back to Login</span></Link></p> 
            </div>
        </div>
    );
}
 
export default SubmitOtpForm;