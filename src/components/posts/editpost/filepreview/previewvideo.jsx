import mediaCloseIcon from '../../../../assets/images/post/mediaCloseIcon.svg'
const PreviewVideo = ({previewVideo, deletePickedVideo}) => {
    return (
        <div className="p-4 bg-[#2f3033] mb-6 rounded-lg">
            <div className="relative h-48 bg-cover bg-center" style={{ backgroundImage: `url(${previewVideo})` }}>
                <video src='previewVideo' width="320" height="240" controls> Your browser does not support the video tag.</video>
                <img onClick={deletePickedVideo} src={mediaCloseIcon} loading="lazy" width="28" alt="" className="absolute right-2 top-2 cursor-pointer" />
            </div>
		</div>
     );
}
 
export default PreviewVideo;