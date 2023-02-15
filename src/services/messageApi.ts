import { MessageData, MessageDataRequest, MessageDataResponse } from '../models/message';
import axiosClient from '../share/axios-client/axiosClient';

const messageApi = {
    getAllMessage(): Promise<MessageDataResponse[]> {
        const url = 'api/v1/mess';
        return axiosClient.get(url);
    },
    addMess(data : MessageData): Promise<MessageDataRequest> {
        const url = 'api/v1/mess';
        return axiosClient.post(url,data);
    },
};

export default messageApi;
