/* import user context */
import { useAuthContext } from "../../../hooks/auth/useauthcontext";


/**import dependencies */
import { useState, useEffect } from "react";

/**import images */
import moreDots from "../../../assets/images/post/more-dots.svg";

const MoreOptionsMobile = ({toggleMoreMobile, user_id, openModal, predictionId}) => {
    const { user } = useAuthContext();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMore = () => {
        setIsOpen(!isOpen);
    }

    const handleClick = (e) => {
        if (e.target.classList.contains("more-dots")) {
            return;
        }
        setIsOpen(false);
    }

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("click", handleClick);
        } else {
            document.removeEventListener("click", handleClick);
        }
        return () => {
            document.removeEventListener("click", handleClick);
        }
    }, [isOpen]);

    return (
        <>
            <img src={moreDots} alt="" onClick={toggleMore} className="cursor-pointer p-2 self-end md:block hidden hover:bg-black hover:bg-opacity-20 rounded-full"/>
            {isOpen && (
                 <div className="more-modal">
                 {user.id === user_id ?
                     <div className="w-[90%]">
                     <div className="app-card w-full">
                         <div className="border-b-[1px] p-4 border-grey26  justify-items-center cursor-pointer" onClick={() => {
                             openModal(predictionId)
                             toggleMoreMobile()
                             }} >
                             <p className='text-red text-center'>Delete</p>
                         </div>
                         <div className="border-b-[1px] p-4 border-grey26  justify-items-center">
                             <p className='text-center'>Copy link</p>
                         </div>
                         <div className="border-b-[1px] p-4 border-grey26  justify-items-center">
                             <p className='text-center'>Share</p>
                         </div>
                     </div>
                     <br />
                     <div onClick={toggleMoreMobile} className="app-card justify-items-center w-full">
                         <div className="border-b-[1px] p-4 border-grey26 justify-items-center">
                             <p className='text-white text-center'>Cancel</p>
                         </div>
                     </div>
                    </div>
                     :
                     <div className="w-[90%]">
                     <div className="app-card w-full">
                         <div className="border-b-[1px] p-4 border-grey26  justify-items-center">
                             <p className='text-center'>Subscribe To Prediction </p>
                         </div>
                         <div className="border-b-[1px] p-4 border-grey26  justify-items-center">
                             <p className='text-center'>Follow this Rider</p>
                         </div>
                         <div className="border-b-[1px] p-4 border-grey26  justify-items-center">
                             <p className='text-center'>Copy link</p>
                         </div>
                         <div className="border-b-[1px] p-4 border-grey26  justify-items-center">
                             <p className='text-center'>Share</p>
                         </div>
                     </div>
                     <br />
                     <div onClick={toggleMoreMobile} className="app-card justify-items-center w-full">
                         <div className="border-b-[1px] p-4 border-grey26 justify-items-center">
                             <p className='text-white text-center'>Cancel</p>
                         </div>
                     </div>
                 </div>
                    
                 }
                 </div>
            )}
           
        </>
       
    );
}

export default MoreOptionsMobile;