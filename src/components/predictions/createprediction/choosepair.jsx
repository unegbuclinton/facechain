/* Import Styling */
import "../predictions.css";

// Import Asset Image
import SearchIcon from "../../../assets/images/predictions/search.svg";

// Import Component
import CurrencyPair from "../currencypair";

const ChoosePair = ({ action }) => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="bg-darkGrey text-white font-primaryFont">
      <div>
        <p className="text-xl mb-2">Choose Pair</p>
        <p className="text-xs text-greyText">
          Choose pair you want to predict on.
        </p>
      </div>
      <form
        action=""
        className="w-full flex justify-between align-center sm:py-5 py-3"
      >
        <div className="relative  w-full">
          <input
            className="w-full py-2 px-10 rounded-md bg-[#292929] bg-opacity-70 text-white"
            type="text"
            placeholder="Search"
            required
          />
          <img
            src={SearchIcon}
            className="absolute cursor-pointer left-2 top-2"
            alt=""
          />
        </div>
      </form>
      <div className="pair-table">
        <div className="flex justify-between py-2 sm:py-4 px-4 border-b-4 border-[#3C3E43]">
          <p className="text-sm sm:text-base">Currency</p>
          <p className="mr-10 text-sm sm:text-base">Pair</p>
        </div>
        <div className="max-h-[30vh] overflow-y-scroll currency-list">
          {data && <CurrencyPair data={data} action={action} />}
        </div>
      </div>
    </div>
  );
};

export default ChoosePair;
