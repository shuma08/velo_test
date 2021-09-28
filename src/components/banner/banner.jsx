import './style.scss';
import BgImg from '../logos/bg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faClock, faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
    return (
        <div className="top-img-container">
            <div className="background-img">
                <img src={BgImg} alt="velo" />
                <div className="location">
                    <FontAwesomeIcon className="marker" icon={faMapMarker} /><span>ST.PETERBURG</span>
                </div>
            </div>
            <div className="r-box-container">
                <div className="yellow">
                    <FontAwesomeIcon className="logo" icon={faClock} size="2x" />
                    <p>Best time to visit</p>
                    <p><b>MARCH</b></p>
                </div>
                <div className="blue">
                    <FontAwesomeIcon className="logo" icon={faPlaneDeparture} size="2x" />
                    <p>20 flights from</p>
                    <p><b>$350</b></p>
                </div>
            </div>
        </div>
    );
};

export default Banner;