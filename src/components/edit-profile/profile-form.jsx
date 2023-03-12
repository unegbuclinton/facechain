// Import Components 
import AddCrypto from "./add-crypto";
const ProfileForm = () => {
    return (
    <>
       <form className="w-[100%]">
           <div className="w-[100%]">
                <div className="flex flex-wrap justify-between w-[100%]">
                    <div className="basis-[100%] md:basis-[48%] w-[100%]">
                        <div className="mb-10 py-2 border-[1px] border-[#979797] rounded-[5px] ">
                            <div className="px-4 text-[12px] text-[#979797]">Name</div>
                            <input className="w-[100%] px-4 text-primary outline-0 bg-transparent" placeholder="Enter a name" type="text" />
                        </div>
                    </div>

                    <div className="basis-[100%] md:basis-[48%] w-[100%]">
                        <div className="mb-10 py-2 border-[1px] border-[#979797] rounded-[5px] ">
                            <div className="px-4 text-[12px] text-[#979797]">Name</div>
                            <input className="w-[100%] px-4 text-primary outline-0 bg-transparent" placeholder="Enter a name" type="text" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between w-[100%] items-end">
                    <div className="basis-[100%] md:basis-[48%] w-[100%]">
                        <p className="mb-2 text-[15px] text-[#979797]">Social media & messaging apps</p>
                        <div className="mb-10 py-2 border-[1px] border-[#979797] rounded-[5px] ">
                            <div className="px-4 text-[12px] text-[#979797]">Name</div>
                            <input className="w-[100%] px-4 text-primary outline-0 bg-transparent" placeholder="Enter a name" type="text" />
                        </div>
                    </div>

                    <div className="basis-[100%] md:basis-[48%] w-[100%]">
                        <div className="mb-10 py-2 border-[1px] border-[#979797] rounded-[5px] ">
                            <div className="px-4 text-[12px] text-[#979797]">Name</div>
                            <input className="w-[100%] px-4 text-primary outline-0 bg-transparent" placeholder="Enter a name" type="text" />
                        </div>
                    </div>          
                </div> 

                <div className="flex flex-wrap justify-between w-[100%]">
                    <div className="basis-[100%] md:basis-[48%] w-[100%]">
                        <div className="mb-10 py-2 border-[1px] border-[#979797] rounded-[5px] ">
                            <div className="px-4 text-[12px] text-[#979797]">Name</div>
                            <input className="w-[100%] px-4 text-primary outline-0 bg-transparent" placeholder="Enter a name" type="text" />
                        </div>
                    </div>

                    <div className="basis-[100%] md:basis-[48%] w-[100%]">
                        <div className="mb-10 py-2 border-[1px] border-[#979797] rounded-[5px] ">
                            <div className="px-4 text-[12px] text-[#979797]">Name</div>
                            <input className="w-[100%] px-4 text-primary outline-0 bg-transparent" placeholder="Enter a name" type="text" />
                        </div>
                    </div>
                </div>   

                  <AddCrypto/>

                <div className="flex justify-center mt-16"> 
                    <div className=" mr-4 text-white border-[1px] border-white flex justify-center items-center py-3 w-[132px] rounded-[40px] text-[14px] font-bold">Cancel</div>
                    <div className=" text-black flex justify-center items-center py-3 w-[132px] bg-primary rounded-[40px] text-[14px] font-bold">Save</div>
                </div>     
           </div>
        </form>
    </> 
    );
}
 
export default ProfileForm;