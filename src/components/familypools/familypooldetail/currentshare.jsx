import arrow from '../../../assets/images/family-pools/angleright.svg'
const CurrentShare = () => {
    return (
        <div className="text-white flex w-full justify-between bg-[#1e1f21] px-6 py-6 rounded-md mb-4"> 
            <div>
                <p className="text-[#979797] mb-2">Your current share</p>
                <p className="text-2xl font-semibold">$0</p>
            </div>
            <div className="flex items-end">
                <button className='text-primary flex items-center'>Transactions <img className='ml-2' src={arrow} alt="" /></button>
            </div>
        </div>
     );
}
 
export default CurrentShare;