import BottomNavigation from "../components/bottomnav/bottomnav";
import Header from "../components/header/header";
import HedgeSettings from "../components/hedge/settings/hedgesettings";
import SettingsTopbarHedge from "../components/hedge/topbar/settingstopbar";
import StickyScroll from "../components/stickyscroll/stickyscroll";

const HedgeSettingsPage = () => {
    return ( 
        <div className="bg-black min-h-screen overflow-auto ">
            <StickyScroll>
               <Header />
               <SettingsTopbarHedge />
            </StickyScroll>
            <div className="page-wrap w-[90%] md:w-[48%] m-auto mt-40 pt-6 pb-20">
               <HedgeSettings/>
            </div>
            <BottomNavigation />
        </div>
     );
}
 
export default HedgeSettingsPage;