import step1 from "../../../assets/images/hedge/Step-1.svg";
import step2 from "../../../assets/images/hedge/Step-2.svg";
import step3 from "../../../assets/images/hedge/Step-3.svg";
import step4 from "../../../assets/images/hedge/Step-4.svg";
import step5 from "../../../assets/images/hedge/Step-5.svg";

const Steps = ({ currentStep }) => {
  return (
    <div className="flex justify-center items-center px-[5%] py-[1.5rem] border-t-[1px] border-[#404142]">
      {currentStep === 1 ? (
        <img src={step1} alt="" />
      ) : currentStep === 2 ? (
        <img src={step2} alt="" />
      ) : currentStep === 3 ? (
        <img src={step3} alt="" />
      ) : currentStep === 4 ? (
        <img src={step4} alt="" />
      ) : currentStep === 5 ? (
        <img src={step5} alt="" />
      ) : (
        <img src={step5} alt="" />
      )}
    </div>
  );
};

export default Steps;
