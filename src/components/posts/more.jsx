/* import components */
import Publicpost from "./publicpost";
import Personalpost from "./personalpost";

/* import user context hook */
import { useAuthContext } from "../../hooks/auth/useauthcontext";

/** import dependencies */
import { useEffect, useState } from "react";

/* import image */
import moreDots from "../../assets/images/post/more-dots.svg";

const More = ({user_id, action, action2, id}) => {
		const { user } = useAuthContext();
		const [isOpen, setIsOpen] = useState(false);
		
		const toggleMore = () => {
			setIsOpen(!isOpen);
		}

		useEffect(() => {
			if (isOpen) {
				document.addEventListener("click", handleClick);
			} else {
				document.removeEventListener("click", handleClick);
			}
			return () => {
				document.removeEventListener("click", handleClick);
			}
		}, [isOpen]);

		const handleClick = (e) => {
			if(e.target.classList.contains("more-dots")) {
				return;
			}
			setIsOpen(false);
		}

		return (
			<>
				<img src={moreDots} alt="" onClick={toggleMore} className="cursor-pointer p-2 self-end md:block hidden hover:bg-black hover:bg-opacity-20 rounded-full"/>
				{isOpen &&
				 (
				 <div className='relative w-full'>
					{ user.id === user_id ? <Personalpost action={action} id={id} action2={action2}/> : <Publicpost id={id} /> }   
				 </div>
				)}
			</>	 
		);
}
 
export default More;