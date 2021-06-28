import express, { Router } from "express";
import path from "path";
import serveIndex from "serve-index";
import otpController from "../controllers/otp.controller.js";
import waController from "../controllers/wa.controller.js";

const routes = Router();

routes.use("/", [waController.auth, express.static("admin/dist")]);
// routes.use(
//   "/admin",
//   ,
//   serveIndex("admin/dist", { icons: true })
// );
routes.post("/connect", waController.connect);
routes.get("/status", waController.getStatus);
routes.post("/new", otpController.create);
routes.post("/verify", otpController.verify);
routes.get("/all", otpController.getAll);

export default routes;
