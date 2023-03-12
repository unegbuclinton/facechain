// Import Dependency 
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/dark.css";

// import Asset Image
import calandar from "../../../assets/images/predictions/calandar.svg"

const ChooseDeadline = ({start, end, action, actionTwo}) => {
    return (
        <div className="flex px-10 justify-between">
             <div className="w-full md:w-[48%] ">
                   <p className="text-xs mt-2">Start</p>
                   <div className="flex relative">
                        <img src={calandar} alt="calandar" className="absolute top-3.5" />
                        <Flatpickr data-enable-time 
                             value={start}
                             options={{ minDate: 'today'}}
                             onChange={action}
                            
                        />
                    </div>
               </div>
               <div className="w-full md:w-[48%]">
                   <p className="text-xs mt-2">End</p>
                   <div className="flex relative">
                        <img src={calandar} alt="calandar" className="absolute top-3.5" />
                        <Flatpickr data-enable-time
                             value={end}
                             options={{ minDate: start[0]}}
                             onChange={actionTwo}
                        />
                    </div>
               </div>
        </div>
    );
}
 
export default ChooseDeadline;