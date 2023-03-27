// Import Asset Image
import SearchIcon from "../../assets/images/predictions/search.svg";

const SearchSideBar = () => {
  return (
    <div className="relative w-full mb-4">
      <input
        className="w-full py-2 px-10 rounded-md bg-darkGrey text-white "
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

export default SearchSideBar;
