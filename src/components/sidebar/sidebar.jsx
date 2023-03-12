import SearchSideBar from './searchsidebar';
import Trend from './trend';

const SideBar = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="hidden lg:block">
      <SearchSideBar />
      <div className="bg-darkGrey w-full px-4 py-6 rounded-lg ">
        <div className="border-b-2 border-[#262626] pb-4 mb-6">
          <p className="text-white font-bold lg:text-base xl:text-xl">
            Worldwide Trends
          </p>
        </div>
        <div className="">
          {data &&
            data.map((trend, index) => (
              <Trend trend={trend} index={index} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
