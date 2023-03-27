import "./checkbox.css";

const MemberTile = () => {
  return (
    <>
      <div className="flex justify-between items-center w-[100%] border-b-[1px] border-[#383838]  px-[5%] py-4">
        <div className="flex items-center">
          <div
            className="bg-center bg-cover  mr-4 w-[52px] h-[52px] rounded-[50%]"
            style={{
              backgroundImage: `url("https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427")`,
            }}
          ></div>
          <div>
            <div className="text-[16px] text-white">Aaliyah Mosley</div>
            {/* <div className="text-[#3DD598] text-[14px] mb-4">20k+ <span className="text-white">Invested</span></div>  */}
            <div className="text-white opacity-[80%]">
              <span className="text-[#3DD598]">20k+ </span>Invested
            </div>
          </div>
        </div>
        <div>
          <input type="checkbox" />
        </div>
      </div>
    </>
  );
};

export default MemberTile;
