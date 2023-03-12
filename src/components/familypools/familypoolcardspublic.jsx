// Import Dependency 
import { Link,} from 'react-router-dom';
import { useState } from 'react';

// Import Asset Images
import exchange from '../../assets/images/familypools/binance.png';
import poolBackground from '../../assets/images/family-pools/familypoolbck.png'

// import components
import ViewFamilyPool from './viewfamilypool';

const FamilyPoolCardPublic = ({data}) => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedPool, setSelectedPool] = useState(null);

    const closeModal = () => {
        setIsOpen(false);
        setSelectedPool(null);
    }

    const openModal = (pool) => {
       if(pool){
            setSelectedPool(pool);
            setIsOpen(true);
       }
        
    }

    const familyPoolList = data.map((pool, index)=>(
        <div className='flex flex-col bg-darkGrey w-[48%] mb-8 h-[400px] rounded-lg overflow-hidden' key={index}>
            <img className='h-[55%] object-cover' src={poolBackground} alt="family pool backgroud image" />
            <div className='flex justify-between px-6 py-4'>
                <div className='w-[60%] mr-2'>
                        <p className='text-xl text-white line-clamp-1'>{pool.poolname}</p>
                        <ul className='text-greyTextSecondary flex mt-2'>
                            <li>3 Riders</li>
                            <li className='list-disc list-inside ml-5'>1 Admin</li>
                        </ul>
                </div>
                <div className='flex items-start w-[35%] justify-end'>
                    <img className='mr-2' src={exchange} alt="" />
                    <p className='bg-primary px-2 text-black rounded-md'>{pool.volume}</p>
                </div>
            </div>
            <div className='px-6 flex justify-center mt-4'>
                <button className='border px-14 py-2 rounded-md text-white mr-6' onClick={()=>{openModal(pool)}}>View</button>
                <button className='px-14 py-2 rounded-md text-white bg-primary'>Join</button>
            </div>
        </div>  
    ))
    return (
        <>
            <div className='w-full flex flex-wrap justify-between'>
               {familyPoolList}
            </div>
            {isOpen && <ViewFamilyPool isOpen={isOpen} closeModal={closeModal} data={selectedPool} />}
        </>
        
     );
}
 
export default FamilyPoolCardPublic;

