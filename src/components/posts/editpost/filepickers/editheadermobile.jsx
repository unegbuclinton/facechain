/* import assets */
import backIcon from '../../../../assets/images/post/backIcon.svg'

const EditHeaderMobile = ({updatePost, closeModal}) => {
    return ( 
        <div className="flex justify-between w-[90%] mb-8 mt-8 2md:hidden ">
            <div className="flex cursor-pointer" onClick={closeModal}>
                <img className='mr-2' src={backIcon} alt="" />
                <p className='text-white font-semibold'>Cancel</p>
            </div>
            <div>
                <button className="text-primary font-semibold" onClick={updatePost}>UPDATE POST</button>
            </div>
        </div>
    );
}
 
export default EditHeaderMobile;