// Import  Asset Image 
import backIcon from "../../../assets/images/riders/back-white.svg"

const DetailsTopbarHedge = ({title}) => {
    return (
        <div className="z-[100] flex justify-center items-center tab-menu border-b border-gray-800 h-[56px] w-[100%]">
            <div className="h-[100%] w-[90%] md:w-[60%] flex justify-center items-center">
                <div className="text-white font-bold basis-[45%] flex items-center">
                    <img className="mr-4" src={backIcon} alt="" />
                    <div>Back</div>
                </div>
                <div className='text-[16px] text-white font-bold basis-[55%]'>
                    {title}
                </div>  
                <div>
                    <p className="text-white">Setings</p>
                </div>   
            </div>
        </div> 
    );
}
 
export default DetailsTopbarHedge;