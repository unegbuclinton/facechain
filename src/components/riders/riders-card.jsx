/* import react dependencies */
import { Link } from "react-router-dom";

// Import Asset Images
import exchange from "../../assets/images/familypools/binance.png";

// import components
import CircularBar from "../common/CircularBar/circularBar";

const RiderCard = ({ data, type }) => {
  const riderList = data.map((rider, index) => (
    <div
      className="fp-card w-full bg-darkGrey text-white rounded-lg px-4 py-6 lg:w-[48%] mb-8"
      key={index}
    >
      <Link
        to={
          type === "Copytrade"
            ? "/riders/riders-profile"
            : "/riders/hedge-profile"
        }
      >
        <div className="flex justify-between border-b-2 border-[#525354] pb-5 items-center">
          <div className="flex">
            <div className="mr-4">
              <img
                className="w-[56px] h-[56px] rounded-[50%] border-[1.5px] border-white"
                src={rider.img}
                alt=""
              />
            </div>
            <div className="flex flex-col justify-evenly">
              <p className="text-lg">
                @{type === "Copytrade" ? rider.username : rider.hedge}
              </p>
              <div className="flex items-center">
                <img className="mr-2" src={exchange} alt="" />
                <p className="bg-primary px-2 text-black rounded-md">$100</p>
              </div>
            </div>
          </div>
          <div className="w-[40px] lg:w-[70px]">
            <CircularBar value={rider.chart} />
          </div>
        </div>
        <div className="flex justify-between pt-5">
          <div className="border-r-2 border-[#525354] w-1/2">
            <p className="pb-3">Portfolio (4)</p>
            <ul className="trader-list flex">
              {rider.portfolio.map((img, index) => {
                return (
                  <li key={index} className={index === 0 ? "" : "ml-[-30px]"}>
                    <img
                      className="w-[48px] rounded-[50%] h-[48px] border-[1.5px] border-white object-cover"
                      src={img}
                      alt=""
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col justify-center items-center w-1/2">
            <p className="pb-3">Followers</p>
            <p className="text-primary text-xl font-bold">15k</p>
          </div>
        </div>
      </Link>
    </div>
  ));
  return (
    <div className="w-full flex flex-wrap justify-between my-8">
      {riderList}
    </div>
  );
};

export default RiderCard;
