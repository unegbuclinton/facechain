/* import component */
import Header from "../components/header/header";
import BottomNavigation from "../components/bottomnav/bottomnav";
import Topbar from "../components/rider-profile/top-bar";
import FilterModal from "../components/riders/investors/filter-modal";
// import TransactionTile from "../components/investors/transaction-tile";
// import TransactionActions from "../components/investors/transaction-actions";

/* import react dependencies */
import { useState } from "react";

/* import image */
import report from "../assets/images/investors/report.svg"

const InvestorReport = () => {
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
            <div className="rounded-[5px] bg-darkGrey w-[100%] md:w-[40%] bg-auto bg-no-repeat bg-center py-7">
                <div className="mb-8">
              <div className="text-[#AEAEAE] text-center font-bold text-[20px] mb-2">Amount</div>
              <div className="text-white text-center text-[20px]">100 Usd</div>
                </div>
                <div className="px-6">
                    <div className="flex justify-between mb-4">
                        <div className="text-[#E4E4E4]">Cash</div>
                        <div className="text-white">USD</div>
                    </div>
                    <div className="flex justify-between mb-4">
                        <div className="text-[#E4E4E4]">Name of Investor</div>
                        <div className="text-white">User Userovich</div>
                    </div>
                    <div className="flex justify-between mb-4">
                        <div className="text-[#E4E4E4]">Exchange</div>
                        <div className="text-white">Binance</div>
                    </div>
                    <div className="flex justify-between mb-4">
                        <div className="text-[#E4E4E4]">Date</div>
                        <div className="text-white">22/03/22</div>
                    </div>
                    <div className="flex justify-between mb-4">
                        <div className="text-[#E4E4E4]">Status</div>
                        <div className="text-primary">Completed</div>
                    </div>
                    <br /><br />
                    <div className='flex justify-end'>
                    <div className="text-primary font-bold flex">
                        <div className="mr-2">Download Report</div>
                    <img src={report} alt="" />
                    </div>
                    </div>

                </div>

            </div>              
            </div>
          
            <BottomNavigation />
        </div>
     );
}
 
export default InvestorReport;