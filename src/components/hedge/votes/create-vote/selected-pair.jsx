//import "../../hedge/checkbox.css";

const SelectedPair = ({ item }) => {
  const backHandler = () => {};

  return (
    <>
      <div className="flex justify-between items-center w-[100%] bg-primary rounded-[4px] px-[5%] py-4 mb-3">
        <div className="flex items-center">
          <div
            className="bg-center bg-cover  mr-4 w-[40px] h-[40px] rounded-[50%]"
            style={{ backgroundImage: `url(${item.image})` }}
          ></div>
          <div>
            <p className="text-[14px] text-white">{item.title}</p>
            {/* <div className="text-white opacity-[80%]"><span className="text-[#3DD598]">20k+ </span>Bitcoin </div> */}
          </div>
        </div>
        <div>
          <p className="text-[14px] text-white">0.0512/${item.amount}</p>
        </div>
      </div>
    </>
  );
};

export default SelectedPair;
