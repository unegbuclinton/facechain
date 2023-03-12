import Accordion from "../../common/accordion/accordion";
import ImagePicker from "../../common/imagepicker/imagepicker";
import RangeSlider from "../../common/rangeslider/rangeslider";
import { useState } from "react";

const EditHedge = () => {
    const [depositValue, setDepositValue] = useState(150)
    const [memberValue, setMemberValue] = useState(4)

    const handleRangeInput = (e)=>{
        if(e.target.name === 'minDeposit')  setDepositValue(e.target.value)
        if(e.target.name === 'totalMembers') setMemberValue(e.target.value)
    }
    return (
        <>
            <Accordion title="Edit Family Pool" type="settings">
                <div className="bg-darkGrey text-white font-primaryFont w-full pb-2">
                    <div className="flex justify-center mt-8">
                        <ImagePicker />
                    </div>
                    <div className="mt-8 flex flex-col sm:flex-row justify-between ">
                        <div className="border border-[#979797] rounded-md px-2 py-2 w-full mb-5">
                            <label htmlFor="" className="text-[#979797] text-xs">Name a Family Pool</label>
                            <input className="block w-full outline-0 bg-transparent text-primary placeholder-primary" type="text" placeholder="Enter a name" />
                        </div>
                      
                    </div>
                 <div className="mt-2 flex flex-col justify-between sm:flex-row">
                    <div className="px-2 py-2 w-full sm:w-[48%] ">
                        <p className="text-base">Choose <span className="text-primary">Minimum Deposit</span></p>
                        <p className="text-primary text-lg my-2">$ {depositValue}</p>
                        <p className="text-xs text-gray-400">Minimum deposit to join the pool</p>
                        <div className="mt-4">
                        <RangeSlider min="150" max="5000" value={depositValue} action={handleRangeInput}  name="minDeposit" />
                        </div>
                    </div>
                    <div className="px-2 py-2 w-full sm:w-[48%]">
                        <p className="text-base">Choose <span className="text-primary">Max Members</span></p>
                        <p className="text-primary text-lg my-2">{memberValue} members</p>
                        <p className="text-xs text-gray-400">Max number of pool members</p>
                        <div className="mt-4">
                            <RangeSlider min="3" max="20" value={memberValue}  name="totalMembers" action={handleRangeInput} />
                        </div>
                    </div>
                  </div>
                </div>
            </Accordion>
        </>
     );
}
 
export default EditHedge;