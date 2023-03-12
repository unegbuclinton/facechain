import BottomNavigation from "../components/bottomnav/bottomnav";
import PoolSettings from "../components/familypools/settings/familypoolsettings";
import SettingsTopbar from "../components/familypools/topbar/settingstopbar";
import Header from "../components/header/header";
import StickyScroll from "../components/stickyscroll/stickyscroll";

const FamilyPoolSettings = () => {
    return ( 
        <div className="bg-black min-h-screen overflow-auto ">
            <StickyScroll>
               <Header />
               <SettingsTopbar />
            </StickyScroll>
            <div className="page-wrap w-[90%] md:w-[48%] m-auto mt-40 pt-6 pb-20">
               <PoolSettings/>
            </div>
            <BottomNavigation />
        </div>
     );
}
 
export default FamilyPoolSettings;