import './style.scss';
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
                <SearchPanel search={{ name: 'Search places' }}/>
                <Profile />
            </div>
        </div>
    </header>
  );
};

export default Header;