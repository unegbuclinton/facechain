const TransactionTile = () => {
    return (
        <>
        <div className="text-[#979797] text-[12px] mb-3 px-4">Yesterday</div>
        <div className="w-[100%] border-t-[1px] border-[#383838] p-4">
            <div className="flex justify-between text-white">
                <div>USD</div>
                <div>100</div>
            </div>
            <div className="flex justify-between">
                <div className="text-[#979797] text-[12px]">2022-03-02</div>
                <div className="text-primary text-[12px]">Profit</div>
            </div>
        </div>
         </>
    );
}
 
export default TransactionTile;