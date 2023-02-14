import { User } from '../../../models/user';
import './ChatItem.scss';

interface UserDataProp {
    data?: User
}

const ChatItem = (props : UserDataProp) => {
    return (
        <div className="chat-item">
            <div className='avatar-user__chat'>
                <img src={props.data?.avatar} alt='avatar'/>
            </div>
            <div className='info__chat'>
                <p className='name-user__chat'>{props.data?.fullName}</p>
                <p className='first-content__chat'>Hello</p>
            </div>
        </div>
    )
}

export default ChatItem