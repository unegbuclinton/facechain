// import components
import BottomNavigation from '../components/bottomnav/bottomnav';
import MyPools from '../components/familypools/mypools';
import Header from '../components/header/header';
import StickyScroll from '../components/stickyscroll/stickyscroll';
import TabMenu from '../components/tabmenu/tabmenu';

// import dependencies
import { useState } from 'react';
import PublicPools from '../components/familypools/publicpools';

const FamilyPools = () => {
  const tabs = [
    { id: 1, title: 'My Pools' },
    { id: 2, title: 'Public Pools' },
  ];

  const [currentTab, setCurrentTab] = useState(1);
  const [tabArray] = useState(tabs);

  const tabHandler = (value) => {
    setCurrentTab(value);
  };

  return (
    <div className="bg-black min-h-screen overflow-auto ">
      <StickyScroll>
        <Header />
        <TabMenu
          isFixed={true}
          tabHandler={tabHandler}
          currentTab={currentTab}
          tabArray={tabArray}
        />
      </StickyScroll>
      <div className="page-wrap w-[90%] md:w-2/3 m-auto mt-40 pt-6 pb-11 md:pb-2">
        {currentTab === 1 && <MyPools />}
        {currentTab === 2 && <PublicPools />}
      </div>
      <BottomNavigation />
    </div>
  );
};

export default FamilyPools;
