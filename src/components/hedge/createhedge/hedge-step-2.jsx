import HedgeHeader from "./hedge-header";
import { useState } from "react";
import RangeSlider from "../../common/rangeslider/rangeslider";

const HedgeStep2 = ({ currentStep, proceedStep }) => {
  const backHandler = () => {};
  const [value, setValue] = useState(500);
  const [value2, setValue2] = useState(4);

  const sliderhandler = (e) => {
    setValue(parseInt(e.target.value));
  };

  const sliderhandler2 = (e) => {
    setValue2(parseInt(e.target.value));
  };
  return (
    <>
      <HedgeHeader
        currentStep={currentStep}
        backHandler={backHandler}
        stepTitle="Creating Hedge"
        actionTitle="Next"
        actionHandler={proceedStep}
      />
      <div className="px-[5%] py-[1.5rem]">
        <br />
        <div className="w-[100%]">
          <div className="flex flex-wrap justify-between w-[100%]">
            <div className="basis-[100%] md:basis-[48%] w-[100%] mb-8">
              <div className="text-white font-bold text-[20px] mb-4">
                Choose <span className="text-[#3DD598]">Minimum Deposit</span>
              </div>
              <div className="text-[#3DD598] text-[20px] mb-4">${value} </div>
              <div className="text-white text-[14px] mb-[4rem]">
                Minimum Deposit to join the hedge
              </div>
              <RangeSlider
                value={value}
                min="1"
                max="1000"
                action={sliderhandler}
              />
            </div>

            <div className="basis-[100%] md:basis-[48%] w-[100%]">
              <div className="text-white font-bold text-[20px] mb-4">
                Choose <span className="text-[#3DD598]">Minimum Deposit</span>
              </div>
              <div className="text-[#3DD598] text-[20px] mb-4">{value2}</div>
              <div className="text-white text-[14px] mb-[4rem]">
                Minimum Deposit to join the hedge
              </div>
              <RangeSlider
                value={value2}
                min="1"
                max="10"
                action={sliderhandler2}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HedgeStep2;
