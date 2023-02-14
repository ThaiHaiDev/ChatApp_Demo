import './ChatWindown.scss';

import messageData from '../../mockdata/messageData';
import { MessageData } from '../../models/message';

import sortMessageWithTime from '../../utils/sortMessageWithTime'

const ChatWindown = () => {
    // if (messageData[0].timeSend.getTime() > messageData[1].timeSend.getTime()) {
    //     console.log('hehe')
    // } else {
    //     console.log('hoho')
    // }
    sortMessageWithTime(messageData)
    console.log(messageData[0].timeSend < messageData[1].timeSend)
    console.log(messageData[1].timeSend)
    return (
        <div className="chatwindown">
            <div className="content">
                {messageData?.map((mess: MessageData, index: number) => {
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
                {/* <div className="chat-content__item-left">
                    <div className="avatar-user__content">
                        <img
                            src="https://149441781.v2.pressablecdn.com/wp-content/uploads/2022/04/FRXvaJKXIAMo3YF.jpg"
                            alt=""
                            className="img-avatar__content"
                        />
                    </div>
                    <p className="message__content">Xin chào bạn, hôm nay bạn thế nào</p>
                </div>

                <div className="chat-content__item-right">
                    <p className="message__content">Xin chào bạn, hôm nay bạn thế nào</p>
                    <div className="avatar-user__content">
                        <img
                            src="https://149441781.v2.pressablecdn.com/wp-content/uploads/2022/04/FRXvaJKXIAMo3YF.jpg"
                            alt=""
                            className="img-avatar__content"
                        />
                    </div>
                </div> */}
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
