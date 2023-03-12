// Import Dependecy 
import { Link } from 'react-router-dom';

// Import Components 
import stockIcon from '../../assets/images/predictions/predictionstat.svg';

// Import Styling 
import "./predictions.css"

const AddMobilePredictionButton =() =>{
    return (
        <div className="bg-[#01AB6C] min-h-full w-full relative overflow-hidden rounded md:hidden mb-5 pt-5 pl-5 pb-0">
            <div className='flex items-center p-0.5 justify-between'>
                <div className='w-[60%] sm:flex-initial p-1 mb-2'>
                    <p className='text-white  font-black text-base sm:text-2xl'>Create a prediction on the Crypto Coins</p>
                    <Link to="/home/add-predictions"><button className='bg-black text-white text-xs sm:text-sm rounded-[50px] px-3 py-2 sm:p-3  mt-2'>Make a Prediction</button></Link>
               </div>
               <div className='predictionButton '>
                    <img className='w-full ' src={stockIcon} alt="" />
               </div>
           </div>
         </div>
    )
}
export default AddMobilePredictionButton;