import CoinRates from "./coin-rates";
import PairVotingPoll from "./pair-voting-poll";
import TileHeader from "./tile-header";
import VotingDetails from "./voting-details";
import VotingPoll from "./voting-poll";
import SummaryTitle from "../../../components/cool-hedge/summary-tile";
const UserExpandedTile2 = ({ tileHandler, selectedTile }) => {
  const transactions = () => {};
  const chat = () => {};
  return (
    <div
      onClick={tileHandler}
      className="bg-darkGrey rounded-[4px] p-4 mb-3 cursor-pointer"
    >
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
      <TileHeader />
      <br />
      <VotingDetails />
      <br />
      <PairVotingPoll />
      <PairVotingPoll />
    </div>
  );
};

export default UserExpandedTile2;
