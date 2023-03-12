/** import assets */
import closeIcon from '../../../assets/images/modal/close.svg';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**import dependencies */
import { useState, forwardRef, useImperativeHandle, useEffect } from 'react';

/**import hooks */
import useDeletePrediction from '../../../hooks/prediction/usedeleteprediction';
import useFetchPredictions from '../../../hooks/prediction/usefetchpredictions';


const DeletePrediction = forwardRef((props, ref) => {
    const {predictionId } = props;
    const [isOpen, setIsOpen] = useState(false);

    const {isLoading, isDeleted, deletePrediction} = useDeletePrediction();
    const {fetchPredictions} = useFetchPredictions()
    
    const handleDelete = () => {
      if(predictionId !== '') deletePrediction(predictionId);
    }

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

    useEffect(() => {
        if(isDeleted) {
          closeModal();
          fetchPredictions();
        }
    }, [isDeleted]);

    return (
        <div className="fixed insert-0 flex items-center justify-center  bg-black bg-opacity-70 overflow-y-auto h-full w-full left-0 top-0 z-[2000]" style={{display: isOpen ? 'flex' : 'none'}} onClick={closeModal}>
            <div className={`relative mx-auto p-5 w-96 shadow-lg rounded-md bg-[#2F3033]`} onClick={e => e.stopPropagation()}>
                <div className="flex justify-between">
                    <p className='font-mdeium text-white'>Delete Prediction</p>
                    <img className='cursor-pointer' src={closeIcon} alt="" onClick={closeModal}/>
                </div>
                <div className="mt-3">
                    <div className="mt-2 py-3">
                        <p className="text-sm text-gray-400">Are you sure you want to delete this prediction? this action is irreversible !</p>
                    </div>
                    <div className="items-center py-3">
                        <button className="px-4 py-2 bg-red-500 text-white 
                                text-base font-medium rounded-md w-full 
                                shadow-sm hover:bg-red-700 focus:outline-none" onClick={handleDelete}>
                           {isLoading ? (
							<FontAwesomeIcon
							icon={faSpinner}
							className=" cursor-pointer fa-spin fa-pulse"
							/>
						) : (
							"Delete"
						)}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
});

 
export default DeletePrediction;