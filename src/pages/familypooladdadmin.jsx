import BottomNavigation from "../components/bottomnav/bottomnav";
import AddAdminMain from "../components/familypools/settings/addadmin/addadminmain";
import PoolSettings from "../components/familypools/settings/familypoolsettings";
import SettingsTopbar from "../components/familypools/topbar/settingstopbar";
import Header from "../components/header/header";
import Topbar from "../components/rider-profile/top-bar";
import StickyScroll from "../components/stickyscroll/stickyscroll";

const FamilyPoolAddAdmin = () => {
    return ( 
        <div className="bg-black min-h-screen overflow-auto ">
            <StickyScroll>
               <Header />
               <Topbar title="Add Administrator" />
            </StickyScroll>
            <div className="page-wrap w-[90%] md:w-[48%] m-auto mt-40 pt-6 pb-20">
               <AddAdminMain />
            </div>
            <BottomNavigation />
        </div>
     );
}
 
export default FamilyPoolAddAdmin;