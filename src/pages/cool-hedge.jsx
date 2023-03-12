import Header from "../components/header/header";
import BottomNavigation from "../components/bottomnav/bottomnav";
import Topbar from "../components/cool-hedge/top-bar";
import SummaryTitle from "../components/cool-hedge/summary-tile";
import HedgeTile from "../components/cool-hedge/user-tile";

import Vote from "../components/cool-hedge/vote";

const CoolHedge = () => {
  const transactions = () => {};
  const chat = () => {};

  return (
    <div className="bg-black h-screen overflow-auto ">
      {/* <Modal/> */}
      <Header />
      <Topbar />
      <div className="overflow-auto mt-40 w-[90%] md:w-2/3 m-auto mb-4 pb-20 flex flex-col items-center justify-center">
        <div className="w-[100%] md:w-[70%]">
          <SummaryTitle
            title="Your current share"
            value="$10"
            actionTitle="Transactions"
            actionHandler={transactions}
          />
          <SummaryTitle
            title="Unread message"
            value="0"
            actionTitle="Chat"
            actionHandler={chat}
          />
          <br />
          <Vote />
          <br />
          <br />
          <HedgeTile />
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default CoolHedge;
