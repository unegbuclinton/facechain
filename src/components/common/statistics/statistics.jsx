// Import Components 
import FpAdditionalStatistics from "./additionalstatistics";
import FpGeneralStatistics from "./generalstatistics";
import Frequenttrade from "./frequenttrades";

const Statistics = () => {
    return (
        <div>
            <div className="flex justify-between mt-10 flex-col md:flex-row">
                <FpGeneralStatistics />
                <FpAdditionalStatistics />
            </div>
            
        <Frequenttrade />
        
        </div>
    );
}
 
export default Statistics;


