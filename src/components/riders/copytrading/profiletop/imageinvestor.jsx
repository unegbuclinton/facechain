// Import Dependency

import fpAward from "../../../../assets/images/family-pools/award.png";

const ImageInvestor = ({ avatar }) => {
  return (
    <>
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center">
          <div className="fp-avatar-container w-fit p-1 mr-6 relative">
            <img
              className="fp-avatar md:w-24 md:h-24 object-cover rounded-full sm:w-16 sm:h-16 w-12 h-12"
              src={avatar}
              alt=""
            />
          </div>
          <div>
            <div className="flex items-center">
              <p className="md:text-3xl font-extrabold mr-3 sm:text-2xl text-lg text-white">
                Lian Oneil
              </p>
              {/* Online notifier to be refactored to a common component */}
              <p className="bg-primary w-3 h-3 rounded-full sm:text-2xl text-lg md:text-3xl"></p>
            </div>
            <p className="text-[#9e9e9e] md:text-xl sm:text-lg text-base">
              @missy349
            </p>
          </div>
        </div>
        <div>
          <img src={fpAward} alt="" className="md:w-16 sm:w-12 w-10" />
        </div>
      </div>
    </>
  );
};

export default ImageInvestor;
