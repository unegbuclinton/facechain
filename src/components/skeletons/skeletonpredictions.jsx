import Skeleton from "./skeleton";

const SkeletonPredictions = () => {
    return (
        <div className='bg-darkGrey px-3 py-7 rounded-lg text-white w-full md:w-[48%] mb-11'>
                 <div className='flex justify-between items-center'>
                     <div className='flex items-center'>
                         <Skeleton type="avatar"/>
                         <div className='ml-2'>
                             <Skeleton type="avatartitle" />
                             <Skeleton type="avatardesc" />
                         </div>
                     </div>
                     <div className='text-right w-[30%] flex flex-col items-end'>
                         <Skeleton type="avatartitle" />
                         <Skeleton type="avatardesc" />
                     </div>
                 </div>
                 <div className='py-3'>
                     <div className='flex justify-between my-3'>
                        <Skeleton type="avatartitle" />
                        <Skeleton type="avatartitle" />
                     </div>
                     <div className='flex justify-between my-3'>
                        <Skeleton type="avatartitle" />
                        <Skeleton type="mediumtext" />
                     </div>
                     <div className='flex justify-between my-3'>
                        <Skeleton type="avatartitle" />
                        <Skeleton type="mediumtext" />
                     </div>
                     <div className='flex justify-between my-3'>
                         <Skeleton type="avatartitle" />
                         <Skeleton type="avatartitle" />
                     </div>
                     <div className='flex justify-between my-3'>
                         <Skeleton type="avatartitle" />
                         <Skeleton type="avatartitle" />
                     </div>
                     <div className='flex justify-between my-3'>
                        <Skeleton type="avatartitle" />
                        <Skeleton type="mediumtext" />
                     </div>
                     <div className='flex justify-between my-3'>
                         <Skeleton type="avatartitle" />
                         <Skeleton type="mediumtext" />
                     </div>
                 </div>
                 <div className="prediction-footer border-t-2
                 border-grey26 pt-7 flex justify-center">
                    <Skeleton type="cta" />
                    <Skeleton type="cta" />
                 </div>
                 </div>
    );
}
 
export default SkeletonPredictions;