import avatar from '../../../../assets/images/header/avatar.jpg'
import VoteAction from './voteaction';
import VotedPairs from './votedpairs';

const Vote = ({selectedPairs}) => {
    return (
        <div className="text-white mt-4 bg-[#1E1F21] px-6 py-6">
            <div className='flex justify-between mb-4 flex-col md:flex-row'>
                <div className='flex items-center'>
                    <img className='w-10 h-10 sm:w-16 sm:h-16 rounded-full object-cover mr-4' src={avatar} alt="" />
                    <p className="">Alan Userovich</p>
                </div>
                <div className='text-xs sm:text-base mt-4 mb-2 sm:mt-0'>
                    <button className='bg-[#2E2C2C] px-4 sm:px-8 py-1 sm:py-2 mr-2 rounded-md'>Buy</button>
                    <button className='bg-[#2E2C2C] px-4 sm:px-8 py-1 sm:py-2 rounded-md'>Limit Order</button>
                </div>
            </div>
            <div className='flex justify-between mb-4'>
                <p className='text-[#BFBEBE]'>Ongoing Vote For Coin</p>
                <p>15hr left</p>
            </div>
            <div className='mb-4'>
                <p className='text-[#8B8B8B]'>The trader Alan Userovich proposed to invest a coin. Select a variant.</p>
            </div>
            <VotedPairs selectedPairs={selectedPairs}/>
           <VoteAction  />
        </div>
     );
}
 
export default Vote;