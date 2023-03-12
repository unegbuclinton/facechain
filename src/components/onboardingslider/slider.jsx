
const Slides = ({data, index}) => {
    return (
        <div className='flex flex-col items-center'>
                <img className="mb-5 sm:w-2/6" src={data[index].image} alt="" />
                <p className="text-2xl font-bold mb-5 mt-5">{data[index].title}</p>
                <p className="text-base font-normal text-greyText w-2/3 text-center">{data[index].body}</p>
        </div>
    );
}

export default Slides;

