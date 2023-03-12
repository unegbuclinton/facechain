/* import images */
import dropdwn from "../../assets/images/riders/dropdown.svg"
import dropup from "../../assets/images/riders/dropup.svg"
import add2 from "../../assets/images/riders/add2.svg"

/* import react dependencies */
import { useState } from "react";

/* import component */
import ExchangeHeader from "./exchange-header";

const CopyStep = ({modalHandler}) => {

    const backHandler = () => {}
    const actionHandler = () => {}
    const [dropdown, setDropDown] = useState(true);

    return (
        <>         
        <ExchangeHeader backHandler={backHandler} stepTitle="Copy" actionTitle="Deposit" actionHandler={actionHandler}/>
        <div className="px-[5%] py-[1.5rem]">
                  <div className="flex justify-between">
        <div className="flex items-center">
                  <img className="mr-4 h-[36px]" src="https://cdn.icon-icons.com/icons2/2407/PNG/512/binance_icon_146221.png" alt="" />
                  <div>
                  <div className="text-[16px] text-white">Binance</div>

            </div>
              </div>
              <img src={dropdown} alt="" />
        </div> 
         <br />
        <div className="w-[100%]">
                <div className="flex flex-wrap justify-between w-[100%]">

                    <div className="basis-[100%] md:basis-[48%] w-[100%] mb-8">
                    <div className="py-2 border-[1px] border-[#979797] rounded-[5px] ">
                   <div className="px-4 text-[12px] text-[#979797]">Copy Coin</div>
                   <select className="w-[100%] px-4 text-primary outline-0 bg-transparent" name="" id="">
                       <option value="">1</option>
                       <option value="">2</option>
                   </select>
                    </div>
                    <div className="flex text-white justify-center items-center bg-primary rounded-[5px] h-[50px] px-8 mt-2 cursor-pointer">
                  <img className="mr-4" src={add2} alt="" />
                  <div>Add copy coin</div>
            </div>
                    </div>

                    <div className="basis-[100%] md:basis-[48%] w-[100%]">
                    <div className="mb-8 py-2 border-[1px] border-[rgb(151,151,151)] rounded-[5px] ">
                   <div className="px-4 text-[12px] text-[#979797]">Amount to Deposit</div>
                   <input className="w-[100%] px-4 text-primary outline-0 bg-transparent" placeholder="Enter Amount" type="text" />
                    </div>
                    </div>
                  </div>


                  <div className="flex flex-wrap justify-between w-[100%]">
                  <div className="basis-[100%] md:basis-[48%] w-[100%]">
                <div className="mb-8 py-2 border-[1px] border-[#979797] rounded-[5px] ">
                <div className="px-4 text-[12px] text-[#979797]">Stop copying if you deposit drops below</div>
                <input className="w-[100%] px-4 text-primary outline-0 bg-transparent" placeholder="Enter Amount" type="text" />
                </div>
                </div>               
                </div>

                <div onClick={()=>{setDropDown(!dropdown)}} className="w-auto cursor-pointer flex text-primary items-center">
                    <div className="mr-4">Additional Settings</div>
                    { dropdown ? <img src={dropup} alt="" /> : <img src={dropdwn} alt="" /> }
                </div>
                   <br />
                {
            dropdown ? 
     <div className="flex flex-wrap justify-between w-[100%]">
       <div className="flex flex-wrap justify-between basis-[100%] md:basis-[48%] w-[100%]">
         <div className="basis-[100%] md:basis-[68%]">
         <div className="mb-8 md:mb-0 py-2 border-[1px] border-[rgb(151,151,151)] rounded-[5px] ">
                   <div className="px-4 text-[12px] text-[#979797]">Amount of Limit</div>
                   <input className="w-[100%] px-4 text-primary outline-0 bg-transparent" placeholder="100" type="text" />
                    </div>
         </div>
         <div className="basis-[100%] md:basis-[30%]">
         <div className="py-2 border-[1px] border-[#979797] rounded-[5px] ">
                   <div className="px-4 text-[12px] text-[#979797]">By Period</div>
                   <select className="w-[100%] px-4 text-primary outline-0 bg-transparent" name="" id="">
                       <option value="">1</option>
                       <option value="">2</option>
                   </select>
                    </div>
         </div>
        </div>
        </div>
      : null
        }
            </div> 
        </div>

        </>
    );
}
 
export default CopyStep;