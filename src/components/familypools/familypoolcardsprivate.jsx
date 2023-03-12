// Import Dependency 
import { Link,} from 'react-router-dom';

// Import Asset Images 
import exchange from '../../assets/images/familypools/binance.png';
import poolBackground from '../../assets/images/family-pools/familypoolbck.png'



const FamilyPoolCardPrivate = ({data, type}) => {
    
    const familyPoolList = data.map((pool, index)=>(
            <div className='flex bg-darkGrey w-full mb-8 min-h-[240px] rounded-lg overflow-hidden' key={index}>
                <img className='w-[35%] object-cover' src={poolBackground} alt="family pool backgroud image" />
                <div className='w-[65%] flex justify-between px-10 py-10 text-white'>
                    <div className='w-[60%] mr-2' >
                        <p className='text-xl line-clamp-2'>{pool.poolname}</p>
                        <ul className='text-greyTextSecondary flex mt-3 mb-10'>
                            <li>3 Riders</li>
                            <li className='list-disc list-inside ml-5'>1 Admin</li>
                        </ul>
                        <button className='border px-16 py-3 rounded-md'>Open</button>
                    </div>
                    <div className='flex justify-end items-start w-[35%]'>
                        <img className='mr-2' src={exchange} alt="" />
                        <p className='bg-primary px-2 text-black rounded-md'>{pool.volume}</p>
                    </div>
                </div>
            </div>      
    ))
    return (
        <>
            <div className='w-full flex flex-wrap justify-between'>
                {familyPoolList}
            </div>    
        </>
        
     );
}
 
export default FamilyPoolCardPrivate;

