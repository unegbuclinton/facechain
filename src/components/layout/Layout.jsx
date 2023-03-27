/* import react dependencies */
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BottomNavItem from "../bottomnav/navitem";
import Header from "../header/header";
import StickyScroll from "../stickyscroll/stickyscroll";
import TabMenu from "../tabmenu/tabmenu";

const Layout = ({ children }) => {
  const { state } = useLocation();
  const { hasTab } = state || {};

  let tabs = [
    { id: 1, title: "Posts" },
    { id: 2, title: "Predictions" },
    { id: 3, title: "News" },
  ];

  const [currentTab, setCurrentTab] = useState(1);
  const [tabArray] = useState(tabs);

  const tabHandler = (value) => {
    setCurrentTab(value);
  };

  useEffect(() => {
    if (hasTab) setCurrentTab(hasTab);
  }, [hasTab]);

  return (
    <>
      <StickyScroll>
        <Header />
        <TabMenu
          isFixed={true}
          tabHandler={tabHandler}
          currentTab={currentTab}
          tabArray={tabArray}
        />
      </StickyScroll>
      {children}
      <BottomNavItem />
    </>
  );
};

export default Layout;
