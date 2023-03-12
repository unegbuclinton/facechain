import BottomNavigation from "../components/bottomnav/bottomnav";
import SinglePool from "../components/familypools/familypooldetail/singlefamilypool";
import DetailsTopbar from "../components/familypools/topbar/detailstopbar";
import Header from "../components/header/header";
import StickyScroll from "../components/stickyscroll/stickyscroll";

const FamilyPoolDetail = () => {
    return ( 
        <div className="bg-black min-h-screen overflow-auto ">
            <StickyScroll>
               <Header />
               <DetailsTopbar title='Family Pool' />
            </StickyScroll>
            <div className="page-wrap w-[90%] md:w-[48%] m-auto mt-40 pt-6 pb-20">
                <SinglePool />
            </div>
            <BottomNavigation />
        </div>
     );
}
 
export default FamilyPoolDetail;