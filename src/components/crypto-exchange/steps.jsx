// Import Asset Images 
import step1 from "../../assets/images/riders/step-1.svg"
import step2 from "../../assets/images/riders/step-2.svg"
const Steps = ({currentStep}) => {
    return (
        <div className="flex justify-center items-center px-[5%] py-[1.5rem] border-t-[1px] border-[#404142]">
      { currentStep === 1 ?  <img src={step1} alt="" /> : <img src={step2} alt="" />} 
        </div>
    );
}
 
export default Steps;