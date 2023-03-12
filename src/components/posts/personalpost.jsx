import { usePostContext } from "../../hooks/post/usepostcontext"
import { useState } from "react";
import copyToClipBoard from "../../helpers/clipboard";
import { success, warning } from "../common/toast/toast";

const PersonalPost = ({action, action2, id}) => {
  const {posts} = usePostContext();

  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    copyToClipBoard(posts[id].id, 'post')
    .then(()=>{
        success('Copied to clipboard')
        setTimeout(()=>{
            setIsCopied(false)
        }
        ,2000)
    })
    .catch(err =>{
        warning('Failed to copy post link')
    })
  }

  

  return (
    <>
        <div className="app-card more w-full"> 
            <div className="border-b border-[#3E4047] py-3 cursor-pointer" onClick={()=> action(id)}>
                <p className='text-red text-center'>Delete</p>
            </div>
            <div className="border-b border-[#3E4047] py-3 cursor-pointer">
                <p className='text-center'>Turn off comments </p>
            </div>
            <div className="border-b border-[#3E4047] py-3 cursor-pointer">
                <p className='text-center'>Pin a post</p>
            </div>
            <div className="border-b border-[#3E4047] py-3 cursor-pointer" onClick={()=> action2(id) }>
                <p className='text-center'>Edit</p>
            </div>
            <div className="py-3 cursor-pointer" onClick={handleCopyClick} >
                {isCopied ? <p className='text-center text-primary'>Copied to clipboard</p> : <p className='text-center'>Copy Link</p>}  
            </div>       
        </div>    
    </>
  )
}
export default PersonalPost
