// import component 
import iconLibrary from "./paths";

const Icon = ({name}) => {
    return (
        <svg width={iconLibrary[name].width} height={iconLibrary[name].height} viewBox={iconLibrary[name].viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d={iconLibrary[name].path} fill="currentColor"/>
        </svg>
    );
}
 
export default Icon;