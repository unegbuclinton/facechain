// Import Asset Images
import Icon from "../../icons/icons";
import moment from "moment";
import getNumberOfDays from "./datehelper";
const CheckPrediction = ({
  startPrice,
  endPrice,
  startPeriod,
  endPeriod,
  pair,
  target_1_move,
}) => {
  const { diffInDays, diffInHours, diffInMinutes } = getNumberOfDays(endPeriod);

  return (
    <div className="bg-darkGrey text-white font-primaryFont">
      <div>
        <p className="text-xl mb-2">Check your prediction</p>
        <p className="text-xs text-greyText">
          Check your prediction before publishing it.
        </p>
      </div>
      <div className="my-10">
        <div className="pair-table flex justify-between my-6">
          <p className="text-sm">Pair</p>
          <p className="text-sm">{pair}</p>
        </div>

        <div className="pair-table flex justify-between my-6">
          <p className="text-sm">Start Time</p>
          <p className="text-sm">
            {moment(startPeriod).format("dddd, MMMM Do YYYY")}
          </p>
        </div>
        <div className="pair-table flex justify-between my-6">
          <p className="text-sm">Time remaining</p>
          <p className="text-sm text-[#FF8F75]">
            {diffInDays} days, {diffInHours} Hours, {diffInMinutes} Minutes
          </p>
        </div>
        <div className="pair-table flex justify-between my-6">
          <p className="text-sm">Starting Price</p>
          <p className="text-sm">{startPrice}</p>
        </div>
        <div className="pair-table flex justify-between my-6">
          <p className="text-sm">Predicted Price</p>
          <p className="text-sm">{endPrice}</p>
        </div>
        <div className="pair-table flex justify-between my-6">
          <p className="text-sm">Percentage Move</p>
          {target_1_move < 0 ? (
            <div className="flex items-center ">
              <div className="rotate-180 fill-blue-500 checkprediction_icon">
                <Icon name="polygon" />
              </div>
              <p className="text-sm text-[#FF8F75]">
                {Math.abs(target_1_move) + "%"}
              </p>
            </div>
          ) : (
            <div className="flex fill-primary items-center checkprediction_icon2">
              <Icon name="polygon" />
              <p className="text-sm text-[#22C077]">{target_1_move + "%"}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckPrediction;
