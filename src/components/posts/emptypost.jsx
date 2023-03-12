/* import image */
import emptyicon from '../../assets/images/post/emptyicon.svg';

const EmptyPost = () => {
  return (
    <div className="">
      <div className="blob">
        <img src={emptyicon} className="emptyIcon" alt="No Post" />
      </div>
      <div className="flex justify-center">
        <button className="bg-primary  px-4 py-2 rounded-md mx-3 2lg:block">
          Follow Riders
        </button>
      </div>
    </div>
  );
};

export default EmptyPost;
