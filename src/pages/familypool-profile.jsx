// Import Dependemcy
import { useState } from "react";

// Import Components
import Header from "../components/header/header";
import BottomNavigation from "../components/bottomnav/bottomnav";
import NewBreadCrumb from "../components/breadcrumb/newbreadcrumb";
import TabMenu from "../components/tabmenu/tabmenu";
import Statistics from "../components/common/statistics/statistics";
import Feeds from "../components/posts/posts";
import Portfolio from "../components/common/portfolio/portfolio-item";
import StickyScroll from "../components/stickyscroll/stickyscroll";
import PTfamilyPoolInvestor from "../components/familypools/profiletop/ptfamilypoolinvestor";
import PTfamilyPoolAdmin from "../components/familypools/profiletop/ptfamilypooladmin";

const FamilyPoolProfile = () => {
  let tabs = [
    { id: 1, title: "Statistics" },
    { id: 2, title: "Feed" },
    { id: 3, title: "Portfolio" },
  ];

  const [currentTab, setCurrentTab] = useState(1);
  const [tabArray] = useState(tabs);

  // temporary admin check
  const [admin] = useState(true);

  const tabHandler = (value) => {
    setCurrentTab(value);
  };

  return (
    <div className="bg-black min-h-screen overflow-auto ">
      <StickyScroll>
        <Header />
        <NewBreadCrumb pagetitle={"Family Pool Profile"} />
      </StickyScroll>
      <div className="page-wrap w-[90%] md:w-2/3 m-auto mt-40 pt-6 pb-20">
        {admin ? <PTfamilyPoolAdmin /> : <PTfamilyPoolInvestor />}

        <TabMenu
          isFixed={false}
          tabHandler={tabHandler}
          currentTab={currentTab}
          tabArray={tabArray}
          className="px-32"
        />
        {currentTab === 1 && <Statistics />}
        <div className="mt-10">{currentTab === 2 && <Feeds />}</div>
        {currentTab === 3 && <Portfolio />}
      </div>
      <BottomNavigation />
    </div>
  );
};
export default FamilyPoolProfile;
