// Import Asset Image 
import logo from "../../../assets/images/family-pools/coin-logo.svg"

const Frequenttrades =() =>{
    const data = [1, 2, 3, 4]
  return (
       
    <div className="w-full text-white mt-10">
        <p className="text-xl ml-4 my-4">Frequently Traded</p>
        {data.map((frequenttrades, index) => (          
            <div className="border-t border-t-[#383838] px-2 py-4 md:p-4 flex justify-between " key={index}>
                <div className="flex items-center">
                    <img src={logo} alt="" className="w-[42px]"/>
                    <div className="ml-2 md:ml-3 ">
                        <p className="text-base md:text-lg">BTC/USDT</p>
                        <p className="text-greyTextSecondary text-xs md:text-sm">Bitcoin</p>
                    </div>
                </div>
                <div>
                    <div className="flex justify-end">
                        <p className="text-[#109F52] text-xs md:text-sm">38%</p>
                        <p className="ml-1 md:ml-3 text-greyTextSecondary text-xs md:text-sm">Avg Profit</p>
                    </div>
                    <div className="flex justify-end">
                        <p className="text-[#D14242] text-xs md:text-sm">0%</p>
                        <p className="ml-1 md:ml-3 text-greyTextSecondary  text-xs md:text-sm">Avg Loss</p>
                    </div>

                </div>
            </div>    
        ))}
    </div>
    
  )
}


export default Frequenttrades