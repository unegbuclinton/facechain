// Import Dependency
import { useNavigate } from 'react-router-dom';

// Import Asset Images 
import arrowIcon from '../../assets/images/predictions/angle-right.svg';

const Breadcrumb = ({pagetitle}) => {
    const navigate = useNavigate();

    return (
        <div className="z-[100] fixed top-[4rem] left-0 right-0 tab-menu flex justify-start border-b border-gray-800 text-white py-5">
            <div className='flex w-2/3 m-auto'>
                <img className='cursor-pointer' src={arrowIcon} alt="" onClick={()=> navigate(-1)} />
                <p>{pagetitle}</p>
            </div>
       </div> 
    );
}
 
export default Breadcrumb;