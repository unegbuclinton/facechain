const UserTile = ({tileHandler, selectedTile}) => {
    return (
        <div onClick={tileHandler} className="bg-darkGrey rounded-[4px] p-4 mb-3 cursor-pointer" >
       <div className="flex justify-between items-center">

       <div className="flex items-center">
    <div className="mr-4 w-[56px] h-[56px] rounded-[50%] bg-auto bg-no-repeat bg-center" style={{backgroundImage: "url('https://images.pexels.com/photos/3031397/pexels-photo-3031397.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')"}}></div> 
    <div className="text-[16px] text-white">User Userovich</div>
     </div>

  
    <div className="flex justify-center items-center rounded-[5px] px-4 h-[32px] text-[14px] font-bold bg-primary">Send Invite</div>

       </div>

        </div> 
    );
}
 
export default UserTile;