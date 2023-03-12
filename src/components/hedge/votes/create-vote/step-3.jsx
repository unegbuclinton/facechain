import { useEffect, useState } from "react";

// import BuyPairHeader from "./buy-pair-header";
// import LimitOrder from "./limit-order";
// import MarketOrder from "./market-order";
// import Step2Tab from "./step2-tab";
import Deadline from "../../../../pages/deadline";
const Step2 = ({ currentStep, proceedStep }) => {
  const backHandler = () => {};
  const actionHandler = () => {};
  const [currentTab, setCurrentTab] = useState(1);

  const tabHandler = (value) => {
    setCurrentTab(value);
  };

  return <Deadline currentStep={currentStep} proceedStep={proceedStep} />;
};


export default Step2;
