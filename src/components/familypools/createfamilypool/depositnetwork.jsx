/* import assets */
import exchange from "../../../assets/images/riders/exchange.svg";

const FamilyPoolDepositNetwork = () => {
  return (
    <div className="bg-darkGrey">
      <div
        className=" text-white font-primaryFont w-full px-4 sm:px-10 py-10 min-h-[500px]"
        style={{ background: `url(${exchange})`, backgroundRepeat: "repeat" }}
      >
        <div className="flex justify-center mt-8">
          <p className="text-2xl font-semibold">
            Choose <span className="text-primary">Deposit Network </span>
          </p>
        </div>
        <div className="mt-10 flex flex-col">
          <button className="bg-[#292929] w-full py-3 text-left px-3 text-lg mb-4">
            Ethereum <span className="text-[#9C9999]">(ERC20)</span>{" "}
          </button>
          <button className="bg-[#292929] w-full py-3 text-left px-3 text-lg mb-4">
            Solana{" "}
          </button>
          <button className="bg-[#292929] w-full py-3 text-left px-3 text-lg mb-4">
            Tron <span className="text-[#9C9999]">(TRC20)</span>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FamilyPoolDepositNetwork;
