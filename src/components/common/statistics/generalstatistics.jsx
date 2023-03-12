// Import Components 
import CircularBar from "../CircularBar/circularBar";
import Accordion from "../accordion/accordion";

const GeneralStatistics = () => {
    return (
       <div className="w-full md:w-[48%] mt-5 md:mt-0">
           <Accordion title='General Stats'>
                <div className="flex items-center border border-[#383838] rounded-lg p-4 mb-4 min-h-[110px]">
                    <CircularBar  value="75"/>
                    <div className="ml-4">
                        <p>Total Copies</p>
                        <p className="text-lg font-semibold">47,458</p>
                    </div>
                </div>
                <div className="flex items-center border border-[#383838] rounded-lg p-4 mb-4 min-h-[110px]">
                    <CircularBar  value="24"/>
                    <div className="ml-4">
                        <p>Average Risk Score</p>
                        <p className="text-lg font-semibold">+3,524</p>
                    </div>
                </div>
                <div className="flex items-center border border-[#383838] rounded-lg p-4 mb-4 min-h-[110px]">
                    <CircularBar  value="75"/>
                    <div className="ml-4">
                        <p>Total Copies</p>
                        <p className="text-lg font-semibold">$23,458</p>
                    </div>
                </div>
           </Accordion>
       </div>
      
    );
}
 
export default GeneralStatistics;