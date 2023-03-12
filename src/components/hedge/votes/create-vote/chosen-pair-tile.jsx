const ChosenPairTile = ({ image, title, amount }) => {
  return (
    <>
      <div>
        <p className="text-[#979797] text-[14px] mb-4">Chosen the pair</p>
        <div className="flex justify-between items-center w-[100%] bg-brown rounded-[4px] px-[5%] py-3 mb-3">
          <div className="flex items-center">
            <div
              className="bg-center bg-cover  mr-4 w-[40px] h-[40px] rounded-[50%]"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
            <div>
              <p className="text-[16px] text-[#8B8B8B]">{title}</p>
              {/* <div className="text-white opacity-[80%]"><span className="text-[#3DD598]">20k+ </span>Bitcoin </div> */}
            </div>
          </div>
          <div>
            <p className="text-[16px] text-[#8B8B8B]">Price ${amount}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChosenPairTile;
