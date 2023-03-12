import { useEffect, useState } from "react";

import BuyPairHeader from "./buy-pair-header";
import LimitOrder from "../create-vote/setquantityprice/limit-order";
import MarketOrder from "../create-vote/setquantityprice/market-order";
import Step2Tab from "./step2-tab";

const Step2 = ({ currentStep, proceedStep }) => {
  const backHandler = () => {};
  const actionHandler = () => {};
  const [currentTab, setCurrentTab] = useState(1);

  const tabHandler = (value) => {
    setCurrentTab(value);
  };

  return (
    <div className="rounded-[5px] bg-darkGrey w-[100%]  h-[80vh] overflow-auto bg-auto bg-no-repeat bg-center">
      <BuyPairHeader
        currentStep={currentStep}
        backHandler={backHandler}
        stepTitle="Enter a Quantity"
        actionTitle="Deposit"
        actionHandler={proceedStep}
      />
      <div className="px-[5%] py-4">
        <div className="bg-brown w-[100%] flex flex-col items-center justify-center rounded-[4px] h-[92px]">
          <p className="text-[14px] text-[#AEAEAE] mb-2">FAMILY POOL BALANCE</p>
          <p className="text-white text-[20px] font-bold">$3,822.42</p>
        </div>

        <Step2Tab tabHandler={tabHandler} currentTab={currentTab} />
        <br />

        {currentTab === 1 ? (
          <LimitOrder />
        ) : currentTab === 2 ? (
          <MarketOrder />
        ) : null}
      </div>
    </div>
  );
};

export default Step2;
