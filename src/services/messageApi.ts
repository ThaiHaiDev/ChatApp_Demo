import axiosClient from '../share/axios-client/axiosClient';

const messageApi = {
    getAllMessage(): Promise<any> {
        const url = 'mess';
        return axiosClient.get(url);
    },
    addMess(data : any): Promise<any> {
        const url = 'mess';
        return axiosClient.post(url,data);
    },
};

export default messageApi;
