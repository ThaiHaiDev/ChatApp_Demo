import './ChatWindown.scss';

import messageData from '../../mockdata/messageData';
import { MessageData } from '../../models/message';

import sortMessageWithTime from '../../utils/sortMessageWithTime';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { SubmitHandler, useForm } from 'react-hook-form';
import messSlice from '../../pages/MessagePage/messSlice';

const ChatWindown = () => {
    const userSigning = useSelector((state: RootState) => state.user);
    const { register, reset, handleSubmit } = useForm<any>();

    const dispatch = useDispatch();

    const params = useParams();
    const idMess = params.idMess !== undefined ? params.idMess : 0;

    const onSubmit: SubmitHandler<any>  = async (data: any) => {
        const timeSend = new Date();
        const newMess = {
            id: messageData.length + 1,
            idUserSend: userSigning.current?.id,
            idUserReceive: Number(idMess),
            content: data.content,
            timeSend: timeSend.toString()
        }
        await messageData.push(newMess)
        await dispatch(messSlice.actions.addMess(messageData));
        reset();
    };

    const dataMessFilter = messageData.filter((mess) => {
        return (
            (mess.idUserReceive === Number(idMess) && mess.idUserSend === userSigning.current.id) ||
            (mess.idUserSend === Number(idMess) && mess.idUserReceive === userSigning.current.id)
        );
    });

    sortMessageWithTime(dataMessFilter);

    return (
        <div className="chatwindown">
            <div className="content">
                {dataMessFilter?.map((mess: MessageData, index: number) => {
                    if (mess?.idUserSend === Number(idMess)) {
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
                    } else if (mess?.idUserSend === userSigning.current.id) {
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

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-chat">
                    <input type="text" className="input-mess" placeholder="Type a message" {...register('content')} />
                    <div className="btn-send">
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
