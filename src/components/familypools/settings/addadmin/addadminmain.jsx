/**import assets */
import addIcon from '../../../../assets/images/family-pools/addicon.png'

const AddAdminMain = () => {
    return (
        <div className=" bg-[#1e1f21] mb-4 py-2 px-4 rounded-md">
            <div className='flex items-center py-4 border-b  border-[]'>
                  <img className='mr-4' src={addIcon} alt="" />
                  <p className="text-primary">Add New Admin</p>
            </div>
            <div className='flex flex-col items-center py-4 border-b'>
                  <img className='mr-4' src={addIcon} alt="" />
                  <p className="text-white">Alan Userovich</p>
                  <p>Owner</p>
            </div>
            <div className='flex items-center'>
                  
                  <p className="text-greyTextSecondary">You can add administrators to help you manage the group.</p>
            </div>
           
        </div>
    );
}
 
export default AddAdminMain;