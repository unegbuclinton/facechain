import { Link } from "react-router-dom";

const CreatePool = () => {
    return (
       <div className="text-white bg-[#073927] rounded-lg w-full m-auto my-8">
           <div className="fp-stripe w-full px-4 sm:px-10 py-10 flex rounded-lg justify-between items-center">
                <div>
                    <p className="">Invest Together With</p>
                    <p className="text-2xl sm:text-3xl">Family Pool</p>
                </div> 
                <div>
                    <Link to="/family-pools/create-family-pool">
                        <button className="bg-primary text-white px-8 py-2 rounded-full">
                            Create
                        </button>
                    </Link>
                  
                </div>
           </div>
       </div>
     );
}
 
export default CreatePool;