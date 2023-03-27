// Import Component
import FilterFamilyPools from "./filterfamilypools";
import CreatePool from "./createpool";
import familyPoolData from "../../mockdata/familypools.js";
import FamilyPoolCardPublic from "./familypoolcardspublic";

// import dependencies
const PublicPools = () => {
  return (
    <>
      <FilterFamilyPools />
      <CreatePool />
      {familyPoolData && <FamilyPoolCardPublic data={familyPoolData} />}
    </>
  );
};

export default PublicPools;
