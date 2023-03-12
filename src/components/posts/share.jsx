/* import image */
import share from '../../assets/images/post/share.svg'

const Share = () => {
    return (
        <div className="items-center cursor-pointer hidden md:flex lg:mx-10 mx-5 ">
            <div className='mr-2'>
                <img src={share} alt="" />
            </div>
            <div>
                <p>Share</p>
            </div>
        </div>
    );
}
 
export default Share;