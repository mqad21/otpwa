import OTP from "../configs/otp.js";

export default () => {
  let result = "";
  let characters = OTP.ALLOWED_CHARS;
  for (let i = 0; i < OTP.LENGTH; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};
