import ChatItem from './ChatItem/ChatItem';

import './ChatList.scss';

import UserData from '../../mockdata/userData';
import { User } from '../../models/user';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import getLastMessage from '../../utils/getLastMessage';
import { MessageData } from '../../models/message';

interface PropsData {
    listMessData: MessageData[]
}

const ChatList = (props : PropsData) => {
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
            {dataUserFilter?.map((user: User, index: number) => {
                const lastMess = getLastMessage(props?.listMessData, user.id, userSigning.current.id)
                return (
                    <div key={index}>
                        <ChatItem data={user} lastMess={lastMess}/>
                    </div>
                )
            })}
        </div>
    );
};

export default ChatList;
