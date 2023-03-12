import HedgeHeader from "./hedge-header";

const HedgeStep4 = ({ currentStep, proceedStep }) => {
  const backHandler = () => {};

  return (
    <>
      <HedgeHeader
        currentStep={currentStep}
        backHandler={backHandler}
        stepTitle="Deposit Tether"
        actionTitle="Next"
        actionHandler={proceedStep}
      />
      <div className="w-full flex flex-col pt-[2rem] pb-[2rem] px-[5%]">
        <div className="w-full text-white font-extrabold text-[28px] flex justify-center text-center mb-[3rem]">
          Choose <span className="text-[#3DD598] pl-2">Deposit Network</span>
        </div>
        <div className="text[20px] text-white h-[48px] bg-[#292929] flex items-center font-bold pl-4 rounded-[5px] mb-4">
          Ethereum <span className="text-[#9C9999]">(ERC20)</span>
        </div>
        <div className="text[20px] text-white h-[48px] bg-[#292929] flex items-center font-bold pl-4 rounded-[5px] mb-4">
          Ethereum <span className="text-[#9C9999]">(ERC20)</span>
        </div>
      </div>
    </>
  );
};

export default HedgeStep4;
