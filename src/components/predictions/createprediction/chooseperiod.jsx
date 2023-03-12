// Import Dependency 
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/dark.css";

// import Asset Image
import calandar from "../../../assets/images/predictions/calandar.svg"

/* Import Styling */
import '../predictions.css'

const ChoosePeriod= ({startPeriod, endPeriod, action, actionTwo}) => {
    return (
        <div className="bg-darkGrey text-white font-primaryFont">
            <div>
                <p className='text-xl mb-2'>Choose Period</p>
                <p className='text-xs text-greyText'>Choose the price on you want to predict during period.</p>
            </div>
           
            <div className='pair-table flex flex-col md:flex-row justify-between my-3 md:my-10'>
               <div className="w-full md:w-[48%] ">
                   <p className="text-xs mt-2">Start</p>
                   <div className="flex relative">
                        <img src={calandar} alt="calandar" className="absolute top-3.5" />
                        <Flatpickr data-enable-time={false} 
                            value={startPeriod}
                            options={{ minDate: 'today'}}
                            onChange={action}
                            
                        />
                    </div>
               </div>
               <div className="w-full md:w-[48%]">
                   <p className="text-xs mt-2">End</p>
                   <div className="flex relative">
                        <img src={calandar} alt="calandar" className="absolute top-3.5" />
                        <Flatpickr data-enable-time={false}
                            value={endPeriod}
                            options={{ minDate: startPeriod[0] ? new Date(startPeriod[0]).fp_incr(1) : 'today'}}
                            onChange={actionTwo}
                        />
                    </div>
               </div>
            </div>
        </div>
    );
}
 
export default ChoosePeriod;