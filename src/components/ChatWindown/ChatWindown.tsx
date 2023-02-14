import './ChatWindown.scss';

import messageData from '../../mockdata/messageData';
import { MessageData } from '../../models/message';

import sortMessageWithTime from '../../utils/sortMessageWithTime'
import { useParams } from 'react-router-dom';

const ChatWindown = () => {
    const params = useParams();
    const idMess = params.idMess !== undefined ? params.idMess : 0

    const dataMessFilter = messageData.filter((mess) => { return mess.idUserReceive === Number(idMess) ||  mess.idUserReceive === 1})
    // === 1 là id của user đang signin
    
    sortMessageWithTime(dataMessFilter)

    return (
        <div className="chatwindown">
            <div className="content">
                {dataMessFilter?.map((mess: MessageData, index: number) => {
                    if (mess?.idUserReceive === 2) {
                        // Bằng với id của người đc chọn để chat
                        return (
                            <div className="chat-content__item-left" key={index}>
                                <div className="avatar-user__content">
                                    <img
                                        src="https://149441781.v2.pressablecdn.com/wp-content/uploads/2022/04/FRXvaJKXIAMo3YF.jpg"
                                        alt=""
                                        className="img-avatar__content"
                                    />
                                </div>
                                <p className="message__content">{mess?.content}</p>
                            </div>
                        );
                    } else if (mess?.idUserReceive === 1) {
                        // Bằng với id của người đang signin
                        return (
                            <div className="chat-content__item-right" key={index}>
                                <p className="message__content">{mess?.content}</p>
                                <div className="avatar-user__content">
                                    <img
                                        src="https://149441781.v2.pressablecdn.com/wp-content/uploads/2022/04/FRXvaJKXIAMo3YF.jpg"
                                        alt=""
                                        className="img-avatar__content"
                                    />
                                </div>
                            </div>
                        );
                    }
                    return <></>;
                })}
            </div>

            <div className="input-chat">
                <input className="input-mess" placeholder="Type a message" />
                <div className="btn-send">
                    <img
                        src="https://img.icons8.com/fluency/24/null/filled-sent.png"
                        alt="icon-send"
                        className="icon-send"
                    />
                </div>
            </div>
        </div>
    );
};

export default ChatWindown;
