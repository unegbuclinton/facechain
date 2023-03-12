import camera from "../../../assets/images/edit-profile/camera.svg";
import edit from "../../../assets/images/riders/edit.svg";
import placeholder from "../../../assets/images/hedge/hedge-placeholder.png";
const HedgeImage = () => {
  return (
    <div className="w-full flex justify-center">
      <div
        className="mb-10 bg-center bg-cover  mr-4 w-[120px] h-[120px] rounded-[50%]"
        style={{ backgroundImage: `url(${placeholder})` }}
      >
        <div className="relative bg-black opacity-[80%] w-[100%] h-[100%] flex justify-center items-center border-[2px] border-white rounded-[50%]">
          <img
            className="absolute h-[30px] bottom-[-5px] right-[5px]"
            src={edit}
            alt=""
          />
          <img className="h-[25px]" src={camera} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HedgeImage;
