/* import components */
import Header from "../components/header/header";
import BottomNavigation from "../components/bottomnav/bottomnav";
import ExchangeStep from "../components/crypto-exchange/exchange-step";
import Steps from "../components/crypto-exchange/steps";
import ExchangeModal from "../components/crypto-exchange/exchange-modal";
import CopyStep from "../components/crypto-exchange/copy-step";

/* import image */
import exchange from "../assets/images/riders/exchange.svg"

/* import react dependencies */
import { useState } from "react";



const CryptoExchange = () => {
 
    
    const [currentStep, setCurrentStep] = useState(1);

    const [modal, setModal] = useState(false);


    const modalHandler = () => {
       setModal(!modal);
    }

    const proceedStep = (step) => {
        setModal(false);
        setCurrentStep(step);
    }

    return (
        <div className="bg-black h-screen overflow-auto ">
            {
                modal ?  <ExchangeModal proceedStep={proceedStep} modalHandler={modalHandler}/> : null
            }
            <Header />
            <div className="flex justify-center overflow-auto mt-24 w-[90%] md:w-2/3 m-auto mb-4 pb-20">
                <div className="rounded-[5px] bg-darkGrey w-[100%] md:w-[80%] bg-auto bg-no-repeat bg-center" style={{backgroundImage: currentStep === 1 ? `url(${exchange})` : 'none' }}>
                
                { currentStep === 1 ?   <ExchangeStep modalHandler={modalHandler}/> :<CopyStep modalHandler={modalHandler}/>}            
                <Steps currentStep={currentStep}/>
                </div>
            </div>         
            <BottomNavigation />
        </div>
     );
}
 
export default CryptoExchange;