import Header from "../components/header/header";
import BottomNavigation from "../components/bottomnav/bottomnav";
import { useState } from "react";
import arrow from "../assets/images/deadline/arrow.svg";
import date from "../assets/images/deadline/date.svg";
import BuyPairHeader from "../components/hedge/votes/create-vote/buy-pair-header";
import DeadlineHeader from "../components/deadline/deadline-header";

const Deadline = ({ currentStep, proceedStep }) => {
  const backHandler = () => {};
  const actionHandler = () => {};
  const [currentTab, setCurrentTab] = useState(1);

  const tabHandler = (value) => {
    setCurrentTab(value);
  };

  return (
    <>
      <BuyPairHeader
        currentStep={currentStep}
        backHandler={backHandler}
        stepTitle="Pick a Date"
        actionTitle="Next"
        actionHandler={proceedStep}
      />
      <div className="px-[5%] py-4">
        <div className="py-4 border-b-[1px] border-[#383838]">
          <p className="text-[12px] text-white mb-3">Start</p>
          <div className="flex">
            <img src={date} alt="" className="mr-3" />
            <p className="text-[14px] text-white">07/01/2022 4:20 PM</p>
          </div>
        </div>

        <div className="py-4 border-b-[1px] border-[#383838]">
          <p className="text-[12px] text-white mb-3">End</p>
          <div className="flex">
            <img src={date} alt="" className="mr-3" />
            <p className="text-[14px] text-white">07/01/2022 4:20 PM</p>
          </div>
        </div>
        <br />
        <div className="flex flex-wrap justify-between items-center">
          <p className="text-[16px] text-white md:w-auto w-full mb-3 md:mb-0">
            {" "}
            Time{" "}
          </p>
          <div className="flex items-center">
            <div className="flex items-center">
              <select className="h-[36px] w-auto px-4 py-2 text-white font-bold outline-0 bg-[#292929] mr-3 rounded-[6px]">
                <option value="">09</option>
                <option value="">10</option>
              </select>
              <p className="text-[18px] font-bold text-white mr-3">:</p>
              <select className="h-[36px] w-auto px-4 py-2 text-white font-bold outline-0 bg-[#292929] mr-3 rounded-[6px]">
                <option value="">09</option>
                <option value="">10</option>
              </select>
            </div>

            <div className="flex justify-center items-center flex-wrap w-[100%]">
              <div className="flex bg-grey27 rounded-[6px] w-[100%]">
                <div
                  onClick={() => {
                    tabHandler(1);
                  }}
                  className={
                    currentTab === 1
                      ? "rounded-[6px] flex justify-center items-center h-[36px] md:w-[50%] w-[50%] bg-white text-black px-4"
                      : "px-4 flex justify-center items-center text-white h-[36px] md:w-[50%] w-[50%]"
                  }
                >
                  AM
                </div>
                <div
                  onClick={() => {
                    tabHandler(2);
                  }}
                  className={
                    currentTab === 2
                      ? "rounded-[6px] flex justify-center items-center h-[36px] md:w-[50%] w-[50%] bg-white text-black px-4"
                      : "px-4 flex justify-center items-center text-white h-[36px] md:w-[50%] w-[50%]"
                  }
                >
                  Off
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Deadline;
