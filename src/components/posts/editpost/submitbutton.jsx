
/* import icons */
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SubmitButton = ({hasPhoto, hasText, hasVideo, isLoading, action}) => {
    return ( 
        <button className={hasVideo || hasPhoto || hasText ? 'bg-primary h-14 w-full rounded-md font-bold hidden 2md:block' : " w-full h-14 rounded-md font-bold bg-[#505151] hidden 2md:block"} onClick={action}> {isLoading ? (
            <FontAwesomeIcon
            icon={faSpinner}
            className=" cursor-pointer fa-spin fa-pulse"
            />
        ) : (
            "Update Post"
        )}</button>
     );
}
 
export default SubmitButton;