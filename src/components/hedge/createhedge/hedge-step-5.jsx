import copy from "../../../assets/images/hedge/copy.svg";
import HedgeHeader from "./hedge-header";

const HedgeStep5 = ({ currentStep, proceedStep }) => {
  const backHandler = () => {};
  const actionHandler = () => {};
  return (
    <>
      <HedgeHeader
        currentStep={currentStep}
        backHandler={backHandler}
        stepTitle="Deposit Tether"
        actionTitle="Close"
        actionHandler={proceedStep}
      />
      <div className="w-full justify-center items-center flex flex-col pt-[2rem] pb-[2rem] px-[5%]">
        <div className="w-full text-white  text-[14px] flex flex-col justify-center items-center text-center mb-[2rem]">
          <img
            className="w-[35%] mb-3"
            src="https://www.cilips.org.uk/wp-content/uploads/2021/09/qr-code-7.png"
            alt=""
          />
          <div>Send only USDT to this deposit address</div>
        </div>
        <div className="text-[18px] text-white h-[48px] flex justify-between items-center font-bold pl-4 rounded-[5px] mb-4 w-[100%] md:w-[70%]">
          <div className="text-[#3DD598]">Minimum Deposit</div>
          <div className="text-[#3DD598]">$600</div>
        </div>
        <div className="text-[18px] text-white h-[48px] flex justify-between items-center font-bold pl-4 rounded-[5px] mb-4 w-[100%] md:w-[70%]">
          <div className="text-white">Network</div>
          <div className="text-white">Etherreum (ERC20)</div>
        </div>
        <div className="text-[18px] text-white h-[48px] flex justify-between items-center font-bold pl-4 rounded-[5px] mb-4 w-[100%] md:w-[70%]">
          <div className="text-white">Address</div>
          <div className="text-white flex justify-between items-center">
            <div className="mr-2">0x0DeEAc12c... </div>
            <img src={copy} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HedgeStep5;
