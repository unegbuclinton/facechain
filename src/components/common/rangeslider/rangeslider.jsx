
const RangeSlider = ({min, max, value, action, name}) => {
    let bg = (value - min) / (max - min) * 100;
    return (
        <input type="range" className="w-full" 
            min={min} 
            max={max} 
            onInput={action}
            value={value}
            name={name}
            style={{backgroundSize: bg + '%'}}
        />
     );
}
 
export default RangeSlider;