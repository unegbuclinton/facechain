/**import dependencies */
import { FacebookShareButton} from "react-share";
import { TwitterShareButton } from "react-share";
import { WhatsappShareButton } from "react-share";


/**import Assets */
import facebookIcon from '../../../assets/images/share/facebookicon.svg';
import twitterIcon from '../../../assets/images/share/twittericon.svg';
import whatsappIcon from '../../../assets/images/share/whatsappicon.svg';
import instagramIcon from '../../../assets/images/share/instagramicon.svg';
import share from '../../../assets/images/post/share.svg'


/** import Dependencies */
import { useEffect, useState } from "react";

const SharePrediction = ({content}) => {
    const [isOpen, setIsOpen] = useState(false);
    const {id, pair, user} = content || {};
    
    const message = `Checkout this ${pair} prediction by ${user.fullname} on Moonrider`;
    const baseUrl = window.location.origin + '/predictions/' + id;
    const toggleShare = () => {
        setIsOpen(!isOpen);
    }

    const handleClick = (e) => {
        if(e.target.classList.contains("share-dots")) {
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
            <div className="items-center cursor-pointer flex lg:mx-10 mx-5 " onClick={toggleShare}>
                <div className='mr-2'>
                    <img src={share} className="w-4 md:w-auto" alt="" />
                </div>
                <div>
                    <p>Share</p>
                </div>
            </div>
            {isOpen && 
            <div className="w-64 rounded-md flex items-center flex-col py-2 bg-[#1e1f21] border border-[#213f7d0f] shadow-[2px_2px_20px_5px_rgb(0,0,0,0.05)] z-20 absolute right-0 top-[-90px]">
                <div className="mb-3 pb-2 border-b border-[#3E4047] w-full text-center">
                    <p className="">Share On Social Media</p>
                </div>
                <div className="w-[80%]">
                    <ul className="flex justify-evenly">
                        <li>
                            <TwitterShareButton url={baseUrl} title={message} hashtag="#moonrider">
                                <img src={twitterIcon} alt="facebook icon" />
                            </TwitterShareButton>
                        </li>
                        <li>
                            <WhatsappShareButton url={baseUrl} title={message} separator="::     ">
                                <img src={whatsappIcon} alt="facebook icon" />
                            </WhatsappShareButton>
                        </li>
                        <li>
                            <WhatsappShareButton>
                                <img src={instagramIcon} alt="facebook icon" />
                            </WhatsappShareButton>
                        </li>
                        <li>
                            <FacebookShareButton url={baseUrl} quote={message} hashtag="#moonrider">
                                <img src={facebookIcon} alt="facebook icon" />
                            </FacebookShareButton>
                        </li>
                    </ul>
                </div>
            </div>
         }
        </>
      
     );
}
 
export default SharePrediction;