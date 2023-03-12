import { Link } from "react-router-dom";
const OptionTile = ({item}) => {
    return (
       <>
       <Link to={item.route}>
       <div className="text-[#BFBFC3]  px-[5%] py-[1rem] flex items-center cursor-pointer text-[16px] border-b-[1px] border-[#404142]">
          <img className="mr-4" src={item.icon} alt="" />
        <div>{item.title}</div>
        </div>
       </Link>
       </>
    );
}
 
export default OptionTile;