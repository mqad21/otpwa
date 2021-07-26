import dotenv from "dotenv";
dotenv.config();

export default {
  HOST: "smtp.gmail.com",
  PORT: 587,
  SECURE: false,
  AUTH_USER: process.env.EMAIL_USER,
  AUTH_PASS: process.env.EMAIL_PASS,
  TLS: true,
  DISCONNECT_MAIL: {
    FROM: `"Beliu.id" <${process.env.EMAIL_USER}>`,
    TARGET: ["mqad21@gmail.com"],
    SUBJECT: "Koneksi OTP WA Terputus",
    TEXT: (e) => `Koneksi OTP telah terputus. Error: (${e})`,
  },
};
