import arrow from '../../../assets/images/family-pools/angleright.svg'
const PoolMessages = () => {

	return (
		<div className="text-white flex w-full justify-between bg-[#1e1f21] px-6 py-6 rounded-md"> 
			<div>
				<p className="text-[#979797] mb-2">Unread Messages</p>
				<p className="text-2xl font-semibold">0</p>
			</div>
			<div className="flex items-end">
				<button className='text-primary flex items-center'>Chat <img className='ml-2' src={arrow} alt="" /></button>
			</div>
		</div>
	);
}
 
export default PoolMessages;