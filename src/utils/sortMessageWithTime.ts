import { MessageData } from "../models/message"

const sortMessageWithTime = (data : MessageData[]) => {
    var size = data.length;
    for (var i = 0; i < size - 1; i++) {
        for (var j = 0; j < size - i - 1; j++) {
            if (data[j].timeSend > data[j + 1].timeSend) {
                var temp = data[j];
                data[j] = data[j + 1];
                data[j + 1] = temp;
              }
        }
    }
}

export default sortMessageWithTime