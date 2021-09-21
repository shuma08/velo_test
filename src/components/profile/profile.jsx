import './style.scss';
import profilePhoto from '../logos/blank-profile-picture.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
    return (
        <div className="profile">
            <img id="profile-photo" src={profilePhoto} onError="this.src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'" alt="profile" />
            <div className="username"> username
            </div>
            <input type="button" name="login-out" />
            <label for="button" id="login-out">
                <FontAwesomeIcon icon={faPowerOff}/>
            </label>
        </div>
    );
};

export default Profile;