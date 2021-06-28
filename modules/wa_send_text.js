import { MessageType } from "@adiwajshing/baileys";
import { WA_STATUS } from "../commons/constants.js";
import states from "../commons/states.js";
import conn from "./wa_connection.js";

const sendText = (id, text) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (states.connection.status !== WA_STATUS.CONNECTED)
        throw "WhatsApp is disconnected.";
      const result = await conn.sendMessage(id, text, MessageType.text);
      resolve(result);
    } catch (e) {
      if (e.hasOwnProperty("context")) e = e.context.message;
      reject(e);
    }
  });
};

export default sendText;
