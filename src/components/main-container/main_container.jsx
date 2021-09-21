import './style.scss';
import firstImg from '../logos/firstboximg.png';
import secontImg from '../logos/secondboximg.png';
import thirdImg from '../logos/thirdboximg.png';
import fourImg from '../logos/fourboximg.png';
import fifthImg from '../logos/fifthboximg.png';
import sixImg from '../logos/sixboximg.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faVideo, faHeart } from '@fortawesome/free-solid-svg-icons';

const MainContainer = () => {
    return (
        <div className="main_container">
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
            <div className="upper-box-conteiner">
                <div className="upper-block">
                    <div className="img-container">
                        <img className="upper-block-img" src={firstImg} alt="brige" />
                    </div>
                    <div className="bottom-block">
                        <div>
                            <p><b>Cory Peterson</b></p>
                            <p>Texes,USA</p>
                        </div>
                        <div className="likes"><FontAwesomeIcon icon={faHeart} />150</div>
                    </div>
                </div>
                <div className="upper-block">
                    <div className="img-container">
                        <img className="upper-block-img" src={secontImg} alt="brige" />
                    </div>
                    <div className="bottom-block">
                        <div>
                            <p><b>Cory Peterson</b></p>
                            <p>Texes,USA</p>
                        </div>
                        <div className="likes"><FontAwesomeIcon icon={faHeart} />300</div>
                    </div>
                </div>
                <div className="upper-block">
                    <div className="img-container">
                        <img className="upper-block-img" src={thirdImg} alt="brige" />
                    </div>
                    <div className="bottom-block">
                        <div>
                            <p><b>Cory Peterson</b></p>
                            <p>Texes,USA</p>
                        </div>
                        <div className="likes"><FontAwesomeIcon icon={faHeart} />256</div>
                    </div>
                </div>
                <div className="upper-block">
                    <div className="img-container">
                        <img className="upper-block-img" src={fourImg} alt="brige" />
                    </div>
                    <div className="bottom-block">
                        <div>
                            <p><b>Cory Peterson</b></p>
                            <p>Texes,USA</p>
                        </div>
                        <div className="likes"><FontAwesomeIcon icon={faHeart} />180</div>
                    </div>
                </div>
                <div className="upper-block">
                    <div className="img-container">
                        <img className="upper-block-img" src={fifthImg} alt="brige" />
                    </div>
                    <div className="bottom-block">
                        <div>
                            <p><b>Cory Peterson</b></p>
                            <p>Texes,USA</p>
                        </div>
                        <div className="likes"><FontAwesomeIcon icon={faHeart} />400</div>
                    </div>
                </div>
                <div className="upper-block">
                    <div className="img-container">
                        <img className="upper-block-img" src={sixImg} alt="brige" />
                    </div>
                    <div className="bottom-block">
                        <div>
                            <p><b>Cory Peterson</b></p>
                            <p>Texes,USA</p>
                        </div>
                        <div className="likes"><FontAwesomeIcon icon={faHeart} />300</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContainer;