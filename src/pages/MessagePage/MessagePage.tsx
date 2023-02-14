import ChatList from '../../components/ChatList/ChatList';
import ChatWindown from '../../components/ChatWindown/ChatWindown';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';

import './MessagePage.scss';

const MessagePage = () => {
    return (
        <div className="message__page">
            <div className="row" style={{ height: '100%' }}>
                <div className="col l-2 m-0 c-0" style={{ background: '#64b5f6' }}>
                    <Sidebar />
                </div>
                <div className="col l-10 m-12 c-12" style={{ background: '#f5f5f5' }}>
                    <Header />
                    <div className="row">
                        <div className="col l-4">
                            <ChatList />
                        </div>
                        <div className="col l-8">
                            <ChatWindown />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessagePage;
