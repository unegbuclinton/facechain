import Skeleton from './skeleton';

const SkeletonPosts = () => {
  return (
    <div className="text-white bg-darkGrey m-auto px-5 md:px-10 py-6 rounded-xl mt-4 mb-5 relative overflow-hidden">
      <div className="mb-5 flex justify-between">
        <div className="flex">
          <Skeleton type="avatar" />
          <div className="ml-2 flex flex-col justify-center">
            <Skeleton type="avatartitle" />
            <Skeleton type="avatardesc" />
          </div>
        </div>
        <div className="w-[30%]  ">
          <div className="flex justify-end ">
            <Skeleton type="optionsmore" />
          </div>
        </div>
      </div>
      <div className="mb-6">
        <Skeleton type="text" />
        <Skeleton type="text" />
        <Skeleton type="text" />
      </div>
      <div className="w-full mb-6">
        <Skeleton type="media" />
      </div>
      <div className="border-t-4 border-grey26 py-5 flex justify-start md:justify-center">
        <Skeleton type="cta" />
        <Skeleton type="cta" />
        <Skeleton type="cta" />
      </div>
    </div>
  );
};

export default SkeletonPosts;
