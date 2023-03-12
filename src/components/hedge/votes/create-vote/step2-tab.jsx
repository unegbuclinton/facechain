import './step2-tab.css'

const Step2Tab = ({currentTab, tabHandler}) => {
    return (
        <div className= "flex justify-center items-center flex-wrap w-[100%] mt-8">
        <div className='flex bg-grey27 rounded-[4px] w-[100%]'>
        <div onClick={()=>{tabHandler(1)}} className={currentTab === 1 ?"step2-tab-active" : "step2-tab-inactive"}>
            Limit Order
        </div>
        <div onClick={()=>{tabHandler(2)}} className={currentTab === 2 ?"step2-tab-active" : "step2-tab-inactive"}>
            Market Order
        </div>
        </div>
        </div> 
    );
}
 
export default Step2Tab;