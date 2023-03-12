// import asset image 
import stars from '../../assets/images/splash/small-stars.svg'

// import styling 
import './styles.css';

const StarBackground = (props) => {
    return (  
        <section className="min-h-screen bg-black">
            <div className="full-container">
                <img className="top-star" src={stars} alt="star-group" />
                <img className="bottom-star" src={stars} alt="star-group" />
                {props.children}
            </div> 
        </section>
    );
}
 
export default StarBackground;
