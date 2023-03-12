const InvestorTile = ({tileHandler, selectedTile}) => {
    return (
      <div onClick={tileHandler} className="bg-darkGrey rounded-[4px] p-4 mb-3 cursor-pointer" >
        <div className="flex justify-between">

          <div className="flex items-center">
            <div className="mr-4 w-[56px] h-[56px] rounded-[50%] bg-auto bg-no-repeat bg-center" style={{backgroundImage: "url('https://images.pexels.com/photos/3031397/pexels-photo-3031397.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')"}}></div> 
            <div className="text-[16px] text-white">User Userovich</div>
          </div>

          <div className="flex items-center">
            {!selectedTile ? 
              <div className="flex items-center">
                <div className="text-[#979797] text-[12px] mr-3">P/L</div>    
                <div className="text-white text-[14px] mr-3">$123</div>    
                <div className="text-primary text-[14px]">+9.34%</div>   
              </div>
            : null }
                {selectedTile ?     
                    <div className="flex justify-center items-center border-[1px] border-[#CC2A2A] rounded-[5px] px-4 h-[32px] text-[14px] font-bold text-[#CC2A2A] bg-[#cc2a2a26]">Stop Copy-Trading</div>
            : null }
          </div>

        </div>
            {selectedTile ?     
              <div>
                <div className="border-b-[1px] border-grey28 h-4 mb-4"></div>
                <div className="flex items-center">
                  <div className="text-[#979797] text-[12px] mr-3">Invested</div>    
                  <div className="text-white text-[14px] mr-3">$123</div>  
                </div>
              </div> 
              : null }
      </div> 
    );
}
 
export default InvestorTile;