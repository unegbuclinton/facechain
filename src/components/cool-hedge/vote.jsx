import vote from "../../assets/images/cool-hedge/vote.png";
import plus from "../../assets/images/cool-hedge/plus-square.svg";
import { Link } from "react-router-dom";

const Vote = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <img src={vote} alt="" />
      <div className="mt-2 mb-4 text-white">Create the first voting</div>
      <div className="flex justify-center w-[100%]">
        <div className="flex font-bold justify-center items-center bg-primary rounded-[50px] h-[50px] px-8 mt-4 md:w-[50%] w-[90%]">
          <img className="mr-4" src={plus} alt="" />
          <Link to={"/hedge/create-vote"}>
            <div>New Voting</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Vote;
