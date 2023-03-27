import HedgeHeader from "./hedge-header";
import Search from "../../riders/search";
import "./checkbox.css";
import MemberTile from "./member-tile";
const HedgeStep2 = ({ currentStep, proceedStep }) => {
  const backHandler = () => {};

  return (
    <>
      <HedgeHeader
        currentStep={currentStep}
        backHandler={backHandler}
        stepTitle="Inviting Members"
        actionTitle="Next"
        actionHandler={proceedStep}
      />
      <div className="w-[100%]">
        <div className="px-[5%] py-[1.5rem]">
          <div className="flex flex-wrap justify-between w-[100%]">
            <div className="text-white text[14px] mb-4">
              Who would you like to invite? Choose from 2 to 5 investors
            </div>
            <Search />
          </div>
        </div>
        <div className="bg-[#141414] h-[34px] px-[5%] flex items-center text-[#ACACAC]">
          A
        </div>
        <MemberTile />
      </div>
    </>
  );
};

export default HedgeStep2;
