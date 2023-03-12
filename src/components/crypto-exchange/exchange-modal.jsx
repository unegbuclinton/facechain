/* import image */
import closeIcon from "../../assets/images/settings/x.svg";
import coinExchange from "../../assets/images/riders/coin-exchange.png";

/* import styling */
import "./exchange-modal.css";

const ExchangeModal = ({ modalHandler, proceedStep }) => {
  return (
    <div className="exchange-modal">
      <div className="exchange-card w-[90%] md:w-[45%]">
        <div className="relative flex flex-col items-center">
          <img className="mb-2" src={coinExchange} alt="" />
          <img
            onClick={modalHandler}
            className="cursor-pointer absolute top-0 right-0"
            src={closeIcon}
            alt=""
          />
          <div className="text-[#979797] text-[18px]">Connect New Exchange</div>

          <form className="w-[100%] mt-11">
            <div className="w-[100%]">
              <div className="flex flex-wrap justify-between w-[100%]">
                <div className="basis-[100%] md:basis-[48%] w-[100%]">
                  <div className="mb-10 py-2 border-[1px] border-[#979797] rounded-[5px] ">
                    <div className="px-4 text-[12px] text-[#979797]">
                      Cryto Exchanges
                    </div>
                    <select
                      className="w-[100%] px-4 text-primary outline-0 bg-transparent"
                      name=""
                      id=""
                    >
                      <option value="">1</option>
                      <option value="">2</option>
                    </select>
                  </div>
                </div>

                <div className="basis-[100%] md:basis-[48%] w-[100%]">
                  <div className="mb-10 py-2 border-[1px] border-[#979797] rounded-[5px] ">
                    <div className="px-4 text-[12px] text-[#979797]">
                      API Key
                    </div>
                    <input
                      className="w-[100%] px-4 text-primary outline-0 bg-transparent"
                      placeholder="Enter your API Key"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[100%]">
              <div className="flex flex-wrap justify-between w-[100%]">
                <div className="basis-[100%] md:basis-[48%] w-[100%]">
                  <div className="py-2 border-[1px] border-[#979797] rounded-[5px] ">
                    <div className="px-4 text-[12px] text-[#979797]">
                      Secret Key
                    </div>
                    <input
                      className="w-[100%] px-4 text-primary outline-0 bg-transparent"
                      placeholder="Enter your Secret Key"
                      type="text"
                    />
                  </div>
                </div>

                <div className="flex justify-between basis-[100%] md:basis-[48%] w-[100%] items-center">
                  <div className="text-[#3DD598] text-[13px]">Need Help?</div>
                  <div
                    onClick={() => {
                      proceedStep(2);
                    }}
                    className="flex font-bold justify-center items-center bg-primary rounded-[5px] h-[50px] px-8 cursor-pointer"
                  >
                    <div>Connect</div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ExchangeModal;
