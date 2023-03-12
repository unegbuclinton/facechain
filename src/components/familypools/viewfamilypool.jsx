/**Import Assets */
import closeIcon from '../../assets/images/modal/close.svg';
import poolBackground from '../../assets/images/family-pools/familypoolbck.png';
import exchange from '../../assets/images/familypools/binance.png';

const ViewFamilyPool = ({closeModal, isOpen, data}) => {
    return (
        <div className="fixed insert-0 flex items-center justify-center  bg-black bg-opacity-70 overflow-y-auto h-full w-full left-0 top-0 z-[2000]" style={{display: isOpen ? 'flex' : 'none'}} onClick={closeModal}>
            <div className={`relative mx-auto w-2/3 shadow-lg rounded-md bg-[#2F3033]`} onClick={e => e.stopPropagation()}>
                <div className="relative">
                    <img className='cursor-pointer w-full object-cover h-64' src={poolBackground} alt=""/>
                    <img className='cursor-pointer absolute top-2 right-2' src={closeIcon} alt="" onClick={closeModal}/>
                </div>
                <div className='px-6 py-6'>
                    <div className='flex flex-row'>
                        <div className='mr-10'>
                            <p className='text-white text-xl'>{data.poolname}</p>
                            <ul className='text-greyTextSecondary flex mt-2'>
                                 <li>3 Riders</li>
                                 <li className='list-disc list-inside ml-5'>1 Admin</li>
                            </ul>
                        </div>
                        <div>
                            <div className='flex items-start'>
                                <img className='mr-2' src={exchange} alt="" />
                                <p className='bg-primary px-2 text-black rounded-md'>$100</p>
                            </div>
                        </div>
                        <div className='ml-auto'>
                            <button className='bg-primary px-16 py-2 text-white rounded-md'>Join</button>
                        </div>
                    </div>
                    <div className='mt-5 mb-5 border-b border-[#5a5a5a] pb-6'>
                        <p className='text-white text-base mb-2'>About this Pool</p>
                        <p className='text-[#8B8B8B] text-xs'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            <p className='text-white font-semi-bold'>Pool History</p>
                            <p className='text-[#8B8B8B] text-xs'>Created on August 1, 2019</p>
                        </div>
                        <div>
                            <p  className='text-white'>Total Members</p>
                            <p className='text-[#8B8B8B] text-xs'>5 Members</p>
                        </div>
                        <div>
                            <p className='text-white'>Total Profit</p>
                            <p className='text-[#8B8B8B] text-xs'>$526</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ViewFamilyPool;