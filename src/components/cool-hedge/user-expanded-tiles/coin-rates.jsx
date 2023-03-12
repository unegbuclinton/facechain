

const CoinRates = () => {
    return (
        <>

            <div className="flex">
                <div className="flex justify-between w-[100%]">

                    <div className="flex items-center">
                        <img className="mr-4 h-[36px]" src="https://bitcoin.org/img/icons/opengraph.png?1651392467" alt="" />
                        <div>
                            <p className="text-[16px] text-white">Bitcoin</p>
                            <p className="text-white opacity-[80%] text-[14px]">BTC/USDT </p>

                        </div>

                    </div>

                    <div>
                        <p className=" text-[#666666]">Price</p>
                        <p className="text-[16px] text-white">$42,250</p>
                    </div>

                </div>
            </div>

            <br />

            <div className="flex">
                <div className="flex justify-between w-[100%]">

                    <div className="flex items-center">
                        <div>
                            <p className="text-[13px] text-white opacity-[80%]">Quantity</p>
                            <p className="text-white text-[14px]">0.521 BTC</p>

                        </div>

                    </div>

                    <div>
                        <p className=" text-[13px] text-[#666666]">Limit Order Price</p>
                        <p className="text-[16px] text-white">42,250 USDT</p>
                    </div>

                </div>
            </div>

        </>
    );
}

export default CoinRates;