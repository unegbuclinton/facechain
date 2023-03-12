/* import dependencies */
import { useState, forwardRef, useImperativeHandle, useEffect, useRef } from 'react';

/*import assets */
import closeIcon from '../../../assets/images/modal/close.svg';
import avatar from '../../../assets/images/header/avatar.jpg';


/* import hooks */
import useCreatePost from '../../../hooks/post/usecreatepost';
import FilePicker from './filepickers/filepicker';
import FilePickerMobile from './filepickers/filepickermobile';
import EditHeaderMobile from './filepickers/editheadermobile';
import PreviewImage from './filepreview/previewimage';
import PreviewVideo from './filepreview/previewvideo';
import SubmitButton from './submitbutton';

import { warning } from '../../common/toast/toast';
import useUpdatePost from '../../../hooks/post/useupdatepost';
import useFetchPosts from '../../../hooks/post/usefetchpost';

const EditPostModal = forwardRef((props, ref) => {
    const {post} = props;
    /** Modal State */
    const [isOpen, setIsOpen] = useState(false);
    /** preview images, text and video state */
    const [hasPhoto, setHasPhoto] = useState(false)
	const [hasVideo, setHasVideo] = useState(false)
	const [hasText, setHasText] = useState(false)
	const [previewImage, setPreviewImage] = useState(null)
	const [previewVideo, setPreviewVideo] = useState(null)
	const [description, setDescription] = useState('')

    const photoInput = useRef();
	const videoInput = useRef();

    /** post submission loading state */
   const {isUploaded, isLoading, setIsUploaded, updatePost } = useUpdatePost();
   const {fetchPosts} = useFetchPosts()

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleUpdatePost = () => {
        if(hasText){
            updatePost(description, post.id);
        }else{
            warning('Please enter text');
        }
    }


   

    const deletePickedImage = () => {
		setPreviewImage(null);
		setHasPhoto(false);
        photoInput.current.value = null;
	}

    const deletePickedVideo = () => {
		setPreviewVideo(null);
		setHasVideo(false);
        videoInput.current.value = null;
	}

    
    const openFile = () => {
		photoInput.current.click()
	}

    const pickedFile = (e) => {
		const file = e.target.files[0];
		previewFile(file);
	}

	const openFile2 = () => {
		videoInput.current.click()
	}

    const pickedFile2 = (e) => {
		let file = e.target.files[0];
		let blobURL = URL.createObjectURL(file);
		setPreviewVideo(blobURL);
		setHasVideo(true);
	}

    const previewFile = (file) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setPreviewImage(reader.result);
			setHasPhoto(true);
		};
	}

    const resetStates = () => {
        setPreviewImage(null);
        setPreviewVideo(null);
        setHasPhoto(false);
        setHasVideo(false);
        setDescription('')
        setIsUploaded(false);
    }

    const initialState = () => {
        setPreviewImage(post.image ? post.image : null);
        setPreviewVideo(post.video ? post.video : null);
        setHasPhoto(post.image ? true : false);
        setHasVideo(post.video ? true : false);
        setHasText(post.description ? true : false);
        setDescription(post.description ? post.description : '')
    }

    useImperativeHandle(ref, () => ({
        openModal: ()=>{
            openModal();
        },
    }));
    
    useEffect(() => {
        if(isOpen){
            initialState();
            if(isUploaded){
                fetchPosts(); 
                closeModal();
                return () => {
                    resetStates();
                }
            }
        }
    }, [isOpen, isUploaded]);

    return (
        <div className="fixed insert-0 flex flex-col items-center  2md:justify-center bg-black bg-opacity-1 overflow-y-auto h-full w-full left-0 top-0 z-[2000] 2md:bg-opacity-90 2md:flex-row" style={{display: isOpen ? 'flex' : 'none'}}>
            <EditHeaderMobile closeModal={closeModal} />
             <div className={`relative mx-auto p-5 shadow-lg rounded-md bg-[#1e1f21] w-[90%] 2md:w-2/3 `} onClick={e => e.stopPropagation()}>
                 <div className="hidden justify-between border-b border-[#565656] mb-6 pb-4 2md:flex">
                        <p className='hidden 2md:block'></p>
                        <p className='font-mdeium text-primary text-lg font-semibold'>Edit Post</p>
                        <img className='cursor-pointer' src={closeIcon} alt="" onClick={closeModal}/>
                 </div>

                <div className='flex flex-col 2md:flex-row justify-between px-4'>
                    <div className='flex items-center 2md:items-start mb-5'>
                         <img className='w-10 h-10 object-cover rounded-full border flex-none 2md:basis-[5%] 2md:w-16 2md:h-16 mr-4 ' src={avatar} alt="" /> 
                        <p className='text-white block 2md:hidden'>Chinemelu Arinze</p>
                    </div>
                   
                    <div className='basis-[65%] mr-4'>
                        <textarea rows="5" placeholder="What’s on your mind?" className="mb-2 w-full p-4 rounded-md bg-[#2f3033] outline-none text-white" defaultValue={description} onInput={(e)=> setDescription(e.target.value)}>
                        </textarea>
                        { previewImage != null ? <PreviewImage previewImage={previewImage} deletePickedImage={deletePickedImage} /> : null}
						{ previewVideo != null ? <PreviewVideo previewVideo={previewVideo} deletePickedVideo={deletePickedVideo} /> : null}
                        <SubmitButton 
                            hasPhoto={hasPhoto}
                            hasVideo={hasVideo}
                            hasText={hasText}
                            isLoading={isLoading}
                            action={handleUpdatePost}
                        />
                    </div>
                   <FilePicker
                        openImage={openFile}
                        openVideo={openFile2} 
                        hasPhoto={hasPhoto}
                        hasVideo={hasVideo}
                        photoInput={photoInput}
                        videoInput={videoInput}
                        pickedImage={pickedFile}
                        pickedVideo={pickedFile2}
                    />
                </div>
             </div>

              <FilePickerMobile 
                     openImage={openFile}
                     openVideo={openFile2} 
                     hasPhoto={hasPhoto}
                     hasVideo={hasVideo}
                     photoInput={photoInput}
                     videoInput={videoInput}
                     pickedImage={pickedFile}
                     pickedVideo={pickedFile2}
              />              
        </div>
     );
})
 
export default EditPostModal;