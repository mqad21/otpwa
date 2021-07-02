export default {
  LENGTH: 4,
  ALLOWED_CHARS: "0123456789",
  EXPIRED_TIME: 60,
  USERNAME: "admin",
  PASSWORD: "rum4h.wa",
  MESSAGE: (otp) =>
    `Berikut adalah nomor OTP anda *${otp}*. _NB: Jangan beritahu siapapun._`,
};
