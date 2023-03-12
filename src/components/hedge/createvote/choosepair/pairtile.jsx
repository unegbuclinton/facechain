const PairTile = ({item, pairHandler}) => {
    return (
        <>         
            <div className="flex justify-between items-center w-[100%] border-b-[1px] border-[#383838]  py-4 cursor-pointer">
                <div className="flex items-center">
                    <img src={item.image} className="mr-4 w-[40px] h-[40px] rounded-[50%] object-cover" alt="" />
                    <div>
                        <div className="text-white">{item.title}</div>
                        <div className="text-[#666666] text-[14px]">{item.type}</div>
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <div className="text-[16px] text-white mr-4">${item.amount}</div>
                    <input type="checkbox" onClick={() => { pairHandler(item) }} />
                </div>
            </div>
        </>
    );
}
 
export default PairTile;