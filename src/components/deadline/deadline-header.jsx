const DeadlineHeader = ({
  backHandler,
  stepTitle,
  actionTitle,
  actionHandler,
}) => {
  return (
    <div className="flex justify-between items-center px-[5%] py-[1.5rem] border-b-[1px] border-[#404142]">
      <div
        onClick={backHandler}
        className="text-white flex items-center cursor-pointer"
      >
        <p>Cancel</p>
      </div>
      <p className="text-white  text-[16px]">{stepTitle}</p>
      <div onClick={actionHandler} className="text-[#3DD598] cursor-pointer">
        {actionTitle}
      </div>
    </div>
  );
};

export default DeadlineHeader;
