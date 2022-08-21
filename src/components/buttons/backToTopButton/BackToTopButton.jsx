import './BackToTopButton.css';
import upArrow from './assets/Up-Arrow.svg';


const BackToTopButton = () => {
    return(
        <a href='#' className='Back-To-Top'>
            <img className="Up-Arrow" src={upArrow} alt=""/>
        </a>
    )
};

export default BackToTopButton;