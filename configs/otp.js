import dotenv from "dotenv";
dotenv.config();

export default {
  LENGTH: 4,
  ALLOWED_CHARS: "0123456789",
  EXPIRED_TIME: 60,
  USERNAME: process.env.ADMIN_USER,
  PASSWORD: process.env.ADMIN_PASS,
  MESSAGE: (otp) =>
    `Berikut adalah nomor OTP anda *${otp}*. _NB: Jangan beritahu siapapun._`,
};

