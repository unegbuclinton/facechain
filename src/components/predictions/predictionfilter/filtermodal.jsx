/* Import Styling */
import '../predictions.css'

/*Import icons*/
import closeIcon from '../../../assets/images/modal/close.svg';

/* import components */
import RangeSlider from '../../common/rangeslider/rangeslider';

/* import dependencies */
import { useState, forwardRef, useImperativeHandle } from 'react';


const FilterModal = forwardRef((props, ref) => {
    const {show, close} = props

    // Create states
    const [roiValue, setRoiValue] = useState(50);
    const [predictionValue, setPredictionValue] = useState(50);
    const [location, setLocation] = useState('');
    const [cryptoExchange, setCryptoExchange] = useState('');
    const [pairs, setPairs] = useState('');
   

    // Create functions
    function handleRangeInput(e){
        if(e.target.name === 'roi')  setRoiValue(e.target.value)
        if(e.target.name === 'prediction') setPredictionValue(e.target.value)
    }
    
    function handleSelectInputs(e){
        if(e.target.name === 'location') setLocation(e.target.value)
        if(e.target.name === 'cryptoExchange') setCryptoExchange(e.target.value)
        if(e.target.name === 'cryptoPairs') setPairs(e.target.value)
    }
   

    // Reset All values on modal on reset click
    useImperativeHandle(ref, () => ({
        resetValues: () => {
           resetFilter()
        }
    }))

    //Reset Filter
    function resetFilter(){
        setRoiValue(50)
        setPredictionValue(50)
        setLocation('')
        setCryptoExchange('')
        setPairs('')
    }

    if(!show){
        return null
    }else{
        return (
            <div className="filter-modal" onClick={close}>
                 <div className="filter-modal-content w-full h-full md:h-fit md:w-2/3 bg-black md:bg-darkGrey rounded-lg py-10 px-8 text-white" onClick={e => e.stopPropagation()}>
                      <div className='font-primaryFont'>
                            <div className="flex flex-row justify-between mb-8">
                                <p></p>
                                <p className='text-white text-lg'>Filter</p>
                                <img className='cursor-pointer' src={closeIcon} alt="" onClick={close}/>
                            </div>
                            <div className="w-full text-greyAE ">
                                <div className="flex flex-col md:flex-row w-full justify-between">
                                    <div className='w-full md:w-[48%] mb-8'>
                                        <p>ROI <span className='text-primary ml-3'>{roiValue}%</span></p>
                                        <RangeSlider min='0' max='100' value={roiValue} action={handleRangeInput} name="roi"/>
                                    </div>
                                    <div className='w-full md:w-[48%] mb-8'>
                                        <p>Prediction Rate<span className='text-primary ml-3'>{predictionValue}%</span></p>
                                        <RangeSlider min='0' max='100' value={predictionValue} action={handleRangeInput} name="prediction"/>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row w-full justify-between">
                                    <div className='w-full md:w-[48%] mb-8'> 
                                        <label htmlFor="">Location</label>
                                        <select name="location" id="" className='block w-full bg-[#292929] mt-2 py-3 px-3 border-r-8 border-[#292929]' value={location} onChange={handleSelectInputs}>
                                            <option value="All">All</option>
                                            <option value="United Kingdom">United Kingdom</option>
                                            <option value="Belgium">Belgium</option>
                                        </select>
                                    </div>
            
                                    <div className='w-full md:w-[48%] mb-8'>
                                        <label htmlFor="">Crypto-Exchange</label>
                                        <select name="cryptoExchange" id="" className='block w-full bg-[#292929] mt-2 py-3 px-3 border-r-8 border-[#292929]' value={cryptoExchange} onChange={handleSelectInputs}>
                                            <option value="All">All</option>
                                            <option value="United Kingdom">United Kingdom</option>
                                            <option value="Belgium">Belgium</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row w-full justify-between">
                                    <div className='w-full md:w-[48%] mb-8'>
                                        <label htmlFor="">Pair</label>
                                        <select name="cryptoPairs" id="" className='block w-full bg-[#292929] mt-2 py-3 px-3 border-r-8 border-[#292929]' value={pairs} onChange={handleSelectInputs}>
                                             <option value="All">All</option>
                                            <option value="United Kingdom">United Kingdom</option>
                                            <option value="Belgium">Belgium</option>
                                        </select>
                                    </div>
                                    <div className='w-full md:w-[48%] text-white mb-8 flex  md:justify-end'>
                                    <div className='flex justify-around md:items-end w-full'>
                                        <button className='border-2 w-[48%] border-primary rounded-md  py-2 px-12 flex justify-center ' onClick={resetFilter}>Reset</button>
                                        <button className='bg-primary w-[48%] rounded-md py-2 px-12 flex justify-center'>Apply</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                      </div>
                 </div>
             </div>
         );
    }

})
 
export default FilterModal;