/* import react Component */
import BottomNavigation from '../components/bottomnav/bottomnav';
import Header from '../components/header/header';
import Hedge from '../components/hedge/hedgelist';
import Individuals from '../components/riders/copytrading/copytradinglist';
import StickyScroll from '../components/stickyscroll/stickyscroll';
import TabMenu from '../components/tabmenu/tabmenu';

/* import react dependencies */
import { useState } from 'react';

const Riders = () => {
  let tabs = [
    { id: 1, title: 'Individual' },
    { id: 2, title: 'Hedge' },
    { id: 3, title: 'Bots' },
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
      <div className="page-wrap w-[90%] md:w-2/3 m-auto mt-40 pt-6">
        {currentTab === 1 && <Individuals />}
        {currentTab === 2 && <Hedge />}
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Riders;
