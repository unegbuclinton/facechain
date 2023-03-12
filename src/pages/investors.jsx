/* import components */
import Header from "../components/header/header";
import BottomNavigation from "../components/bottomnav/bottomnav";
import Topbar from "../components/riders/investors/top-bar";
import Summary from "../components/riders/investors/summary";
import InvestorTile from "../components/riders/investors/investor-tile";

/* import react dependencies */
import { useState } from "react";


const Investors = () => {

    const [selectedTile, setSelectedTile] = useState(false);

    const tileHandler = () => {
        setSelectedTile(!selectedTile);
    }
    return (
        <div className="bg-black h-screen overflow-auto ">
            <Header />
            <Topbar/>  
            <div className="overflow-auto mt-40 w-[90%] md:w-2/3 m-auto mb-4 pb-20 flex flex-col items-center justify-center">
            <div className="w-[100%] md:w-[70%]">
           
           <Summary/>
           <br />
           <InvestorTile tileHandler={tileHandler} selectedTile={selectedTile}/>
           </div>  
                 
            </div>
          
            <BottomNavigation />
        </div>
     );
}
 
export default Investors;