// Import Components 
import {warning} from "../../common/toast/toast"

const predictionValidator = {
    
    ChoosePair: (currencyPair, handleNext)=>{
        if(currencyPair){
            handleNext();
        }else{
            warning("Choose a pair")// change to custom toast
       }
    },
    ChooseExchanges: (exchange, handleNext)=>{
        if(exchange){
            handleNext();
        }else{
            warning("Choose an exchange")  // change to custom toast
       }
    },
    ChoosePeriod: (startPeriod, endPeriod, handleNext)=>{
        if(startPeriod && endPeriod){
            handleNext();
        }else{
            warning("Choose period")  // change to custom toast
       }
    },
    ChoosePrice: (startPrice, endPrice, handleNext)=>{
        if(startPrice && endPrice){
            handleNext();
        }else{
            warning("Choose expected price")  // change to custom toast
       }
    },
    CheckPrediction: (startPrice, endPrice, startPeriod, endPeriod)=>{
       console.log('valid')
    }
}

export default predictionValidator;