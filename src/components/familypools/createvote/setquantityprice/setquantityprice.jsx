import FilterToggle from "../../../common/filters/filtertoggle";
import { useState } from "react";
import LimitOrder from "./limitorder";
import MarketOrder from "./marketorder";

const SetQuantityPrice = ({selectedPairs}) => {
    const categories = ['Limit Order', 'Market Order'];

    const [toggle, setToggle] = useState('Limit Order');

    const handleToggle = (category) => setToggle(category);
    return (
        <div className="px-10">
            <div className="flex flex-col bg-[#2E2C2C] text-center py-4 mb-10">
                <p className="text-[#AEAEAE] pb-2">FAMILY POOL BALANCE</p>
                <p className="text-2xl">$3,689,900.56</p>
            </div>
          <FilterToggle setToggle={handleToggle} active={toggle} categories={categories} />

          {toggle === "Limit Order" &&  <LimitOrder data={selectedPairs} />}
          {toggle === "Market Order" && <MarketOrder data={selectedPairs} />}
        </div>
     );
}
 
export default SetQuantityPrice;