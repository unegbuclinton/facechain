import mediaCloseIcon from '../../../../assets/images/post/mediaCloseIcon.svg'
const PreviewImage = ({previewImage, deletePickedImage}) => {
    return (
        <div className="p-4 bg-[#2f3033] mb-6 rounded-lg">
            <div className="relative h-48 bg-cover bg-center" style={{ backgroundImage: `url(${previewImage})` }}>
                <img onClick={deletePickedImage} src={mediaCloseIcon} loading="lazy" width="28" alt="" className="absolute right-2 top-2 cursor-pointer" />
            </div>
        </div> 
     );
}
 
export default PreviewImage;