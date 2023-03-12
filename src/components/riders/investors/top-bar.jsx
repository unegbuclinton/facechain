/* import images */
import backIcon from "../../../assets/images/riders/back-white.svg"
import history from "../../../assets/images/riders/history.svg"

const Topbar = ({title}) => {
    return (
      <div className="z-[100] mt-16 fixed top-0 left-0 right-0 flex justify-center items-center tab-menu border-b border-gray-800 h-[56px] w-[100%]">
        <div className="h-[100%] w-[90%] md:w-[60%] flex justify-between items-center">
          <div className="text-white font-bold flex">
            <img className="mr-4" src={backIcon} alt="" />
            <div>Back</div>
          </div>
        <div className=''>
          <div className="text-[14px] text-white mb-1 text-center">Your follows on Trades</div> 
          <div className="text-[10px] text-white text-center">4 investors</div>
        </div>  

        <div className="text-white font-bold flex">
            <img className="mr-4" src={history} alt="" />
            <div className=" text-white">History</div>
        </div>   
        </div>
      </div> 
    );
}
 
export default Topbar;