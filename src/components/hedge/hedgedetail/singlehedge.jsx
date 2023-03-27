import CurrentShare from "./currentshare";
import PoolMessages from "./messages";
import CreateVoteButton from "./createvotebutton";
import Vote from "../createvote/voteitem/vote";
import { useLocation } from "react-router-dom";
const SingleHedge = () => {
  const { state } = useLocation();
  const { selectedPairs } = state || {};
  return (
    <div>
      <CurrentShare />
      <PoolMessages />
      {/* {if selectedPairs is not null check length } */}
      {selectedPairs && selectedPairs.length > 0 && (
        <Vote selectedPairs={selectedPairs} />
      )}
      <CreateVoteButton votesArePresent={selectedPairs} />
      {/* {inviteData && <Invites data={inviteData} />} */}
    </div>
  );
};

export default SingleHedge;
