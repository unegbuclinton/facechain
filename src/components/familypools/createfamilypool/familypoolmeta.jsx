import ImagePicker from "../../common/imagepicker/imagepicker";

const FamilyPoolMeta = ({handleName, handleExchange}) => {
    return (
        <div className="bg-darkGrey text-white font-primaryFont w-full px-4 sm:px-10 pb-10">
            <div className="flex justify-center mt-8">
                <ImagePicker />
            </div>
            <div className="mt-8 flex flex-col sm:flex-row justify-between ">
                <div className="border border-[#979797] rounded-md px-2 py-2 w-full sm:w-[48%] mb-5">
                    <label htmlFor="" className="text-[#979797] text-xs">Name a Family Pool</label>
                    <input className="block w-full outline-0 bg-transparent text-primary placeholder-primary" type="text" placeholder="Enter a name" onInput={handleName} />
                </div>
                <div className="border border-[#979797] rounded-md px-2 py-2 w-full sm:w-[48%] mb-5">
                    <label htmlFor="" className="text-[#979797] text-xs">Crypto Exchange</label>
                    <select className="block w-full outline-0 bg-transparent text-primary placeholder-primary ml-[-4px]" onChange={handleExchange}>
                        <option value="">Choose the Exchange</option>
                        <option value="Binance">Binance</option>
                    </select>
                </div>
            </div>
        </div>
     );
}
 
export default FamilyPoolMeta;