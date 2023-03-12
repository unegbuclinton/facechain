// Import Dependency 
import { Link } from "react-router-dom";

// Import Asset Images 
import add from "../../assets/images/edit-profile/add.svg"
const AddCrypto = () => {
    return (
        <>
            <div className="flex w-full flex-col mb-4">
                <p className="mb-2 text-[15px] text-[#979797]">CryptoExchanges</p>
                <div className="flex w-[100%] border-y-[1px] border-[#383838] p-4">
              
                    <div className="flex items-center">
                        <img className="mr-4 h-[36px]" src="https://logos-world.net/wp-content/uploads/2021/02/Kraken-Logo.png" alt="" />
                        <div>
                            <div className="text-[16px] text-white font-bold">Binance</div>

                        </div>

                    </div>

                </div>
            </div>
            <div className="flex justify-center w-[100%]">
                <div className="flex font-bold justify-center items-center bg-primary rounded-[5px] h-[50px] px-8 mt-4">
                    <img className="mr-4" src={add} alt="" />
                    <Link  to={'/crypto-exchange'}>
                        <div>Add CryptoExchange</div>
                    </Link>
                </div>   
            </div>

        </> 
    );
}
 
export default AddCrypto;