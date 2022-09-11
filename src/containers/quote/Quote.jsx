import './Quote.css';
import quoteFrame from './assets/Quote-Frame.svg';

const Quote = () => {
    return (
        <div className="Quote">
            <div className="Quote-Background">
                <div className="Quote-Image-Container">
                    <img className="Quote-Image" src={quoteFrame} alt="quote frame"/>
                </div>
            </div>
            <div className="Quote-Forground">
                <div className="Quote-Text">
                    Don't forget, you are the <span className="Alt-Text">hero</span> of your own story
                </div>
                <div className="Quote-Author">
                    <div className="Quote-Author-Text">~ Greg Boyle</div>
                </div>
            </div>
        </div>
    )
};

export default Quote;  