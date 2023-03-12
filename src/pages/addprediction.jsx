// Import Dependency 
import Header from "../components/header/header";
import BottomNavigation from "../components/bottomnav/bottomnav";
import AddPredictionForm from "../components/predictions/createprediction/addpredictionform";
import Breadcrumb from "../components/breadcrumb/breadcrumb";
import StickyScroll from "../components/stickyscroll/stickyscroll";


const AddPredictions = () => {
    return (
        <div className="bg-black min-h-screen overflow-auto ">
             <StickyScroll>
                 <Header />
                 <Breadcrumb pagetitle="Add Prediction"/>
            </StickyScroll>
            <div className="page-wrap w-[90%] md:w-2/3 m-auto mt-40 pt-6 pb-14">
             <AddPredictionForm/>
            </div>
            <BottomNavigation />
        </div>
     );
}
 
export default AddPredictions;