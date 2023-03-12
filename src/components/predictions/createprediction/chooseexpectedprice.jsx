/* Import Styling */
import '../predictions.css'

const ChooseExpectedPrice= ({startPrice, endPrice, action}) => {

    return (
        <div className="bg-darkGrey text-white font-primaryFont">
            <div>
                <p className='text-xl mb-2'>Predict the expected price</p>
                <p className='text-xs text-greyText'>input the change of the price.</p>
            </div>
           
            <div className='pair-table flex flex-col md:flex-row justify-between my-3 md:my-10'>
               <div className="w-fullmd:w-[48%] predictprice relative">
                   <p className="text-xs mt-2">Starting Pice</p>
                   <input type="text" value={startPrice.toLocaleString() + ' BTC/USDT'} readOnly />
               </div>
               <div className="w-full md:w-[48%] predictprice">
                   <p className="text-xs mt-2">Expected Target 1</p>
                   <input type="number" onChange={action} value={endPrice} />
               </div>
            </div>
        </div>
    );
}
 
export default ChooseExpectedPrice;