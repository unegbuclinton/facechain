// Import Styling 
import './news.css'

const NewsChip = ({item, categoryHandler , currentCategory}) => {
    return (
        <div onClick={()=> { categoryHandler(item.id)}} className= { currentCategory == item.id ? 'news-chip-active' : 'news-chip-inactive'}>
        {item.title}
        </div> 
    );
}
 
export default NewsChip;