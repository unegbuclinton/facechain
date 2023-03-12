/* import image */
import add from "../../assets/images/edit-profile/add.svg";

/* import component */
import ExchangeHeader from "./exchange-header";

const ExchangeStep = ({ modalHandler }) => {
  const backHandler = () => {};
  const actionHandler = () => {};

  return (
    <>
      <ExchangeHeader
        backHandler={backHandler}
        stepTitle="Exchange"
        actionTitle="Next"
        actionHandler={actionHandler}
      />
      <div className="w-full flex items-center flex-col pt-[2rem] pb-[2rem]">
        <div className="w-[50%] text-white font-bold text-[26px] text-center mb-[6rem]">
          You need to connect your{" "}
          <span className="text-[#3DD598]">CryptoExchange</span>
        </div>
        <div className="flex justify-center w-[100%]">
          <div
            onClick={modalHandler}
            className="flex font-bold justify-center items-center bg-primary rounded-[5px] h-[50px] px-8 mt-8 cursor-pointer"
          >
            <img className="mr-4" src={add} alt="" />
            <div>Add CryptoExchange</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExchangeStep;
