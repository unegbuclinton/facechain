/* import react dependencies */
import { Link } from "react-router-dom";

/* import images */
import filter from "../../../assets/images/investors/filter.svg"
import report from "../../../assets/images/investors/report.svg"

const TransactionActions = ({modalHandler}) => {
    return (
      <div className="flex justify-between items-center mb-6">
        <div onClick={modalHandler} className="mr-4 text-primary font-bold flex cursor-pointer">
          <div>Filter</div>
          <img src={filter} alt="" />
        </div>

        <div className="text-primary font-bold flex">
          <Link to="/investor-report"><div className="mr-2">Report</div></Link>
          <img src={report} alt="" />
        </div>
      </div>
    );
}
 
export default TransactionActions;