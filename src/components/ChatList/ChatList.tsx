import ChatItem from './ChatItem/ChatItem';

import './ChatList.scss';

import UserData from '../../mockdata/userData';
import { User } from '../../models/user';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ChatList = () => {
    const userSigning = useSelector((state: RootState) => state.user);
    
    const dataUserFilter = UserData.filter(user => { return user.id !== userSigning.current.id})

    const navigate = useNavigate();

    useEffect(() => {
        if (userSigning.current.id === undefined) {
            navigate('/signin')
        }
    }, [userSigning, navigate])

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
