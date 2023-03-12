// Import Dependency 
import { useState } from "react";

// Import Components 
import NewsChip from "./news-chip";
import NewsCard from "./news-card";
const NewsItem = () => {
    let my_categories = [{'id' : 1,title: 'All'},{'id' : 2,title: 'Local'},{'id' : 3,title: 'Option'},{'id' : 4,title: 'Option'},,{'id' : 5,title: 'Option'},,{'id' : 6,title: 'Option'}];

    let my_news = [
        {
        'id': 1,
        'img': "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE.jpg",
        'title': 'cryptonews.com',
        'body': 'Holding Steady: Bitcoin higher Monday morning after October rally in cryptocurrncy market'
    },
    {
        'id': 2,
        'img': "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE.jpg",
        'title': 'cryptonews.com',
        'body': 'Holding Steady: Bitcoin higher Monday morning after October rally in cryptocurrncy market'
    },
    {
        'id': 3,
        'img': "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE.jpg",
        'title': 'cryptonews.com',
        'body': 'Holding Steady: Bitcoin higher Monday morning after October rally in cryptocurrncy market'
    },
    {
        'id': 4,
        'img': "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE.jpg",
        'title': 'cryptonews.com',
        'body': 'Holding Steady: Bitcoin higher Monday morning after October rally in cryptocurrncy market'
    },
]
    const [categories, setCategories] = useState(my_categories)
    const [currentCategory, setCurrentCategory] = useState(1)

    const categoryHandler = (value) => {
        setCurrentCategory(value);
    }
    return (
        
        <div className="p-0 m-auto mb-4">
           {/* newschip */}
            <div className="flex flex-wrap mb-3">
                {
                    categories.map( item => {

                        return <NewsChip categoryHandler={categoryHandler} currentCategory={currentCategory} item={item} /> ;

                    })
                }
 
            </div>

            {/* newscard */}
        
            <div className="flex flex-wrap justify-between">
                {
                    my_news.map( item => {

                        return <NewsCard item={item} /> ;

                    })
                }
 
            </div>

        </div>
        
    );
}
 
export default NewsItem;