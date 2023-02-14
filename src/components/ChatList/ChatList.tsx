import ChatItem from './ChatItem/ChatItem';

import './ChatList.scss';

import UserData from '../../mockdata/userData';
import { User } from '../../models/user';

const ChatList = () => {
    return (
        <div className="chat-list">
            {UserData?.map((user: User, index: number) => (
                <div key={index}>
                    <ChatItem data={user} />
                </div>
            ))}
        </div>
    );
};

export default ChatList;
