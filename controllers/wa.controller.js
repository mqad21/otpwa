import states from "../commons/states.js";
import OTP from "../configs/OTP.js";
import conn from "../modules/wa_connection.js";
import auth from "basic-auth";
import express from "express";

const waController = new Object();

waController.auth = (req, res, next) => {
  let user = auth(req);
  if (
    user === undefined ||
    user["name"] !== OTP.USERNAME ||
    user["pass"] !== OTP.PASSWORD
  ) {
    res.statusCode = 401;
    res.setHeader("WWW-Authenticate", 'Basic realm="Node"');
    res.end("Unauthorized");
  } else {
    next();
  }
};

waController.getStatus = (req, res) => {
  res
    .json({
      success: true,
      message: "WA connection status received.",
      data: states.connection,
    })
    .status(200);
};

waController.connect = async (req, res) => {
  if (conn.state == "close") {
    await conn.connect();
    res.json({
      success: true,
      message: "WA is connecting.",
    });
  }
  res.json({
    success: false,
    message: "WA is connecting.",
  });
};

export default waController;
