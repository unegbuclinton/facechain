// Import Asset Images 
import BitcoinIcon from '../../assets/images/predictions/bitcoin.svg';

const CurrencyPair = ({data, action}) => {
    return (
        data.map((item, index) => (
            <div className='flex justify-between border-b border-[#3C3E43] px-4 py-3' key={index}>
                <div className='flex items-center'>
                    <img className='sm:mr-4 mr-2  w-6 sm:w-full' src={BitcoinIcon} alt="" />
                    <p className='text-sm sm:text-base'>Bitcoin</p>
                </div>
               
                <div className='flex items-center'>
                    <p className='mr-10 text-sm sm:text-base'>BTC/USDT</p>
                    <label className="pair-radio text-xs flex items-center ">
                        <input type="radio" name="radio" onClick={action} value="BTC/USDT"/>
                        <span className="checkmark self-center w-5 h-5 sm:w-[25px] sm:h-[25px]"></span>
                    </label>
                </div> 
            </div>
        ))
     );
}
export default CurrencyPair;