// import compnent
import Icon from "../icons/icons";

const BottomNavItem = ({ title, iconName }) => {
  return (
    <div className="flex flex-col items-center justify-between pt-3 pb-3 relative w-1/5">
      <div>
        <Icon name={iconName} />
      </div>
      <div className="mt-1">{title}</div>
    </div>
  );
};

export default BottomNavItem;
