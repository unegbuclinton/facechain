/**Import Assets */
import deleteIcon from '../../../assets/images/family-pools/delete.png'

/**Import dependencies */
import { useRef } from 'react';

/** Import Components */
import DeleteFamilyPool from './deletehedge';
import EditFamilyPool from './editfamilypool';

const HedgeSettings = () => {

    const deleteRef = useRef();
    const openDeleteModal = ()=>{
        deleteRef.current.openModal();
    }

    return ( 
        <>
            <div>
                <div className=" bg-[#1e1f21] mb-4 py-4 px-4 rounded-md">
                     <EditFamilyPool/>
                </div>
                <div className=" bg-[#1e1f21] mb-4 py-4 px-4 rounded-md">
                    <p className="text-white">Add New Administrator</p>
                </div>
                <div className=" bg-[#1e1f21] mb-4 py-4 px-4 rounded-md">
                    <p className="text-white">Manage Pool Members</p>
                </div>
                <div className=" bg-[#1e1f21] flex mb-4 py-4 px-4 rounded-md mt-16 cursor-pointer" onClick={openDeleteModal}>
                    <img src={deleteIcon} className="mr-2 self-center" alt="" />
                    <p className="text-red-500">Delete Family Pool</p>
                </div>
            </div>
            <DeleteFamilyPool ref={deleteRef} />
        </>  
    );
}
 
export default HedgeSettings;