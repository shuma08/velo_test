import './style.scss';
import velo from '../logos/velo2.png';
import { SearchPanel } from '../search_panel';
import { Profile } from '../profile';

const Header = () => {
return (
    <header>
        <div className="top-panel">
            <div className="velo">
                <img src={velo} alt="Velo" />
            </div>
            <div className="navigation-panel">
                <SearchPanel name="Search places" />
                <Profile />
            </div>
        </div>
    </header>
  );
};

export default Header;