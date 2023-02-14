import ChatItem from "./ChatItem/ChatItem";

import './ChatList.scss';

const ChatList = () => {
    return (
        <div className="chat-list">
            <ChatItem />
            <ChatItem />
            <ChatItem />
        </div>
    )
}

export default ChatList