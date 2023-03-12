import vote from '../../../assets/images/family-pools/vote.png'
import plus from '../../../assets/images/family-pools/plus-square.svg'
import { Link } from 'react-router-dom';


const CreateVoteButton = ({votesArePresent}) => {
    return (
        <div className='flex flex-col items-center py-10'>
            {!votesArePresent && ( <><img className='self-center' src={vote} alt="" />
            <p className='text-white my-5 font-light text-lg'>Create the first voting</p></>
            )} 
            <Link to='/family-pools/create-vote'>
                <button className="bg-primary px-24 py-4 rounded-full font-semibold flex">
                    <img className='mr-2' src={plus} alt="" />
                    New Voting
                </button>
            </Link>

        </div>
    );
}

export default CreateVoteButton;