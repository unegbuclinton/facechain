/* Import Styling */
import "./predictions.css";

// Import Asset Images
import Icon from "../icons/icons";
import moreDots from "../../assets/images/post/more-dots.svg";

/* Import images */
import avatar from "../../assets/images/header/avatar.jpg";

/* import components */
import Comment from "../common/comments/comment";
import More from "./more/moreoptions";
import MoreMobile from "./more/moreoptionsmobile";
import DeletePrediction from "./deleteprediction/deleteprediction";

/* import dependencies */
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { useState, useRef, useEffect } from "react";
import SharePrediction from "./share/share";

const PredictionList = () => {
  const [predictionId, setPredictionId] = useState("");
  const [predictions, setPredictions] = useState([]);
  const [moreMobile, setMoreMobile] = useState(false);
  // check for resolution and set is mobile
  const [isMobile, setIsMobile] = useState(
    window.innerWidth >= 320 && window.innerWidth <= 768
  );

  const deleteRef = useRef();

  const toggleMoreMobile = () => {
    setMoreMobile(!moreMobile);
  };

  const openDeleteModal = (index) => {
    deleteRef.current.openModal();
    predictions[index].more = !predictions[index].more;
    setPredictionId(predictions[index].id);
  };

  //   useEffect(() => {
  //     setPredictions(data);
  //   }, [data]);

  useEffect(() => {
    setIsMobile(window.innerWidth >= 320 && window.innerWidth <= 768);
  }, []);
  let prediction;
  return (
    <>
      <div className="predictions-list w-full flex flex-wrap justify-between">
        {/* {predictions?.map((prediction, index) => ( */}
        <div className="bg-darkGrey px-3 py-7 rounded-lg text-white w-full md:w-[48%] mb-11">
          <div className="flex justify-between">
            <div className="flex">
              <img
                className="w-10 h-10 lg:w-12 lg:h-12 object-cover rounded-full border-2 mx-0.5 lg:mx-2"
                src={avatar}
                alt=""
              />
              <div className="ml-2">
                <p className="text-base font-medium lg:font-normal mb-1 md:text-sm">
                  {prediction?.user?.fullname}
                </p>
                <p className="text-xs font-medium text-greyTextSecondary">
                  <Moment fromNow>{new Date()}</Moment>
                </p>
              </div>
            </div>
            <div className="text-right w-[30%] flex justify-end">
              {!isMobile && (
                <More
                  user_id={1}
                  predictionId={1}
                  openModal={openDeleteModal}
                />
              )}
              {isMobile && (
                <MoreMobile
                  user_id={2}
                  toggleMoreMobile={toggleMoreMobile}
                  predictionId={2}
                  openModal={openDeleteModal}
                />
              )}
            </div>
          </div>
          <div className="py-3">
            <div className="flex justify-between my-3">
              <p className="text-sm md:text-xs lg:text-base">Status</p>
              <p className="text-yellow-400 text-sm md:text-xs lg:text-base">
                {" "}
                Pending
              </p>
            </div>
            <div className="flex justify-between my-3">
              <p className="text-sm md:text-xs lg:text-base">Pair</p>
              <p className="text-primary text-base md:text-sm  lg:font-semibold">
                BUSDT
              </p>
            </div>
            <div className="flex justify-between my-3">
              <p className="text-sm md:text-xs lg:text-base">Starting Price</p>
              <p className="text-sm md:text-xs lg:text-base">$15,000</p>
            </div>
            <div className="flex justify-between my-3">
              <p className="text-sm md:text-xs lg:text-base">Expected Price</p>
              <p className="text-sm md:text-xs lg:text-base">$20,000</p>
            </div>

            <div className="flex justify-between my-3">
              <p className="text-sm lg:text-base">Time Remaining</p>
              {prediction < 0 ? (
                <p className="text-red-400 text-sm text-right lg:text-base">
                  {" "}
                  Ended
                </p>
              ) : (
                <p className="text-red-400 text-sm text-right lg:text-base">
                  <span className="mr-1">25days</span>
                  <span className="mr-1"> 10 hrs</span>
                  <span className="mr-1">10 mins</span>
                </p>
              )}
            </div>

            <div className="flex justify-between my-3">
              <p className="text-sm md:text-xs lg:text-base">
                Expected Price Move
              </p>
              {prediction < 0 ? (
                <div className="flex items-center ">
                  <div className="rotate-180 fill-blue-500 checkprediction_icon">
                    <Icon name="polygon" />
                  </div>
                  <p className="text-sm text-[#FF8F75]">
                    {Math.abs(500).toFixed(2) + "%"}
                  </p>
                </div>
              ) : (
                <div className="flex fill-primary items-center checkprediction_icon2">
                  <Icon name="polygon" />
                  <p className="text-sm text-[#22C077]">
                    {parseFloat(500).toFixed(2) + "%"}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div
            className="prediction-footer border-t-2
                 border-grey26 pt-7 flex justify-center relative text-xs md:text-sm"
          >
            <Link to={`/predictions/${2000}`}>
              <Comment comments="" />
            </Link>
            {/* <SharePrediction content={prediction} /> */}
          </div>
        </div>
        {/* ))} */}
      </div>
      {/* <DeletePrediction ref={deleteRef} predictionId={5} /> */}
      {/* empty space :-) */}
      <div className="empty-space"></div>
      {/* empty space :-) */}
    </>
  );
};

export default PredictionList;
