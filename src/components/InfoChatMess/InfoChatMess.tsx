import { useParams } from 'react-router-dom';
import './InfoChatMess.scss';

import userData from '../../mockdata/userData';

const InfoChatMess = () => {
    const params = useParams();
    const userChat = userData.find(user => { return user.id === Number(params?.idMess)})

    return (
        <div className="infochatmess">
            <div className='user__mess'>
                <p className="name-user__mess">{userChat?.fullName}</p>
                <p className="desc-user__mess">From: VN</p>
            </div>
        </div>
    );
};

export default InfoChatMess;
