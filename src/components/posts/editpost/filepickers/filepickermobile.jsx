import photoIcon from '../../../../assets/images/post/photoIcon.svg'
import videoIcon from '../../../../assets/images/post/videoIcon.svg'

const FilePickerMobile = ({openImage, openVideo, hasPhoto, hasVideo, photoInput, videoInput, pickedImage, pickedVideo}) => {
    return ( 
        <>
             <div className='w-[90%] flex mt-6 2md:hidden'>
                <div onClick={openImage} className={`mb-4 flex py-5 px-4 justify-center cursor-pointer w-full border-r border-[#505151] ${hasPhoto ? 'bg-primary': 'bg-[#2f3033]'}`}><img src={photoIcon} loading="lazy" alt="" className="media-action-icon" />
                        <p className='text-[#848485]'>Photo</p>
                        <input style={{ display: 'none' }} type="file" ref={photoInput} accept="image/*" onChange={pickedImage} />
                </div>
                <div onClick={openVideo} className={`mb-4 flex py-5 px-4 justify-center cursor-pointer w-full ${hasVideo ? 'bg-primary': 'bg-[#2f3033]'}`}><img src={videoIcon} loading="lazy" alt="" className="media-action-icon" />
                    <p className='text-[#848485]'>Video</p>
                    <input style={{ display: 'none' }} type="file" ref={videoInput} accept="video/mp4,video/x-m4v,video/*" onChange={pickedVideo} />
                </div>
            </div>
        </>
     );
}
 
export default FilePickerMobile;