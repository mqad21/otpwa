import express from "express";
import otpController from "../controllers/otp.controller.js";
import waController from "../controllers/wa.controller.js";
import messageController from "../controllers/message.controller.js";

const { Router } = express;

const routes = Router();

routes.use("/", [waController.auth, express.static("admin/dist")]);
routes.post("/send", messageController.send);
routes.post("/connect", waController.connect);
routes.get("/status", waController.getStatus);
routes.post("/new", otpController.create);
routes.post("/verify", otpController.verify);
routes.get("/all", otpController.getAll);

export default routes;
