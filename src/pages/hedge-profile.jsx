/* import components*/
import Header from "../components/header/header";
import BottomNavigation from "../components/bottomnav/bottomnav";
import TabMenu from "../components/tabmenu/tabmenu";
import Topbar from "../components/rider-profile/top-bar";
import PortfolioItem from "../components/common/portfolio/portfolio-item";

/* import react dependencies */
import { useState } from "react";
import StickyScroll from "../components/stickyscroll/stickyscroll";
import Statistics from "../components/common/statistics/statistics";

import PThedgeAdmin from "../components/hedge/profiletop/pthedgeadmin";
import PThedgeInvestor from "../components/hedge/profiletop/pthedgeinvestor";

const HedgeProfile = () => {
  let tabs = [
    { id: 1, title: "Statistics" },
    { id: 2, title: "Portfolio" },
  ];
  const [currentTab, setCurrentTab] = useState(1);
  const [tabArray] = useState(tabs);

  // temporary admin check
  const [admin] = useState(false);

  const tabHandler = (value) => {
    setCurrentTab(value);
  };

  return (
    <div className="bg-black min-h-screen overflow-auto ">
      <StickyScroll>
        <Header />
        <Topbar title="Hedge Profile" />
      </StickyScroll>
      <div className="overflow-auto mt-40 w-[90%] md:w-2/3 m-auto mb-4 pb-20">
        {admin ? <PThedgeAdmin /> : <PThedgeInvestor />}
        <div className="mt-4"></div>
        <TabMenu
          isFixed={false}
          tabHandler={tabHandler}
          currentTab={currentTab}
          tabArray={tabArray}
        />
        {currentTab === 1 && <Statistics />}
        {currentTab === 2 && (
          <div className="mt-10">
            {" "}
            <PortfolioItem />{" "}
          </div>
        )}
      </div>

      <BottomNavigation />
    </div>
  );
};

export default HedgeProfile;
