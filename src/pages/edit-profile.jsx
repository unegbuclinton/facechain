// import Component  
import Header from "../components/header/header";
import BottomNavigation from "../components/bottomnav/bottomnav";
import Topbar from "../components/rider-profile/top-bar";
import ProfileImage from "../components/edit-profile/profile-image";
import ProfileForm from "../components/edit-profile/profile-form";

import StickyScroll from "../components/stickyscroll/stickyscroll";

const EditProfile = () => {
    return (
        <div className="bg-black min-h-screen overflow-auto ">
             <StickyScroll>
                 <Header />
                 <Topbar title='Edit Profile'/> 
            </StickyScroll> 
            <div className="overflow-auto mt-40 w-[90%] md:w-2/3 m-auto mb-4 pb-20 flex flex-col items-center justify-center">
               <ProfileImage/>  
               <ProfileForm/>                 
            </div>
          
            <BottomNavigation />
        </div>
     );
}
 
export default EditProfile;