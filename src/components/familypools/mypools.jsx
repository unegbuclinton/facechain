// Import Component
import FilterFamilyPools from "./filterfamilypools";
import CreatePool from "./createpool";
import familyPoolData from "../../mockdata/familypools.js";
import FamilyPoolCardPrivate from "./familypoolcardsprivate";

const MyPools = () => {
  return (
    <>
      <FilterFamilyPools />
      <CreatePool />
      {familyPoolData && <FamilyPoolCardPrivate data={familyPoolData} />}
    </>
  );
};

export default MyPools;
