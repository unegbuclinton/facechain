const ProposeSale = ({ selectedPairs }) => {
  return (
    <div className="px-4 sm:px-10">
      <div className="bg-[#2E2C2C] px-6 py-4 rounded-md">
        <div className="border-b border-[#3C3E43] py-4">
          <p className="text-xs text-[#BFBFC3] mb-2">Hedge Balance</p>
          <p className="text-2xl">$5,456.79</p>
        </div>
        {selectedPairs.map((pair, index) => {
          return (
            <div
              className="flex justify-between items-center mt-4 text-xs sm:text-base"
              key={index}
            >
              <div className="flex items-center">
                <img className="mr-2 h-10 w-10" src={pair.image} alt="" />
                <p>{pair.type}</p>
              </div>
              <p>{pair.title}</p>
              <p>${pair.amount}</p>
            </div>
          );
        })}
      </div>
      <div className="mt-8 border-b border-[#3C3E43] pb-2 mb-2">
        <p className="text-xs text-[#BFBFC3] mb-2">
          Total amount of preferred sale
        </p>
        <p>0.05122222/$350</p>
      </div>
      <div className="mt-8 border-b border-[#3C3E43] pb-2 mb-2">
        <p className="text-xs text-[#BFBFC3] mb-2">
          Amount each investor will recieve
        </p>
        <p>$158.33</p>
      </div>
    </div>
  );
};

export default ProposeSale;
