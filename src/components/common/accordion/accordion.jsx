// Import Dependency
import { useState } from "react";

// import Asset Images
import arrowDown from "../../../assets/images/riders/arrow-down.svg";
import arrowUp from "../../../assets/images/riders/arrow-up.svg";

const Accordion = ({ title, children, type }) => {
  const [open, setOpen] = useState(type ? false : true);
  const handleToggle = () => setOpen(!open);
  console.log(open)

  return (
    <div className={`text-white rounded-lg ${!type ? ' border border-[#383838] p-4' : null }`}>
      <div className="flex justify-between">
        <p className={`${!type ? 'text-xl' : null }`}>{title}</p>
        <button onClick={handleToggle}>
          <img src={open ? arrowUp : arrowDown} alt="" />
        </button>
      </div>
      <div className={open ? "block pt-4" : "hidden"}>{children}</div>
    </div>
  );
};

export default Accordion;
