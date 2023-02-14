import InfoChatMess from '../InfoChatMess/InfoChatMess';
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
                <div className="col l-8">
                    <InfoChatMess />
                </div>
            </div>
        </div>
    );
};

export default Header;
