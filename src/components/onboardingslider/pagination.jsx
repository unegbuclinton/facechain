
const SliderDots = ({data, index}) => {
    const listItems = data.map((e, i) =>
         <li className={i === index ? 'active-dot' : 'inactive-dot'} key={i}></li>
    )
    return (
        <ul className="flex">
             {listItems}
        </ul> 
    );
}
 
export default SliderDots;
