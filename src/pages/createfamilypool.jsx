import Header from "../components/header/header";
import BottomNavigation from "../components/bottomnav/bottomnav";
import CreatePoolForm from "../components/familypools/createfamilypool/createpoolform";

const CreateFamilyPool = () => {
  return (
    <div className="bg-black h-screen overflow-auto ">
      <Header />
      <div className="page-wrap w-[90%] md:w-[48%] m-auto mt-10 pt-6 pb-20">
        <CreatePoolForm />
      </div>
      <BottomNavigation />
    </div>
  );
};

export default CreateFamilyPool;
