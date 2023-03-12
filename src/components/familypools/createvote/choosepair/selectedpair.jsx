const SelectedPair = ({item}) => {
    return (
        <div className="flex justify-between items-center w-[100%] bg-primary rounded-[4px] px-[5%] py-4 mb-3">
            <div className="flex items-center">
                <img className=" mr-4 w-[40px] h-[40px] rounded-[50%]" src={item.image} alt="" />
                <div>
                    <p className="text-[14px] text-white">{item.title}</p>
                </div>
            </div>
            <div>
                <p className="text-[14px] text-white">0.0512/${item.amount}</p>
            </div>
        </div>
    );
}
 
export default SelectedPair;