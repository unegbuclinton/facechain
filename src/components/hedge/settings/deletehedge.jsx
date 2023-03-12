import { forwardRef, useState, useImperativeHandle } from "react";
import closeIcon from '../../../assets/images/modal/close.svg';
import dangerIcon from '../../../assets/images/family-pools/danger.png'

const DeleteHedge = forwardRef((props, ref) => {

    const {size, title} = props;
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    useImperativeHandle(ref, () => ({
        openModal: ()=>{
            openModal();
        },
    }));

    const modalSize = size === "small" ? "w-96" : "w-128";

    return (
        <div className="fixed insert-0 flex items-center justify-center  bg-black bg-opacity-70 overflow-y-auto h-full w-full left-0 top-0 z-[2000]" style={{display: isOpen ? 'flex' : 'none'}} onClick={closeModal}>
            <div className={`relative mx-auto p-5 ${modalSize} shadow-lg rounded-md bg-[#2F3033]`}  onClick={e => e.stopPropagation()}>
                <div className="flex justify-between">
                    <p className='font-mdeium text-white'>{title}</p>
                    <img className='cursor-pointer' src={closeIcon} alt="" onClick={closeModal}/>
                </div>
                <div className="mt-3 flex flex-col justify-center items-center">
                    <div className="mt-2 py-3 flex flex-col items-center">
                        <img src={dangerIcon} className="mb-4" />
                        <p className="text-sm text-gray-400">Are you sure you want to<span className="text-red-500"> delete this Hedge?</span></p>
                    </div>
                    <div className="items-center py-3">
                         <button className="px-16 py-2 text-white rounded-full border-2 w-full mb-4 focus:outline-none">
                            Yes
                        </button>
                        <button className="px-16 py-2 bg-primary border-2 border-[#2f3033] text-white rounded-full font-medium w-full shadow-sm  focus:outline-none" onClick={closeModal}>
                           No
                        </button>
                    </div>
                </div>
            </div>
        </div>
     );
})
 
export default DeleteHedge;