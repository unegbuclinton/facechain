import "./modal.css";
import astro from "../../assets/images/cool-hedge/astro.png";

const Modal = () => {
  return (
    <div className="hedge-modal">
      <div className="hedge-card w-[90%] md:w-[30%] flex flex-col justify-center items-center">
        <img src={astro} alt="" />
        <br />

        <div className="text-[24px] text-white">Congratulations</div>
        <div className="text-[#979797]">
          You did the <span className="mx-2 text-[#3DD598]">"Cool"</span>Hedge.
        </div>
        <br />
        <div className="flex justify-center w-[100%]">
          <div className="flex font-bold justify-center items-center bg-primary rounded-[50px] h-[40px] px-8 mt-4 md:w-[50%] w-[90%]">
            <div>Okay</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
