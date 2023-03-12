import backIcon from "../../assets/images/riders/back-white.svg";

const Topbar = ({ title }) => {
  return (
    <div className="z-[100] flex justify-center items-center tab-menu border-b border-gray-800 h-[56px] w-[100%]">
      <div className="h-[100%] w-[90%] md:w-[60%] flex justify-between items-center">
        <div className="text-white font-bold flex">
          <img className="mr-4" src={backIcon} alt="" />
          <div>Back</div>
        </div>

        <div>
          <div className="text-[16px] text-white mb-1 text-center">
            Cool hedge
          </div>
          <div className="text-[10px] text-white text-center">
            4 investors, 1 admin
          </div>
        </div>

        <div className="text-white font-bold flex">
          <div className=" text-white">More</div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
