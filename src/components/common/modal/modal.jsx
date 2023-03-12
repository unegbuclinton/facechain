import closeIcon from '../../../assets/images/modal/close.svg';
import { useState, forwardRef, useImperativeHandle } from 'react';
const Modal = forwardRef((props, ref) => {
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
            <div className={`relative mx-auto p-5 ${modalSize} shadow-lg rounded-md bg-[#2F3033]`}>
                <div className="flex justify-between">
                    <p className='font-mdeium text-white'>{title}</p>
                    <img className='cursor-pointer' src={closeIcon} alt="" onClick={closeModal}/>
                </div>
                <div className="mt-3">
                    <div className="mt-2 py-3">
                        <p className="text-sm text-gray-400">Are you sure you want to delete this post? this action is irreversible !</p>
                    </div>
                    <div className="items-center py-3">
                        <button className="px-4 py-2 bg-red-500 text-white 
                                text-base font-medium rounded-md w-full 
                                shadow-sm hover:bg-red-700 focus:outline-none">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
});

 
export default Modal;