/* import react dependencies */
import { useState } from 'react';

/* import image */
import closeIcon from '../../../assets/images/settings/x.svg'

/* import styling */
import "./filter-modal.css"

const FilterModal = ({modalHandler}) => {
    const [status, setStatus] = useState(1);

    return (
        <div className="filter-modal">
            <div className="filter-card w-[90%] md:w-[60%]">
                <div className="mb-8 relative flex justify-center">
                    <div className="text-white font-bold text-[18px]">Filter</div>
                    <img onClick={modalHandler} className="cursor-pointer absolute top-0 right-0" src={closeIcon} alt="" />
                </div>

                <div className="w-[100%]">
                    <div className="flex flex-wrap justify-between w-[100%] mb-6">
                    
                        <div className="basis-[100%] md:basis-[48%] w-[100%]">
                            <div className="text-[#979797] text-[14px] mb-2">Date</div>
                            <div className='flex justify-between items-center'>
                                <input className="w-[100%] px-4 py-2 text-white outline-0 bg-[#292929]" placeholder="dd/mm/yyyy" type="date" />   
                                <div className="text-[#979797] text-[12px] mx-3">to</div>
                                <input className="w-[100%] px-4 py-2 text-white outline-0 bg-[#292929]" placeholder="dd/mm/yyyy" type="date" />                         
                            </div>
                        </div>


                        <div className="basis-[100%] md:basis-[48%] w-[100%]">
                            <div className="text-[#979797] text-[14px] mb-2">Status</div>    
                            <div className='flex justify-between items-center'>
                                <div onClick={()=> setStatus(1)} className={ status === 1 ? 'filter-active' : 'filter-inactive' }>  
                                    Invested
                                </div> 
                                <div onClick={()=>{setStatus(2)}} className={ status === 2 ? 'filter-active' : 'filter-inactive' }>  
                                    Profit
                                </div>               
                            </div>             
                        </div>

                    </div>

                    <div className="flex flex-wrap justify-between w-[100%] mb-6">
                    
                        <div className="basis-[100%] md:basis-[48%] w-[100%]">
                            <div className="text-[#979797] text-[14px] mb-2">Name of Investor</div>
                            <select className="w-[100%] px-4 py-2 text-white outline-0 bg-[#292929]" name="" id="">
                                <option value="">1</option>
                                <option value="">2</option>
                            </select>
                        </div>

                        <div className="basis-[100%] md:basis-[48%] w-[100%]">
                            <div className="text-[#979797] text-[14px] mb-2">Coin</div>    
                            <select className="w-[100%] px-4 py-2 text-white outline-0 bg-[#292929]" name="" id="">
                                <option value="">1</option>
                                <option value="">2</option>
                            </select>           
                        </div>
                    </div>


                    <div className='flex justify-end'>
                        <div className="mr-4 flex text-white justify-center items-center border-[1px] border-primary bg-transparent rounded-[5px] h-[40px] px-8 mt-2 cursor-pointer font-bold">
                            Reset
                        </div>
                        <div className="flex text-black justify-center items-center bg-primary rounded-[5px] h-[40px] px-8 mt-2 cursor-pointer font-bold">
                            Apply
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
}
 
export default FilterModal;