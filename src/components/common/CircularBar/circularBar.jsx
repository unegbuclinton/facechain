/* import react dependencies */
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

// Import Styling 
import 'react-circular-progressbar/dist/styles.css';

const CircularBar = ({value}) => {
  return (
      <>
       <div className='w-[50px] md:w-[35px] lg:w-[70px]'>             
          <CircularProgressbar
          value={value}
          text={`${value}%`}
          styles={buildStyles({
              textColor:"white",
              pathColor:`${value < 50?'#F1663A':'#01AB6C'}`,
              trailColor:"#434343"
          })}
          />
      </div>
    </>
  )
}

export default CircularBar