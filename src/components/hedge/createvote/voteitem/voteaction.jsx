import thumbsUp from '../../../../assets/images/family-pools/thumbsup.png'
import thumbsDown from '../../../../assets/images/family-pools/thumbsdown.png'
const VoteAction = () => {
    return (
        <div>
            <div className='flex items-center relative px-6'>
                <label className="pair-radio text-xs flex items-center mr-4 mt-2">
                        <input type="radio" name="radio" value="Binance"/>
                        <span className="checkmark self-center w-5 h-5 sm:w-[25px] sm:h-[25px]"></span>
                </label>
            <div className='flex'>
                <img className='mr-4' src={thumbsUp} alt="" />
                <p className='self-end'>Yes <span className='ml-2'>(75%)</span></p>
            </div>
            </div> 
            <div className='bg-[#2E2C2C] w-full h-[2px] flex items-center mt-6'>
                <div className='w-[50%] h-1 bg-primary rounded-full'></div>
            </div>

            <div className='flex items-center relative px-6 mt-4'>
                <label className="pair-radio text-xs flex items-center mr-4 mb-2">
                        <input type="radio" name="radio" value="Binance"/>
                        <span className="checkmark self-center w-5 h-5 sm:w-[25px] sm:h-[25px]"></span>
                </label>
            <div className='flex'>
                <img className='mr-4 self-start' src={thumbsDown} alt="" />
                <p className='self-center'>No <span className='ml-2'>(10%)</span></p>
            </div>
            </div> 
            <div className='bg-[#2E2C2C] w-full h-[2px] flex items-center mt-5'>
                <div className='w-[10%] h-1 bg-primary rounded-full'></div>
            </div>
       </div>
     );
}
 
export default VoteAction;