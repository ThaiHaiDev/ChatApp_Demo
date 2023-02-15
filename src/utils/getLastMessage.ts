import sortMessageWithTime from "./sortMessageWithTime";

const getLastMessage = (listMessData : any, idMess : any, idUserSigning : any) => {
    const dataMessFilter = listMessData.filter((mess:any) => {
        return (
            (mess.idUserReceive === Number(idMess) && mess.idUserSend === idUserSigning) ||
            (mess.idUserSend === Number(idMess) && mess.idUserReceive === idUserSigning)
        );
    });
    
    sortMessageWithTime(dataMessFilter);
    return dataMessFilter[Number(dataMessFilter.length) - 1]
}

export default getLastMessage