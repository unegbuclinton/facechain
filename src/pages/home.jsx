// import components
// import BottomNavigation from '../components/bottomnav/bottomnav';

import NewsItem from "../components/news/news-item";
import PostItem from "../components/posts/post-item";
import Prediction from "../components/predictions/prediction";

/* import react dependencies */

import { useState } from "react";
import StickyScroll from "../components/stickyscroll/stickyscroll";
import Header from "../components/header/header";
import TabMenu from "../components/tabmenu/tabmenu";
import BottomNavigation from "../components/bottomnav/bottomnav";
const Home = () => {
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
      <div className="page-wrap w-[90%] md:w-2/3 m-auto mt-40 pt-6 pb-20">
        {currentTab === 1 && <PostItem />}
        {currentTab === 2 && <Prediction />}
        {currentTab === 3 && <NewsItem />}
      </div>
      {/* empty space :-) */}

      <BottomNavigation />
    </div>
  );
};

export default Home;
