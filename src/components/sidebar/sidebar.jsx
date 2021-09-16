import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenAlt,faGlobeAmericas,faPaperclip,faBox,faCog } from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-regular-svg-icons'



const Sidebar = () => {
return(
    <aside class="l-sidebar">
        <nav>
            <div>
             <ul>
                <li><FontAwesomeIcon icon={faPenAlt} size='lg'/></li>
                <li><FontAwesomeIcon icon ={faHeart} size='lg'/></li>
                <li><FontAwesomeIcon icon={faGlobeAmericas} size='lg'/></li>
                <li><FontAwesomeIcon icon={faPaperclip} size='lg'/></li>
             </ul>
            </div>
            <div>
              <ul>
                <li><FontAwesomeIcon icon={faBox} size='lg'/></li>
                <li><FontAwesomeIcon icon={faCog} size='lg'/></li>
              </ul>
            </div>
        </nav>
        </aside>
   )
};
export default Sidebar;