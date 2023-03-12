import BottomNavigation from "../components/bottomnav/bottomnav";
import SingleHedge from "../components/hedge/hedgedetail/singlehedge";
import Header from "../components/header/header";

import StickyScroll from "../components/stickyscroll/stickyscroll";
import DetailsTopbarHedge from "../components/hedge/topbar/detailstopbar";

const HedgeDetail = () => {
  return (
    <div className="bg-black min-h-screen overflow-auto ">
      <StickyScroll>
        <Header />
        <DetailsTopbarHedge title="Hedge Name"/>
      </StickyScroll>
      <div className="page-wrap w-[90%] md:w-[48%] m-auto mt-40 pt-6 pb-20">
        <SingleHedge />
      </div>
      <BottomNavigation />
    </div>
  );
};

export default HedgeDetail;
