import nodemailer from "nodemailer";
import MAIL from "../configs/mail.js";

export default nodemailer.createTransport({
  host: MAIL.HOST,
  port: MAIL.PORT,
  secure: MAIL.SECURE,
  requireTLS: MAIL.TLS,
  auth: {
    user: MAIL.AUTH_USER,
    pass: MAIL.AUTH_PASS,
  },
});
