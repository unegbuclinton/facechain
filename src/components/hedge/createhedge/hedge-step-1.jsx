import HedgeHeader from "./hedge-header";

import { useState } from "react";
import HedgeImage from "./hedge-image";
const HedgeStep1 = ({currentStep,proceedStep}) => {

    const backHandler = () => {}
    const actionHandler = () => {}
    const [dropdown, setDropDown] = useState(true);

    return (
        <>         
        <HedgeHeader currentStep ={currentStep} backHandler={backHandler} stepTitle="Creating Hedge" actionTitle="Deposit" actionHandler={proceedStep}/>
        <div className="px-[5%] py-[1.5rem]">
        <HedgeImage/>
         <br />
        <div className="w-[100%]">
                <div className="flex flex-wrap justify-between w-[100%]">

                    <div className="basis-[100%] md:basis-[48%] w-[100%] mb-8">
                    <div className="mb-8 py-2 border-[1px] border-[rgb(151,151,151)] rounded-[5px] ">
                   <div className="px-4 text-[12px] text-[#979797]">Name a Hedge</div>
                   <input className="w-[100%] px-4 text-primary outline-0 bg-transparent" placeholder="Enter a name" type="text" />
                    </div>                   
                    </div>

                    <div className="basis-[100%] md:basis-[48%] w-[100%]">
                    <div className="py-2 border-[1px] border-[#979797] rounded-[5px] ">
                   <div className="px-4 text-[12px] text-[#979797]">Crypto Exchange</div>
                   <select className="w-[100%] px-4 text-primary outline-0 bg-transparent" name="" id="">
                       <option value="">1</option>
                       <option value="">2</option>
                   </select>
                    </div>
                    </div>
                  </div>

                
            </div> 
        </div>

        </>
    );
}
 
export default HedgeStep1;