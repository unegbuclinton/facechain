/* import components */
import Publicpost from "./publicpost";
import Personalpost from "./personalpost";

/* import user context hook */
// import { useAuthContext } from "../../hooks/auth/useauthcontext";

/** import dependencies */
import { useEffect, useState } from "react";

/* import image */
import moreDots from "../../assets/images/post/more-dots.svg";

const MoreMobile = ({ user_id }) => {
  //   const { user } = useAuthContext();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMore = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClick);
    } else {
      document.removeEventListener("click", handleClick);
    }
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [isOpen]);

  const handleClick = (e) => {
    if (e.target.classList.contains("more-dots")) {
      return;
    }
    setIsOpen(false);
  };
  return (
    <>
      <img
        src={moreDots}
        alt=""
        onClick={toggleMore}
        className="cursor-pointer p-2 self-end hover:bg-black hover:bg-opacity-20 rounded-full"
      />
      {isOpen && (
        <div className="more-modal">
          {10 !== 11 ? (
            <div className="w-[90%]">
              <div className="app-card w-full">
                <div className="border-b-[1px] p-4 border-grey26 justify-items-center">
                  <p className="text-red text-center">
                    Not interested on this post
                  </p>
                </div>
                <div className="border-b-[1px] p-4 border-grey26  justify-items-center">
                  <p className="text-center">Follow this Rider </p>
                </div>
                <div className="border-b-[1px] p-4 border-grey26  justify-items-center">
                  <p className="text-center">Mute this Rider</p>
                </div>
                <div className="border-b-[1px] p-4 border-grey26  justify-items-center">
                  <p className="text-center">Block Rider</p>
                </div>
                <div className="border-b-[1px] p-4 border-grey26  justify-items-center">
                  <p className="text-center">Copy link</p>
                </div>
                <div className="border-b-[1px] p-4 border-grey26  justify-items-center">
                  <p className="text-center">Report</p>
                </div>
              </div>
              <br />
              <div
                onClick={toggleMore}
                className="app-card justify-items-center w-full"
              >
                <div className="border-b-[1px] p-4 border-grey26 justify-items-center">
                  <p className="text-white text-center">Cancel</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-[90%]">
              <div className="app-card w-full">
                <div className="border-b-[1px] p-4 border-grey26  justify-items-center">
                  <p className="text-red text-center">Delete</p>
                </div>
                <div className="border-b-[1px] p-4 border-grey26  justify-items-center">
                  <p className="text-center">Turn off comments </p>
                </div>
                <div className="border-b-[1px] p-4 border-grey26  justify-items-center">
                  <p className="text-center">Pin a post</p>
                </div>
                <div className="border-b-[1px] p-4 border-grey26  justify-items-center">
                  <p className="text-center">Edit</p>
                </div>
                <div className="border-b-[1px] p-4 border-grey26  justify-items-center">
                  <p className="text-center">Copy link</p>
                </div>
                <div className="border-b-[1px] p-4 border-grey26  justify-items-center">
                  <p className="text-center">Share</p>
                </div>
              </div>
              <br />
              <div
                onClick={toggleMore}
                className="app-card justify-items-center w-full"
              >
                <div className="border-b-[1px] p-4 border-grey26 justify-items-center">
                  <p className="text-white text-center">Cancel</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default MoreMobile;
