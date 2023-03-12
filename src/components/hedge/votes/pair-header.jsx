const PairHeader = ({ backHandler, stepTitle, actionTitle, actionHandler }) => {
  return (
    <div className="flex justify-between items-center px-[5%] py-[1.5rem] border-b-[1px] border-[#404142]">
      <div
        onClick={backHandler}
        className="text-white font-bold flex items-center cursor-pointer"
      >
        <div>Cancel</div>
      </div>

      <div className="text-white font-bold text-[18px]">{stepTitle}</div>
      <div onClick={actionHandler} className="text-[#3DD598] cursor-pointer">
        {actionTitle}
      </div>
    </div>
  );
};

export default PairHeader;
