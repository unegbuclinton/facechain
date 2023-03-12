import circleActive from "../../../assets/images/cool-hedge/circle-active.svg"
import circle from "../../../assets/images/cool-hedge/circle.svg"
import like from "../../../assets/images/cool-hedge/like.png"
import dislike from "../../../assets/images/cool-hedge/dislike.png"

const VotingPoll = ({type, value}) => {
    return (
        <div>

        <div className="flex items-center py-4 border-b-[1px] border-[#383838]">
         <img src={circle} alt="" className="mr-4" />
         <img src={circleActive} alt="" className="mr-4"/>
         <img src={type == "like" ? like : dislike} alt="" className="mr-4"/>
         <p className="text-[16px] text-white mr-4">{type == "like" ? "Yes" : "No"}</p>
         <p className="text-[12px] text-white">({value}%)</p>
        
        </div>
        <div style={{width:`${value}%`}} className="h-[5px] bg-primary rounded-[5px] mt-[-3px]"></div>

       </div>
    );
}
 
export default VotingPoll;