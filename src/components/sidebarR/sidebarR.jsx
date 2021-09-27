import './style.scss';
import { SearchPanel } from '../search_panel';
import firstLogo from '../logos/1.png';
import secondLogo from '../logos/2.png';
import thirdLogo from '../logos/3.png';
import fourthLogo from '../logos/4.png';
import fifthLogo from '../logos/5.png';
import sixLogo from '../logos/6.png';
import sevenLogo from '../logos/7.png';

const SidebarR = () => {
    return (
        <aside class="r-sidebar">
            <nav>
                <div><p>Recent Trevelers</p></div>
                <div class="acounts">
                    <ul>
                        <li>
                            <img id="my-picture" src={firstLogo} alt="face" /> Jaremy Shaw
                        </li>
                        <li><img src={secondLogo} alt="face" />Kimberly Wales</li>
                        <li><img src={thirdLogo} alt="face" />Roman kozak</li>
                        <li><img src={fourthLogo} alt="face" />Rostuslav Matkovskiy</li>
                        <li><img src={fifthLogo} alt="face" />Alena Dast</li>
                        <li><img src={sixLogo} alt="face" />Anna Terletska</li>
                        <li><img src={sevenLogo} alt="face" />Oleg Vinnuk</li>
                    </ul>
                </div>
            </nav>
            <div class="chat-search">
                <SearchPanel name="Chat with" />
            </div>
        </aside>
    );
};

export default SidebarR;