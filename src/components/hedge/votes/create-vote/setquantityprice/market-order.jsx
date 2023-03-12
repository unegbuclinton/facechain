import ChosenPairTile from "../chosen-pair-tile";
const MarketOrder = () => {
  return (
    <>
      <div>
        <ChosenPairTile
          image="https://s2.coinmarketcap.com/static/img/coins/200x200/52.png"
          title="XRP/USDT"
          amount="$42,250"
        />

        <div className="basis-[100%] w-[100%] mb-4">
          <p className="text-[#979797] text-[14px] mb-2">Quantity</p>
          <div className="flex">
            <input
              placeholder="Enter a quantity"
              className="w-[85%] px-4 py-2 text-white text-[14px] outline-0 bg-[#292929]"
            />
            <div className="w-[15%] px-4 py-2 text-white text-[14px] outline-0 bg-[#292929]">
              <p className="text-[#5E5E5E] ">BTC</p>
            </div>
          </div>

          <p className="text-[#979797] text-[12px] mt-2">
            Available 0.05122222 USDT
          </p>
        </div>
      </div>

      <div>
        <ChosenPairTile
          image="https://bitcoin.org/img/icons/opengraph.png?1651392467"
          title="BTC/USDT"
          amount="$42,250"
        />

        <div className="basis-[100%] w-[100%] mb-4">
          <p className="text-[#979797] text-[14px] mb-2">Quantity</p>
          <div className="flex">
            <input
              placeholder="Enter a quantity"
              className="w-[85%] px-4 py-2 text-white text-[14px] outline-0 bg-[#292929]"
            />
            <div className="w-[15%] px-4 py-2 text-white text-[14px] outline-0 bg-[#292929]">
              <p className="text-[#5E5E5E] ">BTC</p>
            </div>
          </div>

          <p className="text-[#979797] text-[12px] mt-2">
            Available 0.05122222 USDT
          </p>
        </div>
      </div>
    </>
  );
};

export default MarketOrder;
