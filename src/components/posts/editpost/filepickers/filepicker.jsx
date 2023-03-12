import photoIcon from '../../../../assets/images/post/photoIcon.svg'
import videoIcon from '../../../../assets/images/post/videoIcon.svg'

const FilePicker = ({openImage, openVideo, hasPhoto, hasVideo, photoInput, videoInput, pickedImage, pickedVideo}) => {
    return ( 
        <>
             <div className='basis-[20%] hidden 2md:block'>
                <div onClick={openImage} className={`mb-4 flex py-5 px-4 justify-center rounded-md cursor-pointer ${hasPhoto ? 'bg-primary': 'bg-[#2f3033]'}`}><img src={photoIcon} loading="lazy" alt="" className="media-action-icon" />
                        <p className='text-[#848485]'>Photo</p>
                        <input style={{ display: 'none' }} type="file" ref={photoInput} accept="image/*" onChange={pickedImage} />
                </div>
                <div onClick={openVideo} className={`mb-4 flex py-5 px-4 justify-center rounded-md cursor-pointer ${hasVideo ? 'bg-primary': 'bg-[#2f3033]'}`}><img src={videoIcon} loading="lazy" alt="" className="media-action-icon" />
                    <p className='text-[#848485]'>Video</p>
                    <input style={{ display: 'none' }} type="file" ref={videoInput} accept="video/mp4,video/x-m4v,video/*" onChange={pickedVideo} />
                </div>
            </div>
        </>
     );
}
 
export default FilePicker;