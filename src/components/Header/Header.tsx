import InfoChatMess from '../InfoChatMess/InfoChatMess';
import Search from '../Search/Search';
import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <h1 className='title-header'>Chat</h1>
            <div className="row">
                <div className="col l-4 m-4 c-4">
                    <Search />
                </div>
                <div className="col l-8 m-7 c-8">
                    <InfoChatMess />
                </div>
            </div>
        </div>
    );
};

export default Header;
