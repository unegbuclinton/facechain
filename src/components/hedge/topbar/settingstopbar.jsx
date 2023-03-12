// Import  Asset Image 
import backIcon from "../../../assets/images/riders/back-white.svg"

const SettingsTopbarHedge = ({title}) => {
    return (
        <div className="z-[100] flex justify-center items-center tab-menu border-b border-gray-800 h-[56px] w-[100%]">
            <div className="h-[100%] w-[90%] md:w-[60%] flex justify-between items-center">
                <div className="text-white font-bold flex items-center">
                    <img className="mr-4" src={backIcon} alt="" />
                    <div>Back</div>
                </div>
                <div className='text-[16px] text-white font-bold'>
                    <p>Hedge Settings</p>
                </div>   
                <div>
                    <p className="text-primary font-bold">Save</p>
                </div>  
            </div>
        </div> 
    );
}
 
export default SettingsTopbarHedge;