
const ProgressDots = ({data, activeTab}) => {
    const listItems = data.map((e, i) =>
         <li className={i <= activeTab ? 'activeprogress-dot' : 'inactive-dot'} key={i}></li> 
    )
    return (
        <ul className="flex">
             {listItems}
        </ul> 
    );
}
 
export default ProgressDots;
