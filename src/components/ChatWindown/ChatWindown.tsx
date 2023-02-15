import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { SubmitHandler, useForm } from 'react-hook-form';

import messageData from '../../mockdata/messageData';
import { MessageData, MessageDataRequest } from '../../models/message';
import messageApi from '../../services/messageApi';
import sortMessageWithTime from '../../utils/sortMessageWithTime';

import moment from 'moment';
import useChatScroll from '../../hooks/useChatScroll';

import './ChatWindown.scss';

interface PropsData {
    listMessData: MessageData[],
    handleSetListMessData: (value : MessageData[]) => void 
}

interface dataForm {
    content: string
}

const ChatWindown = (props : PropsData) => {
    const userSigning = useSelector((state: RootState) => state.user);
    const { register, reset, handleSubmit } = useForm<MessageDataRequest>();

    const params = useParams();
    const idMess = params.idMess !== undefined ? params.idMess : 0;

    const ref = useChatScroll(props?.listMessData)

    const onSubmit: SubmitHandler<MessageDataRequest>  =  (data: dataForm) => {
        const timeSend = new Date();
        const newMess = {
            id: messageData.length + 1,
            idUserSend: userSigning.current?.id,
            idUserReceive: Number(idMess),
            content: data.content,
            timeSend: timeSend.toString()
        }
        messageApi.addMess(newMess).then((data) => {
            props?.handleSetListMessData([...props?.listMessData, data])
        })
        reset();
    };

    const dataMessFilter = props?.listMessData.filter((mess:any) => {
        return (
            (mess.idUserReceive === Number(idMess) && mess.idUserSend === userSigning.current.id) ||
            (mess.idUserSend === Number(idMess) && mess.idUserReceive === userSigning.current.id)
        );
    });

    sortMessageWithTime(dataMessFilter);

    return (
        <div className="chatwindown">
            <div className="content" ref={ref}>
                {dataMessFilter?.map((mess: MessageData, index: number) => {
                    if (mess?.idUserSend === Number(idMess)) {
                        // Equal to the id of the person selected to chat
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
                                <p className='message__timeSend'>{moment(mess?.timeSend).format('h:mm a')}</p>
                            </div>
                        );
                    } else if (mess?.idUserSend === userSigning.current.id) {
                        // Equal to the id of the person who is signing in
                        return (
                            <div className="chat-content__item-right" key={index}>
                                <p className='message__timeSend'>{moment(mess?.timeSend).format('h:mm a')}</p>
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

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-chat">
                    <input type="text" className="input-mess" placeholder="Type a message" {...register('content')} />
                    <div className="btn-send" onClick={handleSubmit(onSubmit)}>
                        <img
                            src="https://img.icons8.com/fluency/24/null/filled-sent.png"
                            alt="icon-send"
                            className="icon-send"
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ChatWindown;
