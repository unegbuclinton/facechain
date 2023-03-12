// Import Component 
import Header from "../components/header/header";
import BottomNavigation from "../components/bottomnav/bottomnav";
import TabMenu from "../components/tabmenu/tabmenu";
import Post from "../components/posts/post";
const Home = () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <div className="bg-black min-h-screen">
            <Header />
            <TabMenu/>
            <Post posts={data}/>
            <BottomNavigation />
        </div>
     );
}
 
export default Home;