import BottomNavigation from "../components/bottomnav/bottomnav";
import CreateVoteForm from "../components/familypools/createvote/createvoteform";
import Header from "../components/header/header";
import StickyScroll from "../components/stickyscroll/stickyscroll";


const VoteFamilyPool = () => {
    return (
        <div className="bg-black min-h-screen overflow-auto ">
            <StickyScroll>
               <Header />
            </StickyScroll>
            <div className="page-wrap w-[90%] md:w-[48%] m-auto mt-24 pt-6 pb-11 md:pb-2">
                <CreateVoteForm />
            </div>
            <BottomNavigation />
        </div>
    );
}
 
export default VoteFamilyPool;