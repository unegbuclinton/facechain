import SinglePost from "../components/posts/singlepost/singlepost";
import BottomNavigation from "../components/bottomnav/bottomnav";
import Header from "../components/header/header";
import Topbar from "../components/rider-profile/top-bar";
import StickyScroll from "../components/stickyscroll/stickyscroll";

const SinglePostPage = () => {
    return (
        <div className="bg-black min-h-screen overflow-auto ">
            <StickyScroll>
                 <Header />
                 <Topbar title='Post'/>
            </StickyScroll>
            <div className="page-wrap w-[90%] md:w-[60%] m-auto mt-40 pt-6 pb-20">
                <SinglePost />
            </div>
            <BottomNavigation />
        </div>
       
    );
}
 
export default SinglePostPage;