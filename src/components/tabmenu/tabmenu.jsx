// import styling
import "./tabmenu.css";

const TabMenu = ({ tabHandler, currentTab, tabArray, isFixed }) => {
  return (
    <div
      className={
        isFixed
          ? "overflow-auto z-[100] tab-menu flex justify-center border-b border-gray-800"
          : "z-[100] tab-menu flex justify-center border-b border-gray-800 overflow-hidden"
      }
    >
      <nav className="w-full lg:w-1/3 flex justify-center ">
        <ul className="flex w-full justify-center ">
          {tabArray.map((item) => {
            return (
              <li
                key={item.id}
                onClick={() => tabHandler(item.id)}
                className={
                  currentTab === item.id
                    ? "tab-menu-item t-menu-active cursor-default"
                    : "tab-menu-item"
                }
              >
                {item.title}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default TabMenu;
