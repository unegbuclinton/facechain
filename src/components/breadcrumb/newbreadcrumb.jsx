// Import Dependency 
import { useNavigate } from 'react-router-dom';

// Import Asset Images 
import arrowIcon from '../../assets/images/predictions/angle-right.svg';
import moreDots from '../../assets/images/family-pools/whitedots.svg'

const NewBreadCrumb = ({pagetitle}) => {
    const navigate = useNavigate();
    return ( 
        <div className="z-[100] tab-menu flex justify-start border-b border-gray-800 text-white py-5">
            <div className='flex w-[90%] md:w-2/3 m-auto justify-between'>
                <button className='flex justify-center items-center hidden md:flex'>
                  <img className='cursor-pointer' src={arrowIcon} alt="" onClick={()=> navigate(-1)} />
                  <p className=''>Back</p>
                </button>
                <div className='flex justify-center items-center'>
                    <img className='cursor-pointer md:hidden' src={arrowIcon} alt="" onClick={()=> navigate(-1)} />
                    <p className=''>{pagetitle}</p>
                </div>
                <p className='hidden md:flex'>More</p>
                <img src={moreDots} alt="" className="cursor-pointer md:hidden" />
            </div>
        </div> 
     );
}
 
export default NewBreadCrumb;