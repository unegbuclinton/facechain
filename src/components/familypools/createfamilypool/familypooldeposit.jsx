import RangeSlider from "../../common/rangeslider/rangeslider";

const FamilyPoolDeposit = ({depositValue, memberValue, action}) => {
  
    return (
        <div className="bg-darkGrey text-white font-primaryFont w-full px-4 sm:px-10 py-10">

            <div className="mt-8 flex justify-between">
                <div className="px-2 py-2 w-[48%]">
                    <p className="text-xl">Choose <span className="text-primary">Minimum Deposit</span></p>
                    <p className="text-primary text-lg my-2">$ {depositValue}</p>
                    <p className="text-xs text-gray-400">Minimum deposit to join the pool</p>
                    <div className="mt-4">
                       <RangeSlider min="150" max="5000" value={depositValue} action={action} name="minDeposit" />
                    </div>
                </div>
                <div className="px-2 py-2 w-[48%]">
                    <p className="text-xl">Choose <span className="text-primary">Max Members</span></p>
                    <p className="text-primary text-lg my-2">{memberValue} members</p>
                    <p className="text-xs text-gray-400">Max number of pool members</p>
                    <div className="mt-4">
                        <RangeSlider min="3" max="20" value={memberValue} action={action} name="totalMembers" />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default FamilyPoolDeposit;