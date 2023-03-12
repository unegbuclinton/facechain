import { Link } from "react-router-dom";
import backIcon from "../../../assets/images/riders/back-white.svg";
const HedgeHeader = ({
  currentStep,
  backHandler,
  stepTitle,
  actionTitle,
  actionHandler,
}) => {
  return (
    <div className="flex justify-between items-center px-[5%] py-[1.5rem] border-b-[1px] border-[#404142]">
      {currentStep === 1 ? (
        <div onClick={backHandler} className="text-red  cursor-pointer">
          Exit
        </div>
      ) : (
        <div
          onClick={() => {
            actionHandler(currentStep - 1);
          }}
          className="text-white font-bold flex items-center cursor-pointer"
        >
          <img className="mr-4" src={backIcon} alt="" />
          <div>Back</div>
        </div>
      )}
      <div className="text-white font-bold text-[18px]">{stepTitle}</div>
      {currentStep === 5 ? (
        <Link to={"/cool-hedge"}>
          <div className="text-[#3DD598] cursor-pointer">Create</div>
        </Link>
      ) : (
        <div
          onClick={() => {
            actionHandler(currentStep + 1);
          }}
          className="text-[#3DD598] cursor-pointer"
        >
          {actionTitle}
        </div>
      )}
    </div>
  );
};

export default HedgeHeader;
