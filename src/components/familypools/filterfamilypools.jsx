// Import Asset Images 
import SearchIcon from '../../assets/images/predictions/search.svg';
import FilterIcon from '../../assets/images/predictions/filter.svg';
import FilterIcongray from "../../assets/images/predictions/IconFilter.svg"

// Import Component 
import FilterModal from './filtermodal';

/* import react dependencies */
import { useState, useRef } from 'react';

const FilterFamilyPools = () => {
    const [show, setShow] = useState(false)
    const modalRef = useRef()

    function showModal(e){
        e.preventDefault()
        setShow(true)
    }

    function closeModal(e){
        e.stopPropagation()
        setShow(false)
        modalRef.current.resetValues()
    }

    return (
        <div className=''>
            <form action="" className='w-full flex justify-between align-center'>
                <div className="relative w-full  md:w-11/12  md:mr-4">
                     <input className="w-full py-2 px-10 rounded-md bg-darkGrey bg-opacity-70 text-white" type="text" 
                     placeholder="Search" required/>
                     
                     <img src={SearchIcon} className="absolute cursor-pointer left-2 top-2" />
                     <button onClick={(e)=> showModal(e)}> 
                     <img src={FilterIcongray} className="absolute cursor-pointer right-3.5 top-3 border-l border-[#BFBFC3] pl-1.5 md:hidden"/>
                     </button>
                </div>
                <button className='bg-primary md:flex text-white px-8 flex flex-row justify-between items-center rounded-md' onClick={(e)=> showModal(e)}>
                   <img className='mr-3' src={FilterIcon} alt="" />
                    Filter
                </button>
            </form>
            <FilterModal show={show} close={closeModal} ref={modalRef} />
        </div>
    );
}
 
export default FilterFamilyPools;