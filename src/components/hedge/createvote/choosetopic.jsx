import { useState } from "react";
import buyIcon from "../../../assets/images/family-pools/buyicon.png";
import sellIcon from "../../../assets/images/family-pools/sellicon.svg";

const ChooseTopic = ({ action }) => {
  const [active, setActive] = useState(false);

  return (
    <div className="flex flex-col text-[#BFBFC3] text-lg">
      <div className="flex justify-between items-center px-4 sm:px-10 py-4 border-t border-[#404142] ">
        <div className="flex">
          <img className="mr-4 w-9" src={buyIcon} alt="" />
          <p> Buy</p>
        </div>
        <div className="flex items-center relative">
          <label className="pair-radio text-xs flex items-center">
            <input type="radio" name="radio" value="Buy" onClick={action} />
            <span className="checkmark self-center w-5 h-5 sm:w-[25px] sm:h-[25px]"></span>
          </label>
        </div>
      </div>
      <div className="flex justify-between items-center px-4 sm:px-10 py-4 border-y border-[#404142] ">
        <div className="flex">
          <img className="mr-4 w-9" src={sellIcon} alt="" />
          <p> Sell</p>
        </div>
        <div className="flex items-center relative">
          <label className="pair-radio text-xs flex items-center">
            <input type="radio" name="radio" value="Sell" onClick={action} />
            <span className="checkmark self-center w-5 h-5 sm:w-[25px] sm:h-[25px]"></span>
          </label>
        </div>
      </div>
      <div className="flex justify-between items-center px-4 sm:px-10 py-4 border-y border-[#404142] ">
        <div className="flex">
          <img className="mr-4 w-9" src={sellIcon} alt="" />
          <p> Withdraw</p>
        </div>
        <div className="flex items-center relative">
          <label className="pair-radio text-xs flex items-center">
            <input type="radio" name="radio" value="Withdraw" onClick={action} />
            <span className="checkmark self-center w-5 h-5 sm:w-[25px] sm:h-[25px]"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ChooseTopic;
