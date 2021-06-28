import Otp from "../models/otp.model.js";
import sendOtp from "../modules/send_otp.js";
import { io } from "../modules/socket.js";

const otpController = new Object();

otpController.create = (req, res) => {
  if (!req.body) {
    res.status(400).json({
      message: "Request body can not be empty.",
    });
  }

  const { number } = req.body;
  const created_at = new Date();
  const otp = new Otp({ number, created_at });
  Otp.create(otp, async (err, data) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: err.message || "Failed to create OTP.",
      });
    }

    io.emit("NEW_OTP");
    try {
      await sendOtp(data.otp, data.number);
      res.json({
        success: true,
        message: "OTP sent successfully.",
        data,
      });
    } catch (e) {
      res
        .json({
          success: false,
          message: "Failed to send OTP. " + e,
          data,
        })
        .status(500);
    }
  });
};

otpController.verify = (req, res) => {
  if (!req.body) {
    res.status(400).json({
      message: "Request body can not be empty.",
    });
  }

  const { number, otp } = req.body;
  const targetOtp = new Otp({ number, otp });
  Otp.find(targetOtp, async (err, data) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: err.message || "Failed to find OTP.",
      });
    }

    targetOtp.id = data.id;
    console.log(data);
    targetOtp.verified_at = new Date();
    Otp.update(targetOtp, async (err, data) => {
      if (err) {
        res.status(500).json({
          success: false,
          message: err.message || "Failed to update OTP verified at.",
        });
      }

      io.emit("NEW_OTP");
      res.json({
        success: true,
        message: "OTP is verified.",
        data,
      });
    });
  });
};

otpController.getAll = (req, res) => {
  Otp.findAll((err, data) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: err.message || "Failed to retrieve OTPs.",
      });
    }
    res.json({
      success: true,
      message: "OTPs retrieved.",
      data,
    });
  });
};

export default otpController;
