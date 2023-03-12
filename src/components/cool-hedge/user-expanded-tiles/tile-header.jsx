

const TileHeader = () => {
    return (
        <>

            <div className="flex justify-between items-center">

                <div className="flex items-center">
                    <div className="mr-4 w-[56px] h-[56px] rounded-[50%] bg-auto bg-no-repeat bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/3031397/pexels-photo-3031397.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')" }}></div>
                    <p className="text-[16px] text-white">User Userovich</p>
                </div>

                <div className="flex">
                    <div className="flex justify-center items-center rounded-[4px] px-4 h-[32px] text-[14px] text-[#BFBEBE] bg-[#2E2C2C] mr-3">Buy</div>
                    <div className="flex justify-center items-center rounded-[4px] px-4 h-[32px] text-[14px] text-[#BFBEBE] bg-[#2E2C2C]">Limit Order</div>
                </div>

            </div>

        </>
    );
}

export default TileHeader;