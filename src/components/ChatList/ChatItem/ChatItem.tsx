import './ChatItem.scss';

const ChatItem = () => {
    return (
        <div className="chat-item">
            <div className='avatar-user__chat'>
                <img src='https://149441781.v2.pressablecdn.com/wp-content/uploads/2022/04/FRXvaJKXIAMo3YF.jpg' alt=''/>
            </div>
            <div className='info__chat'>
                <p className='name-user__chat'>Thai Hai</p>
                <p className='first-content__chat'>Hello</p>
            </div>
        </div>
    )
}

export default ChatItem