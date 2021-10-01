import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faVideo } from '@fortawesome/free-solid-svg-icons';

const MainContainer = () => {
    return (
        <div className="upper-conteiner">
            <div>
                <span>
                    <input
                        type="radio"
                        name="contact"
                        id="choice1"
                        value="newest"
                        checked
                    />
                    <label for="choice1">Newest</label>
                </span>
                <span>
                    <input type="radio" name="contact" id="choice2" value="popular" />
                    <label for="choice2">Popular</label>
                </span>
            </div>
            <div className="type-menu">
                <div>
                    <input
                        type="radio"
                        name="photo-video"
                        id="choice3"
                        value="photo"
                        checked
                    />
                    <label for="choice3">
                        <FontAwesomeIcon icon={faImages} size="lg" />
                    </label>
                </div>
                <div>
                    <input type="radio" name="photo-video" id="choice4" value="video" />
                    <label for="choice4">
                        <FontAwesomeIcon icon={faVideo} size="lg" />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default MainContainer;