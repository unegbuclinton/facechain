// Import Asset Images 
import arrowIcon from '../../../assets/images/predictions/angle-right.svg';

const StepNavigation = ({handlePrev, handleNext, title, currentStep, isFinal}) => {
    return (
        <div className="flex justify-between px-10 pt-10 text-white">
            <button className="text-red" onClick={handlePrev}>
                {currentStep === 0 ? <span className="text-red">Exit</span>
                 : <span className="text-white flex"><img alt='' src={arrowIcon}/> Back</span>}
            </button>
            <p>{title}</p>
            <button className="text-primary" onClick={handleNext}>
                {isFinal ? <span className="text-primary">Submit</span>
                 : <span className="text-primary"> Next</span>}
            </button>
        </div>
     );
}
 
export default StepNavigation;