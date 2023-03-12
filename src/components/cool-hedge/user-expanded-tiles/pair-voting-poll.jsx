import circle from "../../../assets/images/cool-hedge/circle.svg"

const PairVotingPoll = () => {
    return (
        < div className="mb-6">
            <div className="flex items-center">
                <div className="w-[7%]"><p className="text-[12px] text-white">(70%)</p></div>

                <div className="w-[93%]">
                    <div style={{ width: `70%` }} className="h-[5px] bg-primary rounded-[5px]"></div>
                </div>

            </div>

            <div className="flex items-start">
                <img src={circle} alt="" className="mr-4 mt-[0.8rem]" />
                <div className="w-full">
                    <div className="flex justify-between w-[100%]">

                        <div className="flex items-center">
                            <img className="mr-4 h-[36px]" src="https://bitcoin.org/img/icons/opengraph.png?1651392467" alt="" />
                            <div>
                                <p className="text-[16px] text-white">Bitcoin</p>
                                <p className="text-white opacity-[80%] text-[14px]">BTC/USDT </p>

                            </div>

                        </div>

                        <div>
                            <p className=" text-[#666666] text-right">Price</p>
                            <p className="text-[16px] text-white text-right">$42,250</p>
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

                </div>




            </div>
        </div>
    );
}

export default PairVotingPoll;