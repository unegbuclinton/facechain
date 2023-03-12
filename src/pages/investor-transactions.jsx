/* import components */
import Header from "../components/header/header";
import BottomNavigation from "../components/bottomnav/bottomnav";
import Topbar from "../components/rider-profile/top-bar";
import TransactionTile from "../components/riders/investors/transaction-tile";
import TransactionActions from "../components/riders/investors/transaction-actions";
import FilterModal from "../components/riders/investors/filter-modal";


/* import react dependencies */
import { useState } from "react";


const InvestorTransactions = () => {
    const [modal, setModal] = useState(false);

    const modalHandler = () => {
       setModal(!modal);
    }
    return (
        <div className="bg-black min-h-screen overflow-auto ">
            { 
                modal ?  <FilterModal modalHandler={modalHandler}/> : null
            }
            <Header />
            <Topbar title='History of my Traders'/>  
            <div className="overflow-auto mt-40 w-[90%] md:w-2/3 m-auto mb-4 pb-20 flex flex-col items-center justify-center">
            <div className="w-[100%] md:w-[70%]">
               <TransactionActions modalHandler={modalHandler}/>
               <TransactionTile/>
            </div>              
            </div>
          
            <BottomNavigation />
        </div>
     );
}
 
export default InvestorTransactions;