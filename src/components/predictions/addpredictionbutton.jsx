// Impor Dependency
import { Link } from "react-router-dom";

// Import Asset Images
import stockIcon from "../../assets/images/predictions/stocks.svg";
const AddPredictionButton = () => {
  return (
    <>
      <Link to="/home/add-predictions">
        <button className="bg-primary h-20 w-20 justify-center items-center rounded-full fixed right-10 bottom-10 hidden md:flex ">
          <img className="w-[60%]" src={stockIcon} alt="" />
        </button>
      </Link>
    </>
  );
};

export default AddPredictionButton;
