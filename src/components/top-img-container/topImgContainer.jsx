import './style.css'
import bgImg from '../logos/Velo1.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


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
        <i className="fal fa-clock fa-2x"></i>
        <p>Best time to visit</p>
        <p><b>MARCH</b></p>
      </div>
      <div>
        <i className="far fa-plane-departure fa-2x"></i>
        <p>20 flights from</p>
        <p><b>$350</b></p>
      </div>
    </div>
  </div>

    )

    
};

export default topImgContainer;