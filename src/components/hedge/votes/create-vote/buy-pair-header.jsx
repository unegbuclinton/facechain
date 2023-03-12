import { Link } from "react-router-dom";
const BuyPairHeader = ({ currentStep, backHandler, stepTitle, actionTitle, actionHandler }) => {
    return (
        <div className="flex justify-between items-center px-[5%] py-[1.5rem] border-b-[1px] border-[#404142]">

         <div onClick={backHandler} className="text-white  flex items-center cursor-pointer">
        <p>Cancel</p>
        </div>

        <p className="text-white  text-[15px]">
         {stepTitle}
        </p>

        <div onClick={()=>{actionHandler(currentStep + 1)}} className="text-primary cursor-pointer text-[15px]">
         {actionTitle}
        </div>
    
        </div>
    );
}
 
export default BuyPairHeader;