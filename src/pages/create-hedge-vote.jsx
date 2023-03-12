import CreateVoteForm from "../components/hedge/createvote/createvoteform";
import StickyScroll from "../components/stickyscroll/stickyscroll";
import Header from "../components/header/header";
import BottomNavigation from "../components/bottomnav/bottomnav";
const CreateHedgeVote = () => {
  return (
    <>
      {/* <CreateBuyPair /> */}
      <div className="bg-black min-h-screen overflow-auto ">
        <StickyScroll>
          <Header />
        </StickyScroll>
        <div className="page-wrap w-[90%] md:w-[48%] m-auto mt-24 pt-6 pb-11 md:pb-2">
          <CreateVoteForm />
        </div>
        <BottomNavigation />
      </div>
    </>
  );
};

export default CreateHedgeVote;
