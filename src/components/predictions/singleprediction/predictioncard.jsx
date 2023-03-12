/* Import images */
import avatar from '../../../assets/images/header/avatar.jpg';
import Icon from "../../icons/icons";

/* import dependencies */
import Moment from 'react-moment';
import CommentBase from '../../common/comments/commentbase';
import Comment from '../../common/comments/comment';
import Share from '../../posts/share';

const PredictionCard = ({prediction}) => {
    return ( 
        <div className='bg-darkGrey px-6 pt-7 rounded-lg text-white w-full mb-11'>
        <div className='flex justify-between'>
            <div className='flex'>
                <img className='w-10 h-10 lg:w-12 lg:h-12 object-cover rounded-full border-2 mx-0.5 lg:mx-2' src={avatar} alt="" />
                <div className='ml-2'>
                    <p className='text-base font-medium lg:font-normal mb-1 md:text-sm'>{prediction.user.fullname}</p>
                    <p className='text-xs font-medium text-greyTextSecondary'><Moment fromNow>{prediction.created_at}</Moment></p>
                </div>
            </div>
            <div className='text-right w-[30%]'>
                <p className='text-primary text-base md:text-sm  lg:font-semibold'>{prediction.pair}</p>
                <p className='text-greyTextSecondary text-sm '>Binance</p>
            </div>
        </div>
        <div className='py-3'>
            <div className='flex justify-between my-3'>
                <p className='text-sm md:text-xs lg:text-base'>Status</p>
                <p className='text-yellow-400 text-sm md:text-xs lg:text-base'> {prediction.status} </p>
            </div>
            <div className='flex justify-between my-3'>
                <p className='text-sm md:text-xs lg:text-base'> Starting Price</p>
                <p className='text-sm md:text-xs lg:text-base'>${prediction.startingPrice}</p>
            </div>
            <div className='flex justify-between my-3'>
                <p className='text-sm md:text-xs lg:text-base'>Expected Price</p>
                <p className='text-sm md:text-xs lg:text-base'>${prediction.expectedPrice}</p>
            </div>
           
            <div className='flex justify-between my-3'>
                <p className='text-sm lg:text-base'>Time Remaining</p>
                {prediction.ending_at.diffInMinutes < 0 ? <p className='text-red-400 text-sm text-right lg:text-base'> Ended</p>
                :
                <p className='text-red-400 text-sm text-right lg:text-base'>
                    <span className='mr-1'>{prediction.ending_at.diffInDays} days</span>
                    <span className='mr-1'> {prediction.ending_at.diffInHours} hrs</span>
                    <span className='mr-1'> {prediction.ending_at.diffInMinutes} mins</span>
                </p>
               }
            </div>
           
            <div className='flex justify-between my-3'>
                <p className='text-sm md:text-xs lg:text-base'>Expected Price Move</p>
                {(prediction.expectedPriceMove) < 0 
               ?
                   <div className="flex items-center "><div className="rotate-180 fill-blue-500 checkprediction_icon"><Icon name="polygon"/></div><p className="text-sm text-[#FF8F75]">{Math.abs(prediction.expectedPriceMove).toFixed(2)+"%"}</p></div>
               :
                   <div className="flex fill-primary items-center checkprediction_icon2"><Icon name="polygon" /><p className="text-sm text-[#22C077]">{parseFloat(prediction.expectedPriceMove).toFixed(2) +"%"}</p></div>   
                }
            </div>
           
        </div>
        <div className='border-y-2 border-grey26 py-5 flex justify-center'>
             <Comment comments={prediction.signalComments} />
             <Share />
        </div>
        <div className="prediction-footer border-grey26 pt-7">
           <CommentBase post={prediction} type="prediction" />
        </div>
        </div>
    );
}
 
export default PredictionCard;