import baileys from "@adiwajshing/baileys";
import fs from "fs";
import { WA_STATUS } from "../commons/constants.js";
import states from "../commons/states.js";
import sendDisconnectMail from "./send_disconnect_mail.js";
import { io } from "./socket.js";

const { WAConnection, DisconnectReason } = baileys;

let conn = new WAConnection();
const tokenPath = "./auth_info.json";

if (fs.existsSync(tokenPath)) {
  conn.loadAuthInfo(tokenPath);
}

conn.on("open", async () => {
  console.log("credentials updated!");
  states.connection.status = WA_STATUS.CONNECTED;
  states.connection.qrString = "";
  io.emit("NEW_STATUS", states.connection);
  const authInfo = conn.base64EncodedAuthInfo();
  fs.writeFileSync(tokenPath, JSON.stringify(authInfo, null, "\t"));
});

conn.on("qr", (qr) => {
  states.connection.qrString = qr;
  io.emit("NEW_STATUS", states.connection);
});

conn.on("close", ({ reason, isReconnecting }) => {
  states.connection.status = WA_STATUS.DISCONNECTED;
  states.connection.qrString = "";
  states.connection = {
    ...states.connection,
    reason,
    isReconnecting,
  };

  if (reason == DisconnectReason.invalidSession) {
    if (fs.existsSync(tokenPath)) fs.unlinkSync(tokenPath);
    conn.clearAuthInfo();
  }

  io.emit("NEW_STATUS", states.connection);
  sendDisconnectMail(reason);
});

export default conn;
