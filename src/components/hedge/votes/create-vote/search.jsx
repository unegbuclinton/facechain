import search from "../../../../assets/images/riders/search.svg";

const Search = () => {
  return (
    <div className="flex items-center flex-wrap w-[100%] justify-between">
      <div className="relative flex basis-[100%] md:basis-[100%] mb-2 md:mb-0">
        <img className="absolute top-[10px] left-4" src={search} alt="" />
        <input
          className="w-[100%] text-white bg-grey27 outline-0 border-0 pl-[50px] rounded-[5px] h-[40px]"
          placeholder="Search"
          type="text"
        />
      </div>
    </div>
  );
};

export default Search;
