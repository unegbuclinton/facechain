import Header from "../../../header/header";
import BottomNavigation from "../../../bottomnav/bottomnav";
import { useState } from "react";
import { Link } from "react-router-dom";
import Step1 from "./step-1";
import Step2 from "./step-2";
import Step3 from "./step-3";
// import UserExpandedTile1 from "../components/cool-hedge/user-expanded-tiles/user-expanded-tile-1";
import Topbar from "../../../cool-hedge/top-bar";
import plus from "../../../../assets/images/cool-hedge/plus-square.svg";
const CreateBuyPair = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const proceedStep = (step) => {
    setCurrentStep(step);
  };

  return (
    <div className="bg-black h-screen overflow-auto ">
      <Header />
      <Topbar />
      <div className="flex justify-center overflow-auto w-[90%] md:w-[48%] mt-24 m-auto mb-4 pb-20">
        <div className="rounded-[5px] bg-darkGrey w-[100%] md:w-[100%] h-[80vh] bg-auto bg-no-repeat bg-center">
          {currentStep === 1 ? (
            <Step1 proceedStep={proceedStep} currentStep={currentStep} />
          ) : currentStep === 2 ? (
            <Step2 proceedStep={proceedStep} currentStep={currentStep} />
          ) : currentStep === 3 ? (
            <Step3 proceedStep={proceedStep} currentStep={currentStep} />
          ) : currentStep === 4 ? null : null}
        </div>
      </div>
      {currentStep === 4 ? (
        <div className="flex justify-center w-[100%]">
          <div className="flex font-bold justify-center items-center bg-primary rounded-[50px] h-[50px] px-8 mt-4 md:w-[30%] w-[30%]">
            <img className="mr-4" alt="" src={plus} />
            <Link to={"/select-pair"}>
              <div>New Voting</div>
            </Link>
          </div>
        </div>
      ) : null}

      <BottomNavigation />
    </div>
  );
};

export default CreateBuyPair;
