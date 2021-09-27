import './style.scss';

const SearchPanel = (props) => {
    return (
        <div className="search-container">
            <input className="search_panel" type="search" name="search" />
            <span className="bar"></span>
            <div className="autocom-box">
            </div>
            <label for="search">{props.name} </label>
        </div>
    );
};

export default SearchPanel;