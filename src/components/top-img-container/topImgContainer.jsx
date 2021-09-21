import './style.scss';
import bgImg from '../logos/bg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faClock, faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';

const topImgContainer = () => {
    return (
        <div className="top-img-conteiner">
            <div className="background-img">
                <img src= {bgImg} alt="velo" />
                <div className="location">
                    <FontAwesomeIcon icon={faMapMarkerAlt} /><span>ST.PETERBURG</span>
                </div>
            </div>
            <div className="r-box-conteiner">
                <div>
                    <FontAwesomeIcon icon={faClock} size="2x" />
                    <p>Best time to visit</p>
                    <p><b>MARCH</b></p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faPlaneDeparture} size="2x" />
                    <p>20 flights from</p>
                    <p><b>$350</b></p>
                </div>
            </div>
        </div>
    );
};

export default topImgContainer;