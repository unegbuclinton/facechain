/* import hooks */
import { useAuthContext } from "../../../hooks/auth/useauthcontext";
import { usePredictionContext } from "../../../hooks/prediction/usepredictioncontext";

/**import dependencies */
import { useState, useEffect } from "react";

/**import images */
import moreDots from "../../../assets/images/post/more-dots.svg";

/** import helpers */
import copyToClipBoard from "../../../helpers/clipboard";
import { success, warning } from "../../common/toast/toast";

const MoreOptions = ({openModal, predictionId, user_id}) => {
    const { user } = useAuthContext();
    const {predictions} = usePredictionContext();
    const [isOpen, setIsOpen] = useState(false)
    const [isCopied, setIsCopied] = useState(false);

    const toggleMore = () => {
        setIsOpen(!isOpen)
    }

    const handleClick = (e) => {
        if(e.target.classList.contains("more-dots")) {
            return;
        }
        setIsOpen(false)
    }

    const handleCopyClick = () => {
        copyToClipBoard(predictions[predictionId].id, 'prediction')
        .then(()=>{
            success('Copied to clipboard')
            setTimeout(()=>{
                setIsCopied(false)
            }
            ,2000)
        })
        .catch(err =>{
            warning(err.message)
        })
      }

    useEffect(() => {
        if(isOpen) {
            document.addEventListener("click", handleClick)
        } else {
            document.removeEventListener("click", handleClick)
        }
        return () => {
            document.removeEventListener("click", handleClick)
        }
    }, [isOpen])


    return (
        <>
          <img src={moreDots} alt="" onClick={toggleMore}  className="cursor-pointer p-2 self-end md:block hidden hover:bg-black hover:bg-opacity-20 rounded-full" />
          {isOpen && (
                <div className="relative">
                {user.id === user_id ?
                    <>
                        <div className="w-60 absolute right-0 top-12 bg-[#1e1f21] border border-[#213f7d0f] rounded shadow-[2px_2px_20px_5px_rgb(0,0,0,0.05)] z-50">
                            <div className="border-b border-[#3E4047] py-3 cursor-pointer" onClick={() => openModal(predictionId)}>
                                <p className='text-red text-center'>Delete</p>
                            </div>
                            <div className="border-b border-[#3E4047] py-3 cursor-pointer" onClick={handleCopyClick}>
                                <p className='text-center'>Copy link</p>
                            </div>
                           
                        </div>
                    </>
                    :
                    <>
                        <div className="w-60 absolute right-0 top-12 bg-[#1e1f21] border border-[#213f7d0f] rounded shadow-[2px_2px_20px_5px_rgb(0,0,0,0.05)] z-50">
                            <div className="border-b border-[#3E4047] py-3 cursor-pointer">
                                <p className='text-red text-center'>Subscribe to prediction</p>
                            </div>
                            <div className="border-b border-[#3E4047] py-3 cursor-pointer">
                                <p className='text-center'>Follow Rider </p>
                            </div>
                            <div className="border-b border-[#3E4047] py-3 cursor-pointer" onClick={handleCopyClick}>
                                <p className='text-center'>Copy Link </p>
                            </div>
                        </div>
                    </>
                }
              </div>
          )}
         
        </>
      
    );
}

export default MoreOptions;