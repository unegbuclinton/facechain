
//import '../../hedge/checkbox.css'

const PairTile = ({item, pairHandler}) => {

    const backHandler = () => {}
 
    return (
        <>         
       
               <div className="flex justify-between items-center w-[100%] border-b-[1px] border-[#383838]  py-4 cursor-pointer">           
              <div className="flex items-center">
              <div className="bg-center bg-cover  mr-4 w-[40px] h-[40px] rounded-[50%]" style={{ backgroundImage: `url(${item.image})` }}> 
               </div>  
                  <div>
                  <div className="text-[16px] text-white">{item.title}</div>
        
              <div className="text-white opacity-[80%]">{item.type}</div>
            </div>
              </div>
             <div className='flex justify-between items-center'>
             <div className="text-[16px] text-white mr-4">${item.amount}</div>
             <input type="checkbox"  onClick={()=> {pairHandler(item)}}  id={`A${item.id}`}/>
            </div> 
               </div>

        </>
    );
}
 
export default PairTile;