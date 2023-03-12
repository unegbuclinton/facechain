import filter from '../../assets/images/riders/filter.svg';
import search from '../../assets/images/riders/search.svg';

const Search = () => {
  return (
    <div className="flex items-center flex-wrap w-[100%] justify-between">
      <div className="relative flex basis-[100%] md:basis-[83%] mb-2 md:mb-0">
        <img className="absolute top-[10px] left-4" src={search} alt="" />
        <input
          className="w-[100%] text-white bg-grey27 outline-0 border-0 pl-[50px] rounded-[5px] h-[40px]"
          placeholder="Search"
          type="text"
        />
      </div>
      <div className="basis-[100%] md:basis-[15%]">
        <div className="flex justify-center items-center bg-primary rounded-[5px] text-black h-[40px]">
          <img className="mr-[10px]" src={filter} alt="" />
          <div>Filter</div>
        </div>
      </div>
    </div>
  );
};

export default Search;
