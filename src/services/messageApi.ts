import { MessageData } from '../models/message';
import axiosClient from '../share/axios-client/axiosClient';

const messageApi = {
    getAllMessage(): Promise<any> {
        const url = 'api/v1/mess';
        return axiosClient.get(url);
    },
    addMess(data : MessageData): Promise<any> {
        const url = 'api/v1/mess';
        return axiosClient.post(url,data);
    },
};

export default messageApi;
