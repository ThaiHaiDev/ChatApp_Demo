import { useEffect, useState } from 'react';
import ChatList from '../../components/ChatList/ChatList';
import ChatWindown from '../../components/ChatWindown/ChatWindown';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import { MessageData } from '../../models/message';
import messageApi from '../../services/messageApi';

import './MessagePage.scss';

const MessagePage = () => {
    const [listMessData, setListMessData] = useState<MessageData[]>([])
    
    useEffect(() => {
        messageApi.getAllMessage().then((data) => {
            setListMessData(data)
        })
    }, [])

    return (
        <div className="message__page">
            <div className="row" style={{ height: '100%' }}>
                <div className="col l-2 m-0 c-0" style={{ background: '#64b5f6' }}>
                    <Sidebar />
                </div>
                <div className="col l-10 m-12 c-12" style={{ background: '#f5f5f5' }}>
                    <Header />
                    <div className="row">
                        <div className="col l-4 m-4">
                            <ChatList listMessData={listMessData} />
                        </div>
                        <div className="col l-8 m-7">
                            <ChatWindown listMessData={listMessData} setListMessData={setListMessData}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessagePage;
