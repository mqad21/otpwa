import mysql from "../modules/mysql_connection.js";
import getRandomOtp from "../modules/random_otp.js";

const Otp = function (otp) {
  if (!otp.otp) {
    this.otp = getRandomOtp();
  } else {
    this.otp = otp.otp;
  }
  if (otp.created_at) this.created_at = otp.created_at;
  this.number = otp.number;
};

Otp.create = (newOtp, result) => {
  mysql.query("INSERT INTO otp SET ?", newOtp, (err, res) => {
    if (err) {
      console.error(err);
      return result(err, null);
    }
    result(null, { id: res.insertId, ...newOtp });
  });
};

Otp.findAll = (result) => {
  mysql.query("SELECT * FROM otp ORDER BY id DESC", (err, res) => {
    if (err) {
      console.error(err);
      return result(err, null);
    }
    result(null, res);
  });
};

Otp.find = (otp, result) => {
  mysql.query(
    "SELECT * FROM otp WHERE number = ? AND otp = ?",
    [otp.number, otp.otp],
    (err, res) => {
      if (err) {
        console.error(err);
        return result(err, null);
      }

      if (!res.length) {
        return result(Error("OTP not found."), null);
      }

      result(null, res[0]);
    }
  );
};

Otp.update = (otp, result) => {
  mysql.query("UPDATE otp SET ? where id = ?", [otp, otp.id], (err, res) => {
    if (err) {
      console.error(err);
      return result(err, null);
    }
    result(null, res);
  });
};

export default Otp;
