/* import image */
import moreDots from '../../assets/images/post/more-dots.svg'
import avatar from '../../assets/images/header/avatar.jpg';

/* import components */
import Like from './like';
import Share from './share';
import Comment from '../common/comments/comment';
import More from './more';
import Moment from 'react-moment';
import CommentBase from '../common/comments/commentbase';
const PostCard = ({data}) => {
    return (
        <div className='text-white bg-darkGrey m-auto px-10 py-6 rounded-xl mt-4'>
        <div className='mb-5 flex justify-between'>
            <div className='flex'>
                  <img className='w-12 h-12 object-cover rounded-full border-2 mx-2' src={avatar} alt="" />
                  <div className='ml-2'>
                      <p className='text-base font-normal mb-1'>{data.user.fullname}</p>
                      <p className='text-xs font-medium text-greyTextSecondary'><Moment fromNow>{data.updated_at}</Moment></p>
                  </div>
            </div>
            {/* <div className='w-64'>
                <div className="flex justify-end ">
                <img src={moreDots} alt="" onClick={()=>toggleMore(index)} className="cursor-pointer" />
                </div>
                { data.more ? <More publicdata = {data.public}/> : null }
     
            </div> */}
        </div>
        <div className='mb-6'> 
            <p>
                {data.description}
            </p>
        </div>
        <div className='w-full mb-6'>
            <img className='w-full object-cover' src={data.dataImage} alt="" />
        </div>
        <div className='border-y-2
         border-grey26 py-5 flex justify-center data-footer'>
             <Comment comments={data.comment} />
             <Share />
        </div>
        <CommentBase post={data} type="post"/>
    </div> 
    );
}
 
export default PostCard;