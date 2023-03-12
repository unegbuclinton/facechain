import Header from "../../../components/header/header";
import BottomNavigation from "../../bottomnav/bottomnav";
import exchange from "../../../assets/images/riders/exchange.svg";
import { useState } from "react";
import Steps from "../createhedge/steps";
// import ExchangeModal from "../components/crypto-exchange/exchange-modal";
import HedgeStep1 from "./hedge-step-1";
import HedgeStep2 from "./hedge-step-2";
import HedgeStep3 from "./hedge-step-3";
import HedgeStep4 from "./hedge-step-4";
import HedgeStep5 from "./hedge-step-5";

const Createhedge = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [modal, setModal] = useState(false);

  const modalHandler = () => {
    setModal(!modal);
  };

  const proceedStep = (step) => {
    setModal(false);
    setCurrentStep(step);
  };

  return (
    <div className="bg-black h-screen overflow-auto ">
      {/* {modal ? (
        <ExchangeModal proceedStep={proceedStep} modalHandler={modalHandler} />
      ) : null} */}
      <Header />
      <div className="flex justify-center overflow-auto mt-24 w-[90%] md:w-2/3 m-auto mb-4 pb-20">
        <div
          className="rounded-[5px] bg-darkGrey w-[100%] md:w-[80%] bg-auto bg-no-repeat bg-center"
          style={{
            backgroundImage: currentStep === 4 ? `url(${exchange})` : "none",
          }}
        >
          {currentStep === 1 ? (
            <HedgeStep1 proceedStep={proceedStep} currentStep={currentStep} />
          ) : currentStep === 2 ? (
            <HedgeStep2 proceedStep={proceedStep} currentStep={currentStep} />
          ) : currentStep === 3 ? (
            <HedgeStep3 proceedStep={proceedStep} currentStep={currentStep} />
          ) : currentStep === 4 ? (
            <HedgeStep4 proceedStep={proceedStep} currentStep={currentStep} />
          ) : currentStep === 5 ? (
            <HedgeStep5 proceedStep={proceedStep} currentStep={currentStep} />
          ) : (
            <HedgeStep3 proceedStep={proceedStep} currentStep={currentStep} />
          )}
          <Steps currentStep={currentStep} />
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Createhedge;
