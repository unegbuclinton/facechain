
const FilterToggle = ({setToggle, active, categories}) => {
    return (
            <div className="text-white">
                <ul className="filter-toggle flex justify-between bg-[#7676801F] w-full lg:w-2/3 m-auto rounded-md py-1 px-1">
                    {categories.map((category, index) => (
                        <li className={`px-2 sm:px-14 py-2 cursor-pointer flex justify-center ${active === category ? "active" : ""}`} onClick={()=> setToggle(category)} value={category} key={index} 
                        style={{
                            width: 'calc(100% / ' + categories.length + ')',
                        }}
                        >{category}</li>
                    ))}
                   
                </ul>
            </div>
     );
}
 
export default FilterToggle;