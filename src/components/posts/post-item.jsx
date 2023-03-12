/* import components */
import SideBar from '../sidebar/sidebar';
import CreatePost from './create-post';
import Posts from './posts';

const PostItem = () => {
  return (
    <div className="flex justify-between">
      <div className="w-full lg:w-[73%]">
        <CreatePost />
        <Posts />
      </div>
      <div className="hidden w-[25%] lg:block">
        <SideBar />
      </div>
    </div>
  );
};

export default PostItem;
