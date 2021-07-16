import mail from "./mail.js";
import MAIL from "../configs/mail.js";

export default (error) => {
  mail
    .sendMail({
      from: MAIL.DISCONNECT_MAIL.FROM,
      to: MAIL.DISCONNECT_MAIL.TARGET.join(", "),
      subject: MAIL.DISCONNECT_MAIL.SUBJECT,
      text: MAIL.DISCONNECT_MAIL.TEXT(error),
    })
    .catch((e) => {
      console.log(e);
    });
};
