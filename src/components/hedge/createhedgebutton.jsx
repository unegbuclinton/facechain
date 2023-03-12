import hedgeIcon from "../../assets/images/hedge/hedge.png";
import { Link } from "react-router-dom";

const CreateHedgeButton = () => {
  return (
    <div className="w-full bg-primary px-8 py-4 rounded-md flex justify-between items-center">
      <div>
        <p className="text-white font-semibold mb-4 text-base sm:text-xl">
          Create a hedge to trade with your friends
        </p>
        <Link to="/hedge/create">
          <button className="bg-black text-white flex rounded-full px-6 py-2 text-xs sm:text-base">
            Create a hedge
          </button>
        </Link>
      </div>
      <img src={hedgeIcon} alt="" />
    </div>
  );
};

export default CreateHedgeButton;
