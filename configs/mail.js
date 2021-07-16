export default {
  HOST: "smtp.gmail.com",
  PORT: 587,
  SECURE: false,
  AUTH_USER: "halo.beliuid@gmail.com",
  AUTH_PASS: "beliu5758!",
  TLS: true,
  DISCONNECT_MAIL: {
    FROM: '"Beliu.id" <halo.beliuid.gmail.com>',
    TARGET: ["mqad21@gmail.com"],
    SUBJECT: "Koneksi OTP WA Terputus",
    TEXT: (e) => `Koneksi OTP telah terputus. Error: (${e})`,
  },
};
