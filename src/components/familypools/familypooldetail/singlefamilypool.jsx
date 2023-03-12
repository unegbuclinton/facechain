import CurrentShare from "./currentshare";
import Invites from "./invites";
import PoolMessages from "./messages";
import CreateVoteButton from "./createvotebutton";
import inviteData from './mockdata'
import Vote from "../createvote/voteitem/vote";
import { useLocation } from "react-router-dom";
const SinglePool  = () => {
   const {state} = useLocation();
   // destructure state if state is not null
   const { selectedPairs } = state || {};
  // console.log(selectedPairs)
    return ( 
        <div>
           <CurrentShare />
           <PoolMessages />
           {/* {if selectedPairs is not null check length } */}
           {selectedPairs && selectedPairs.length > 0 && <Vote selectedPairs={selectedPairs} />}
           <CreateVoteButton votesArePresent={selectedPairs} />
           {inviteData && <Invites data={inviteData} /> }
        </div>
     );
}
 
export default SinglePool;