import { MessageData } from "../models/message"

const messageData : MessageData[] = [
    {
        id: 1,
        idUserSend: 1,
        idUserReceive: 2,
        content: 'Hello',
        timeSend: 'Tue, 14 Feb 2023 13:30:05 GMT',
    },
    {
        id: 1,
        idUserSend: 2,
        idUserReceive: 1,
        content: 'Hello Nhe',
        timeSend: 'Tue, 14 Feb 2023 13:20:05 GMT',
    },
    {
        id: 1,
        idUserSend: 2,
        idUserReceive: 1,
        content: 'Hello Nhe Nhe',
        timeSend: 'Tue, 14 Feb 2023 13:40:05 GMT',
    }
]

export default messageData