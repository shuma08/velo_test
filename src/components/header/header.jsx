import './style.scss';
import velo from '../logos/velo2.png';
import profilePhoto from '../logos/blank-profile-picture.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { SearchPanel } from '../searchPanel';

const Header = () => {
    return (
        <header>
            <div className="top-panel">
                <div className="velo">
                    <img src={velo} alt="Velo" />
                </div>
                <div className="navigation-panel">
                    <SearchPanel name="Search places"/>
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