// Import Asset Images 
import camera from "../../../assets/images/edit-profile/camera.svg"

const ImagePicker = () => {
    return (
        <div className="bg-center bg-cover mr-4 w-[120px] h-[120px] rounded-[50%]" style={{ backgroundImage: `url("https://coinfomania.com/wp-content/uploads/Webp.net-resizeimage-17-1.jpg")` }}> 
            <div className="bg-black opacity-[80%] w-[100%] h-[100%] flex justify-center items-center border-[2px] border-white rounded-[50%]">
                <img className="h-[29.85px] w-[35px]" src={camera} alt="" />
            </div>
        </div>  
    );
}
 
export default ImagePicker;