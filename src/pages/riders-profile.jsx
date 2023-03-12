/* import components*/
import Header from "../components/header/header";
import BottomNavigation from "../components/bottomnav/bottomnav";
import TabMenu from "../components/tabmenu/tabmenu";
import Topbar from "../components/rider-profile/top-bar";
import PortfolioItem from "../components/common/portfolio/portfolio-item";
import Feeds from "../components/posts/posts";
import PTcopyTradingAdmin from "../components/riders/copytrading/profiletop/ptcopytradingadmin";
import PTcopyTradingInvestor from "../components/riders/copytrading/profiletop/ptcopytradinginvestor";

/* import react dependencies */
import { useState } from "react";
import StickyScroll from "../components/stickyscroll/stickyscroll";
import Statistics from "../components/common/statistics/statistics";
import PredictionList from "../components/predictions/predictionList";


const RidersProfile = () => {
    let tabs = [
        {id: 1, title: 'Statistics'},
        {id: 2, title: 'Feed'},
        {id: 3, title: 'Predictions'},
        {id: 4, title: 'Portfolio'}
    ]
    
    const [currentTab, setCurrentTab] = useState(1);
    const [tabArray] = useState(tabs);

    // temporary admin check
    const [admin, setAdmin] = useState(true);

    const tabHandler = (value) => {
        setCurrentTab(value);
    }
    
    return (
        <div className="bg-black min-h-screen overflow-auto ">
            <StickyScroll>
                <Header />
                <Topbar title='Riders Profile'/> 
            </StickyScroll>
            <div className="overflow-auto mt-40 w-[90%] md:w-2/3 m-auto mb-4 pb-20">
             {admin ? <PTcopyTradingAdmin/> : <PTcopyTradingInvestor/>}
            <div className="mt-4"></div>
            <TabMenu isFixed={false} tabHandler={tabHandler} currentTab= {currentTab} tabArray={tabArray}/>
            {currentTab === 1 && <Statistics/>}
            {currentTab === 2 && <div className="mt-10"><Feeds/> </div>}
            {currentTab === 3 && <div className="mt-10"> <PredictionList /> </div>}
            {currentTab === 4 && <div className="mt-10"> <PortfolioItem/> </div>}
            </div>
          
            <BottomNavigation />
        </div>
     );
}
 
export default RidersProfile;
