import ChatItem from './ChatItem/ChatItem';

import './ChatList.scss';

import UserData from '../../mockdata/userData';
import { User } from '../../models/user';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const ChatList = () => {
    const userSigning = useSelector((state: RootState) => state.user);
    
    const dataUserFilter = UserData.filter(user => { return user.id !== userSigning.current.id})

    return (
        <div className="chat-list">
            {dataUserFilter?.map((user: User, index: number) => (
                <div key={index}>
                    <ChatItem data={user} />
                </div>
            ))}
        </div>
    );
};

export default ChatList;
