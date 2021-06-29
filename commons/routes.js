import express from "express";
import otpController from "../controllers/otp.controller.js";
import waController from "../controllers/wa.controller.js";

const { Router } = express;

const routes = Router();

routes.use("/", [waController.auth, express.static("admin/dist")]);
routes.post("/connect", waController.connect);
routes.get("/status", waController.getStatus);
routes.post("/new", otpController.create);
routes.post("/verify", otpController.verify);
routes.get("/all", otpController.getAll);

export default routes;
