import parseWaId from "./parse_wa_id.js";
import sendText from "./wa_send_text.js";

export default (otp, number) => {
  return new Promise(async (resolve, reject) => {
    try {
      const id = parseWaId(number);
      const message = `Berikut adalah nomor OTP anda *${otp}*. _NB: Jangan beritahu siapapun._`;
      const send = await sendText(id, message);
      resolve(send);
    } catch (e) {
      reject(e);
    }
  });
};
