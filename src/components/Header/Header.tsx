import Search from '../Search/Search';
import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <h1>Chat</h1>
            <div className="row">
                <div className="col l-4">
                    <Search />
                </div>
            </div>
        </div>
    );
};

export default Header;
