const VotedPairs = ({selectedPairs}) => {
    const pairList = selectedPairs.map((pair, index) => {
        return (
            <div className='text-xs sm:text-base' key={index}>
            <div className='flex justify-between mb-4'>
                <div className='flex items-center'>
                    <img className="w-10 h-10 sm:w-14 sm:h-14 rounded-full mr-4" src={pair.image} alt="" />
                    <div>
                        <p>{pair.type}</p>
                        <p>{pair.title}</p>
                    </div>
                </div>
                <div className='text-right'>
                    <p>Price</p>
                    <p>${pair.amount}</p>
                </div>
            </div>
            <div className='flex justify-between mb-8'>
                <div>
                    <p className='text-[#8B8B8B]'>Quantity</p>
                    <p>0.521 BTC</p>
                </div>
                <div className='text-right'>
                    <p className='text-[#8B8B8B]'>Limit order price</p>
                    <p>42,200 USDT</p>
                </div>
            </div>
            </div>
        )
    })
    return (
        <>
         {pairList}
        </>
     );
}
 
export default VotedPairs;