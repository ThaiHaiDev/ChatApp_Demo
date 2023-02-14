import './ChatWindown.scss';

const ChatWindown = () => {
    return (
        <div className="chatwindown">
            <div className="content">
                <div className='chat-content__item-left'>
                    <div className='avatar-user__content'>
                        <img
                                src="https://149441781.v2.pressablecdn.com/wp-content/uploads/2022/04/FRXvaJKXIAMo3YF.jpg"
                                alt=""
                                className="img-avatar__content"
                            />
                    </div>
                    <p className='message__content'>Xin chào bạn, hôm nay bạn thế nào</p>
                </div>

                <div className='chat-content__item-right'>
                    <p className='message__content'>Xin chào bạn, hôm nay bạn thế nào</p>
                    <div className='avatar-user__content'>
                        <img
                                src="https://149441781.v2.pressablecdn.com/wp-content/uploads/2022/04/FRXvaJKXIAMo3YF.jpg"
                                alt=""
                                className="img-avatar__content"
                            />
                    </div>
                </div>
            </div>
           
            <div className='input-chat'>
                <input className='input-mess'placeholder='Type a message'/>
                <div className='btn-send'>
                    <img src="https://img.icons8.com/fluency/24/null/filled-sent.png" alt='icon-send' className='icon-send'/>
                </div>
            </div>
            
        </div>
    )
}

export default ChatWindown