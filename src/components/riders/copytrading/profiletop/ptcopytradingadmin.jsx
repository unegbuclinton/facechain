
import ImageAdmin from './imageadmin';
import avatar from '../../../../assets/images/family-pools/admin-avatar.jpg';

// Import Dependency 
import { Link } from 'react-router-dom';

/* import images */
import discord from '../../../../assets/images/family-pools/discord.svg';
import telegram from '../../../../assets/images/family-pools/telegram.svg';
import facebook from '../../../../assets/images/family-pools/facebook.svg';
import whatsapp from '../../../../assets/images/family-pools/whatsapp.svg';

import ShareProfile from '../../../common/share/shareprofile';
import SettingsModal from '../../../settings/settings-modal';
import { useState } from 'react';

const PTcopyTradingAdmin = () => {

    const [modal, setModal] = useState(false);
    const modalHandler = () => setModal(!modal);

    return (
        <>
         <div className="text-white w-full lg:w-2/3 m-auto sm:mb-10 mb-2">
         <ImageAdmin avatar={avatar} />
         <div className='flex justify-center w-full sm:w-1/2 m-auto'>
            <div className="flex justify-center mt-4"> 
                <Link to={'/crypto-exchange'}>
                    <div className=" mr-4 text-black flex justify-center items-center py-3 w-[132px] bg-primary rounded-[40px] text-[14px] font-bold">List Investors</div>
                </Link>
                <div onClick={modalHandler} className="cursor-pointer text-white border-[1px] border-white flex justify-center items-center py-3 w-[132px] rounded-[40px] text-[14px] font-bold">Settings</div>
            </div> 
        </div>
        <div className='flex justify-center w-1/2 m-auto sm:mt-12 mt-6'>
           <ShareProfile icon={discord}  color="#8A9CFE" />
           <ShareProfile icon={telegram} color="#20A0E1"/>
           <ShareProfile icon={facebook} color="#1777F2" />
           <ShareProfile icon={whatsapp} color="#25D366" />
        </div>
        </div>
        {modal && <SettingsModal modalHandler={modalHandler} />}
        </>
     );
}
 
export default PTcopyTradingAdmin;



