// Import Asset Images 
import imgIcon from '../../assets/images/news/imgIcon.svg'

// Import Styling 
import './news.css'
const NewsCard = ({item}) => {
    return (
        <div className= "h-[316px] w-[100%] mb-[32px] md:w-[48%]">
        <div className='relative w-[100%] h-[65%] rounded-t-[10px] overflow-hidden'>
            <img className='absolute top-4 right-4' src={imgIcon} alt="" />
            <img className='object-cover w-[100%] h-[100%]' src={item.img} alt="" />
        </div>
        <div className='bg-darkGrey w-[100%] h-[35%] rounded-b-[10px] py-4 px-4'>
         <div className="text-primary uppercase text-xs mb-4">{item.title}</div>
         <div className="text-white text-sm">{item.body}</div>
        </div>
        </div> 
    );
}
 
export default NewsCard;