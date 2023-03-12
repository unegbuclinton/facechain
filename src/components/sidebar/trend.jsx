const Trend = ({ trend, index }) => {
  return (
    <div className="text-[#bfbfc3] mb-4 hover:bg-[#2D2E31] rounded-lg py-3 lg:text-sm  lg:px-1 cursor-pointer">
      <div className="flex mb-1">
        <span className="mr-2">{index + 1}.</span>
        <p>Trending worldwide</p>
      </div>
      <p className="text-white mb-1">#bitcoinbus</p>
      <p>28.6k Tags</p>
    </div>
  );
};

export default Trend;
