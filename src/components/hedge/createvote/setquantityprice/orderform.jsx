const OrderForm = ({ item, type }) => {
  return (
    <div className="mb-14">
      <div className="mb-6">
        <p className="text text-[#AEAEAE] mb-2">Chosen the pair</p>
        <div className="flex bg-[#2E2C2C] justify-between px-4 py-2 rounded-sm">
          <div className="flex items-center">
            <img
              className="w-[40px] h-[40px] mr-2 rounded-full object-cover"
              src={item.image}
              alt=""
            />
            <p className="text-[#8B8B8B]">{item.title}</p>
          </div>
          <div className="flex items-center">
            <p className="text-[#8B8B8B]">Price: {item.amount}</p>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <p className="text text-[#AEAEAE] mb-2">Quantity</p>
        <div className="flex">
          <input
            placeholder="Enter a quantity"
            className="w-[85%] px-4 py-2 text-white outline-0 bg-[#292929]"
          />
          <div className="w-[15%] px-4 py-2 text-white text-[14px] outline-0 bg-[#292929]">
            <p className="text-[#5E5E5E] text-right">BTC</p>
          </div>
        </div>
        <p className="text-[#979797] text-[12px] mt-2">
          Available 0.05122222 USDT
        </p>
      </div>
      {type === "Limit Order" && (
        <div>
          <p className="text text-[#AEAEAE] mb-2">Limit Order Price</p>
          <div className="flex">
            <input
              placeholder="Enter a quantity"
              className="w-[85%] px-4 py-2 text-white outline-0 bg-[#292929]"
            />
            <div className="w-[15%] px-4 py-2 text-white text-[14px] outline-0 bg-[#292929]">
              <p className="text-[#5E5E5E] text-right">USDT</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderForm;
