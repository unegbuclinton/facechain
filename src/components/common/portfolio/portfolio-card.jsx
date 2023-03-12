/* import images */
import rateUp from '../../../assets/images/riders/rate-green.svg'
import rateDown from '../../../assets/images/riders/rate-red.svg'
const PortfolioCard = () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <div className="flex flex-wrap justify-between w-full">
            {data.map(() =>(
                <div className="flex flex-col justify-center items-center bg-[#0D0D0D] rounded-[5px] p-[10px] md:p-[20px] m-1 md:m-2 w-[47%]  md:w-[30%]">
                <img className="w-[40px] md:w-[64px] mb-6" src="https://cryptologos.cc/logos/bitcoin-btc-logo.png" alt="" />
                <div className="text-white mb-4 text-sm text-center md:text-base">Ripple (XRP) </div>
                <div className="flex justify-between w-[100%] mb-4 items-center">
                    <div className='text-white text-[10px] md:text-sm'>91,79 $</div>
                    <div className='flex items-center hidden text-[10px]md:text-sm'> <img className="mr-1 md:mr-2" src={rateDown} alt="" /> <div className="text-[#E40101]">0,97%</div></div>
                    <div className='flex items-center text-[10px] md:text-sm'> <img className="mr-1 md:mr-2" src={rateUp} alt="" /> <div className="text-[#3DD598]">0,97%</div></div>
                </div>
                <div className='bg-[#BFBFC3] rounded-[4px] h-[4px] w-[100%]'>
                <div className='bg-[#6098A0] rounded-[4px] h-[4px] w-[30%]'></div>
                </div>
                </div>
      
            ))}
            </div>
       
    );
}
 
export default PortfolioCard;