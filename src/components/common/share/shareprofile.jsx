
const ShareProfile = ({icon, color}) => {
    return (
        <button 
            className="border sm:w-12 sm:h-12 rounded-lg flex-none items-center self-center sm:mx-4 mx-2 w-8 h-8"
            style={{border: `1px solid ${color}`}}
        >
            <img className="m-auto w-5 sm:w-7" src={icon} alt="" />
        </button>
     );
}
 
export default ShareProfile;