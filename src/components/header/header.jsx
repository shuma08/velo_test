import './style.css';
import velo from '../logos/velo2.png';
import profilePhoto from '../logos/blank-profile-picture.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
      <header>
        <div className="top-panel">
          <div className="velo">
           <img src={velo} alt="Velo" />
          </div>
        <div className="navigation-panel">
          <div className="search-container">
            <input className="search_panel" type="search" name="search" />
            <span className="bar"></span>
            <div className="autocom-box">
              <li>Texas</li>
              <li>Poland</li>
              <li>Peterburg</li>
              <li>Netherland</li>
              <li>Lviv</li>
              <li>Kyiv</li>
            </div>
            <label for="search"> Search places</label>
          </div>
          <div className="profile">
            <img id="profile-photo" src={profilePhoto} onerror="this.src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'" alt="profile" />
            <div className="username"> username
            </div>
            <input type="button" name="login-out" />
            <label for="button" id="login-out">
              <FontAwesomeIcon icon={faPowerOff}/>
            </label>
          </div>
         </div>
        </div>
      </header> 
    );
};

export default Header;