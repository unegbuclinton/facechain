// Import Dependency
import { useState } from "react";
//import Fontawesome
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Import Components
import ChooseExchanges from "./chooseexchanges";
import ChoosePair from "./choosepair";
import ChoosePeriod from "./chooseperiod";
import ProgressDots from "../../common/progress/progressdots";
import ChooseExpectedPrice from "./chooseexpectedprice";
import CheckPrediction from "./checkprediction";
import predictionValidator from "./validators";
// import useCreatePrediction from "../../../hooks/prediction/usecreateprediction";
import getNumberOfDays from "./datehelper";

// push into your array on this page

const AddPredictionForm = () => {
  //State Declarations
  const data = [1, 2, 3, 4, 5];
  const [activeTab, setActiveTab] = useState(0);
  const [currencyPair, setCurrencyPair] = useState("");
  const [exchange, setExchange] = useState("");
  const [startPeriod, setStartPeriod] = useState(new Date());
  const [endPeriod, setEndPeriod] = useState(
    startPeriod ? new Date(startPeriod).fp_incr(1) : new Date()
  );
  const [isLoading] = useState(false);
  const [startPrice] = useState(35000);
  const [endPrice, setEndPrice] = useState("");

  const { days } = getNumberOfDays(endPeriod);
  console.log(days);

  //expected Rate Change
  let startprice = parseFloat(startPrice);
  let expectedprice = parseFloat(endPrice);
  let target_1_move = (
    ((expectedprice - startprice) / startprice) *
    100
  ).toFixed(2);

  // Event Handlers
  const handleCurrencyPair = (e) => setCurrencyPair(e.target.value);
  const handleExchange = (e) => setExchange(e.target.value);
  const handleStartPeriod = (e) => {
    setStartPeriod(e);
    setEndPeriod(new Date(e).fp_incr(1));
  };
  const handleEndPeriod = (e) => setEndPeriod(e);
  const handlePriceInput = (e) => setEndPrice(e.target.value);

  const handleNext = () => {
    if (activeTab < data.length) {
      setActiveTab(activeTab + 1);
    }
  };

  const handleSubmit = () => {
    // createPrediction(prediction);
  };

  function validateAndNext() {
    if (activeTab === 0) {
      predictionValidator.ChoosePair(currencyPair, handleNext);
    }
    if (activeTab === 1) {
      predictionValidator.ChooseExchanges(exchange, handleNext);
    }
    if (activeTab === 2) {
      predictionValidator.ChoosePeriod(startPeriod, endPeriod, handleNext);
    }
    if (activeTab === 3) {
      predictionValidator.ChoosePrice(startPrice, endPrice, handleNext);
    }
    if (activeTab === 4) {
      handleSubmit();
    }
  }

  //   useEffect(() => {
  //     if (isUploaded) {
  //       setHasTab(2);
  //       navigate("/home", {
  //         state: {
  //           hasTab: 2,
  //         },
  //       });
  //     }
  //     return () => {
  //       // cleanup function
  //       setActiveTab(0);
  //       setCurrencyPair("");
  //       setExchange("");
  //       setStartPeriod(new Date());
  //       setEndPeriod(new Date());
  //       setStartPrice(35000);
  //       setEndPrice("");
  //       //   setIsUploaded(false);
  //       setHasTab(null);
  //     };
  //   }, []);

  return (
    <div className="flex flex-col relative">
      <div className="bg-darkGrey px-4 sm:px-10 py-10 rounded-lg addpredictionform">
        {activeTab === 0 && <ChoosePair action={handleCurrencyPair} />}
        {activeTab === 1 && <ChooseExchanges action={handleExchange} />}
        {activeTab === 2 && (
          <ChoosePeriod
            startPeriod={startPeriod}
            endPeriod={endPeriod}
            action={handleStartPeriod}
            actionTwo={handleEndPeriod}
          />
        )}
        {activeTab === 3 && (
          <ChooseExpectedPrice
            startPrice={startPrice}
            endPrice={endPrice}
            action={handlePriceInput}
          />
        )}
        {activeTab === 4 && (
          <CheckPrediction
            startPrice={startPrice}
            endPrice={endPrice}
            startPeriod={startPeriod}
            endPeriod={endPeriod}
            pair={currencyPair}
            target_1_move={target_1_move}
          />
        )}
        <div className="flex justify-center absolute top-4 right-0 left-0 md:relative">
          <ProgressDots data={data} activeTab={activeTab} />
        </div>
      </div>
      <button
        className="bg-primary self-center text-xl font-bold rounded-full px-32 py-4 m-10"
        onClick={validateAndNext}
      >
        {isLoading ? (
          <FontAwesomeIcon
            icon={faSpinner}
            className=" cursor-pointer fa-spin fa-pulse"
          />
        ) : activeTab === 4 ? (
          "Submit"
        ) : (
          "Next"
        )}
      </button>
    </div>
  );
};

export default AddPredictionForm;
