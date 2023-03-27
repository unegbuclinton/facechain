// Import Dependency
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ValidatorPill = ({ requirement, title }) => {
  return (
    <div
      className={`rounded-full border-gray-400 px-2 mx-1 text-xs my-1 flex justify-between items-center ${
        requirement
          ? "text-black font-medium bg-primary"
          : "text-gray-400 border"
      }`}
    >
      <FontAwesomeIcon
        icon={requirement ? faCheck : faXmark}
        className={`${requirement ? "text-black mr-2" : "mr-2"}`}
      />
      {title}
    </div>
  );
};

export default ValidatorPill;
