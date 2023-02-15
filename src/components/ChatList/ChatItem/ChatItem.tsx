import moment from 'moment';
import { useNavigate, useParams } from 'react-router-dom';
import { MessageData } from '../../../models/message';
import { User } from '../../../models/user';
import format3Dots from '../../../utils/format3Dots';
import './ChatItem.scss';

interface UserDataProp {
    data?: User,
    lastMess: MessageData
}

const ChatItem = (props : UserDataProp) => {
    const navigate = useNavigate();
    const params = useParams();
    const idActive = Number(params?.idMess);

    const handleLinkToMessDetail = (idMess: number | undefined) => {
        navigate(`/${idMess}`);
    };

    return (
        <div className={`${idActive !== props.data?.id ? 'chat-item' : 'chat-item active'}`} onClick={() => handleLinkToMessDetail(props.data?.id)}>
            <div className='left__chat'>
                <div className='avatar-user__chat'>
                    <img src={props.data?.avatar} alt='avatar'/>
                </div>
                <div className='info__chat'>
                    <p className='name-user__chat'>{props.data?.fullName}</p>
                    <p className='first-content__chat'>{format3Dots(props.lastMess?.content, 20)}</p>
                </div>
            </div>
            <div className='time__chat'>
                <p className='time-show__chat'>{moment(props.lastMess?.timeSend).format("MMM Do YY")}</p>
            </div>
        </div>
    )
}

export default ChatItem