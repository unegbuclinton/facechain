// import components
// import BottomNavigation from '../components/bottomnav/bottomnav';

import NewsItem from '../components/news/news-item';
import PostItem from '../components/posts/post-item';
import Prediction from '../components/predictions/prediction';

/* import react dependencies */

import { useState } from 'react';
import Layout from '../components/layout/Layout';
const Home = () => {
  const [currentTab] = useState(1);
  return (
    <div className="bg-black min-h-screen overflow-auto ">
      <Layout>
        {currentTab === 1 && (
          <div className="page-wrap w-[90%] md:w-3/4 3xl:w-2/3 m-auto mt-40 pt-6 pb-20">
            <PostItem />
          </div>
        )}
        {currentTab === 2 && (
          <div className="page-wrap w-[90%] md:w-2/3 m-auto mt-40 pt-6 pb-20">
            <Prediction />
          </div>
        )}
        {currentTab === 3 && (
          <div className="page-wrap w-[90%] md:w-2/3 m-auto mt-40 pt-6 pb-20">
            <NewsItem />
          </div>
        )}

        {/* empty space :-) */}

        {/* <BottomNavigation /> */}
      </Layout>
    </div>
  );
};

export default Home;
