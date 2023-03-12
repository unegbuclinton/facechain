import arrow from "../../assets/images/cool-hedge/arrow-right.svg";

const Summary = ({ title, value, actionTitle, actionHandler }) => {
  return (
    <div className="bg-darkGrey rounded-[4px] p-4 mb-4">
      <div className="flex justify-between text-[#979797]">
        <div>
          <p className="text-[#979797] text-[12px]">{title}</p>
          <p className="text-[20px] text-white">{value}</p>
        </div>

        <div className="flex justify-between items-center cursor-pointer">
          <div onClick={actionHandler} className=" mr-2">
            {actionTitle}
          </div>
          <img src={arrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Summary;
