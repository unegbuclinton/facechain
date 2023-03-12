// import dependency 
import { useState } from 'react';

// import asset image
import logo from '../../assets/images/onboarding/white-logo.svg'

// import component 
import onBoardingData from './onboardingdata';
import SliderDots from './pagination';
import Slides from './slider';

// import styling 
import './styles.css';

const OnBoardingSlider = () => {
    
    const [index, setIndex] = useState(0)
    const data = onBoardingData.slides

    function nextSlide(){
        if(index < data.length - 1) setIndex(index + 1)
    }

    return (
        <div className='text-white flex flex-col flex-1 self-center sm:justify-evenly justify-between'>
            <div className='self-center'>
                <img src={logo} alt='logo'/>
            </div>
            <Slides data={data} index={index}/>
            <div className='flex justify-between items-center'>
                <p className='text-greyText w-10 h-10 p-10 flex justify-center items-center'>Skip</p>
                <SliderDots data={data} index={index}/>
                <p className='next-button' onClick={nextSlide}>Next</p>
            </div>
        </div>
    );
}
 
export default OnBoardingSlider;