import SearchIcon from "../../../assets/images/predictions/search.svg";

const Search = () => {
  return (
    <div className="relative w-full">
      <input
        className="w-full py-2 px-10 rounded-md bg-[#29292C] bg-opacity-70 text-white "
        type="text"
        placeholder="Search"
        required
      />
      <img
        src={SearchIcon}
        className="absolute cursor-pointer left-2 top-2"
        alt=""
      />
    </div>
  );
};

export default Search;
