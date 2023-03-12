/* import images */
import closeIcon from '../../assets/images/settings/x.svg'
import dataPrivacy from '../../assets/images/settings/data-privacy.svg'
import logout from '../../assets/images/settings/logout.svg'
import license from '../../assets/images/settings/license.svg'
import agreement from '../../assets/images/settings/agreement.svg'
import access from '../../assets/images/settings/access.svg'
import privacy from '../../assets/images/settings/privacy.svg'
import help from '../../assets/images/settings/help.svg'
import advert from '../../assets/images/settings/advert.svg'

/* import styling */
import "./settings-modal.css"

const SettingsModal = ({modalHandler}) => {
    return (
        <div className="settings-modal">
        <div className="settings-card w-[90%] md:w-[35%]">
        <div className="mb-8 relative flex justify-center">
            <div className="text-white font-bold text-[18px]">Settings</div>
         <img onClick={modalHandler} className="cursor-pointer absolute top-0 right-0" src={closeIcon} alt="" />
        </div>

        <div className=" flex items-center border-[1px] border-[#ffffff42] rounded-[10px] p-4 mb-6">
           <img className="mr-4" src={dataPrivacy} alt="" />
           <div className="text-white font-bold">Data privacy</div>
        </div>
        <div className=" flex items-center border-[1px] border-[#ffffff42] rounded-[10px] p-4 mb-6">
           <img className="mr-4" src={advert} alt="" />
           <div className="text-white font-bold">Advertising data</div>
        </div>
        <div className=" flex items-center border-[1px] border-[#ffffff42] rounded-[10px] p-4 mb-6">
           <img className="mr-4" src={help} alt="" />
           <div className="text-white font-bold">Help Center</div>
        </div>
        <div className=" flex items-center border-[1px] border-[#ffffff42] rounded-[10px] p-4 mb-6">
           <img className="mr-4" src={privacy} alt="" />
           <div className="text-white font-bold">Privacy Policy</div>
        </div>
        <div className=" flex items-center border-[1px] border-[#ffffff42] rounded-[10px] p-4 mb-6">
           <img className="mr-4" src={access} alt="" />
           <div className="text-white font-bold">Accessibility</div>
        </div>
        <div className=" flex items-center border-[1px] border-[#ffffff42] rounded-[10px] p-4 mb-6">
           <img className="mr-4" src={agreement} alt="" />
           <div className="text-white font-bold">User Agreement</div>
        </div>
        <div className=" flex items-center border-[1px] border-[#ffffff42] rounded-[10px] p-4 mb-6">
           <img className="mr-4" src={license} alt="" />
           <div className="text-white font-bold">End User License Agreement</div>
        </div>
        <div className=" flex items-center border-[1px] border-[#ffffff42] rounded-[10px] p-4 mb-6">
           <img className="mr-4" src={logout} alt="" />
           <div className="text-white font-bold">Sign Out</div>
        </div>
        </div>
        </div> 
    );
}
 
export default SettingsModal;