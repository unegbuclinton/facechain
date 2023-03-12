import Search from "../../../common/search/search";
import pairData from "../../../../mockdata/pairdata";
import PairTile from "./pairtile";
import SelectedPair from "./selectedpair";

const ChoosePair = ({selectedPairs, action}) => {
    return ( 
        <div className="flex px-10 justify-between">
            <div className="w-[48%]">
                <Search/>
                <div className="flex justify-between mt-6 border-b pb-2 border-[#383838]">
                    <p className="text-xs">Pair</p>
                    <p className="text-xs">Price</p>
                </div>
                {pairData && pairData.map((item, index) =>(<PairTile key={index} item={item} pairHandler={action}  />))}
            </div>
            <div className="w-[48%] flex flex-col items-center mt-16">
                {selectedPairs.length > 0 ? 
                <div className="w-full">
                    <p className="text-xs mb-2">Selected Pairs</p>
                    {selectedPairs.map((item, index) =>(<SelectedPair key={index} item={item} />))}
                </div> 
                : <p className="text-xl text-center">Choose those pairs that you will buy or sell</p> }
            </div>
        </div>
     );
}
 
export default ChoosePair;